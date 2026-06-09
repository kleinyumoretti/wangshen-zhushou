<template>
  <view class="page-wrapper">
    <view class="page-container">
      <!-- 页面标题 -->
      <view class="page-title">简历管理</view>

      <!-- 顶部：筛选框 + 添加按钮 -->
      <view class="top-bar">
        <view class="select-input">
          <text class="select-text">{{ selectedOption }}</text>
          <text class="select-arrow">▼</text>
        </view>
        <view class="add-btn" @click="addResume">
          <text>+</text>
        </view>
      </view>

      <!-- 简历表格 -->
      <view class="table-card">
        <view class="resume-table">
          <!-- 表头 -->
          <view class="table-header">
            <text class="th">简历版本</text>
            <text class="th">操作</text>
          </view>

          <!-- 表格内容 -->
          <view 
            class="table-row" 
            v-for="(resume, index) in resumes" 
            :key="resume._id || index"
          >
            <text class="td">{{ resume.resume_name }}</text>
            <view class="td">
              <view class="action-btns">
                <view class="edit-btn" @click="editResume(resume)">
                  <image class="download" src="/static/download.png" />
                </view>
                <view class="del-btn" @click="deleteResume(resume)">
                  <image class="del" src="/static/delete.png" />
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 底部导航 -->
    <bottom-nav currentPath="/pages/resume/resume"></bottom-nav>

    <!-- 添加简历表单弹窗 -->
    <view class="modal-overlay" v-if="showForm" @click="hideAddForm">
      <view class="form-card" @click.stop>
        <text class="form-title">添加简历</text>
        
        <view class="form-item">
          <text class="form-label">简历名称</text>
          <input 
            class="form-input" 
            v-model="formData.resume_name" 
            placeholder="请输入简历名称"
          />
        </view>
        
        <view class="form-item">
          <text class="form-label">文件上传</text>
          <view class="upload-btn" @click="chooseFile">
            <text>{{ formData.file_name || '点击选择文件' }}</text>
          </view>
        </view>
        
        <!-- 上传进度提示 -->
        <view class="form-item" v-if="uploading">
          <text class="upload-status">上传中... {{ uploadProgress }}%</text>
        </view>
        
        <view class="form-buttons">
          <view class="cancel-btn" @click="hideAddForm">
            <text>取消</text>
          </view>
          <view class="confirm-btn" @click="submitForm">
            <text>确认</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import storage from '@/utils/storage'

export default {
  data() {
    return {
      selectedOption: '全部版本',
      resumes: [],
      showForm: false,
      uploading: false,
      uploadProgress: 0,
      formData: {
        resume_name: '',
        file_url: '',
        file_name: '',
        file_size: 0
      },
      selectedFile: null  // 存储选中的文件对象
    }
  },
  onShow() {
    this.loadResumes()
  },
  methods: {
    async loadResumes() {
      const phoneNumber = storage.getPhone()
      
      if (!phoneNumber) {
        uni.showToast({ title: '请先登录', icon: 'none' })
        return
      }
      
      try {
        const db = uniCloud.database()
        const res = await db.collection('resume_files')
          .where({ phone_number: phoneNumber })
          .orderBy('update_time', 'desc')
          .get()
        
        this.resumes = res.result.data
      } catch (error) {
        console.error('获取简历列表失败:', error)
        uni.showToast({ title: '获取数据失败', icon: 'none' })
      }
    },
    addResume() {
      this.showForm = true
    },
    hideAddForm() {
      this.showForm = false
      this.resetForm()
    },
    resetForm() {
      this.formData = {
        resume_name: '',
        file_url: '',
        file_name: '',
        file_size: 0,
        local_path: '',
        tempPath: ''
      }
      this.selectedFile = null
      this.uploading = false
      this.uploadProgress = 0
    },
    chooseFile() {
      // #ifdef H5
      this.chooseFileH5()
      // #endif
      // #ifdef APP-PLUS
      this.chooseFileApp()
      // #endif
    },
    
    // H5 端选择文件
    chooseFileH5() {
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = '.pdf'
      input.style.display = 'none'
      input.onchange = (e) => {
        const file = e.target.files[0]
        if (!file) return
        
        if (!file.name.toLowerCase().endsWith('.pdf')) {
          uni.showToast({ title: '请选择PDF文件', icon: 'none' })
          return
        }
        
        this.selectedFile = file
        this.formData.file_name = file.name
        this.formData.file_size = file.size
        this.formData.tempPath = URL.createObjectURL(file)
        
        uni.showToast({ title: '选择成功', icon: 'success' })
      }
      document.body.appendChild(input)
      input.click()
      setTimeout(() => {
        document.body.removeChild(input)
      }, 100)
    },
    
    // App 端选择文件
    chooseFileApp() {
      // #ifdef APP-PLUS
      uni.chooseFile({
        count: 1,
        type: 'file',
        extension: ['pdf'],
        success: (res) => {
          console.log('chooseFile success:', res)
          
          // App 端获取文件路径的方式
          let filePath = ''
          let fileName = ''
          let fileSize = 0
          
          if (res.tempFiles && res.tempFiles.length > 0) {
            const file = res.tempFiles[0]
            // App 端文件路径通常在 path 属性中
            filePath = file.path || file.uri || ''
            fileName = file.name || ''
            fileSize = file.size || 0
          }
          
          if (!filePath) {
            uni.showToast({ title: '获取文件路径失败', icon: 'none' })
            return
          }
          
          if (!fileName.toLowerCase().endsWith('.pdf')) {
            uni.showToast({ title: '请选择PDF文件', icon: 'none' })
            return
          }
          
          // 保存文件到本地应用沙箱目录
          const phoneNumber = storage.getPhone() || 'guest'
          const saveFileName = `${phoneNumber}_${Date.now()}_${fileName}`
          uni.saveFile({
            tempFilePath: filePath,
            filePath: `${uni.env.USER_DATA_PATH}/${saveFileName}`,
            success: (saveRes) => {
              console.log('保存文件成功:', saveRes)
              this.selectedFile = {
                path: saveRes.savedFilePath,
                name: fileName,
                size: fileSize
              }
              this.formData.file_name = fileName
              this.formData.file_size = fileSize
              this.formData.local_path = saveRes.savedFilePath
              uni.showToast({ title: '选择成功', icon: 'success' })
            },
            fail: (err) => {
              console.error('保存文件失败:', err)
              // 保存失败时仍使用临时路径
              this.selectedFile = {
                path: filePath,
                name: fileName,
                size: fileSize
              }
              this.formData.file_name = fileName
              this.formData.file_size = fileSize
              this.formData.local_path = filePath
              uni.showToast({ title: '选择成功（未持久化）', icon: 'none' })
            }
          })
        },
        fail: (err) => {
          console.error('选择文件失败:', err)
          uni.showToast({ title: '选择文件失败', icon: 'none' })
        }
      })
      // #endif
    },
    
    // 上传文件到云存储（修正版）
    async uploadFile() {
      return new Promise((resolve, reject) => {
        if (!this.selectedFile) {
          reject(new Error('请先选择文件'))
          return
        }
        
        this.uploading = true
        this.uploadProgress = 0
        
        const phoneNumber = storage.getPhone()
        const timestamp = Date.now()
        // 处理文件名，移除特殊字符
        const safeFileName = this.selectedFile.name.replace(/[^a-zA-Z0-9\u4e00-\u9fa5.]/g, '_')
        const cloudPath = `resumes/${phoneNumber}/${timestamp}_${safeFileName}`
        
        // #ifdef H5
        // H5 端：filePath 直接传文件对象
        uniCloud.uploadFile({
          filePath: this.selectedFile,
          cloudPath: cloudPath,
          success: (res) => {
            console.log('上传成功:', res)
            this.uploadProgress = 100
            resolve(res.fileID)
          },
          fail: (err) => {
            console.error('上传失败:', err)
            reject(err)
          },
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
              this.uploadProgress = percentCompleted
            }
          }
        })
        // #endif
        
        // #ifdef APP-PLUS
        // App 端：filePath 需要传字符串路径
        const filePath = this.selectedFile.path || this.selectedFile
        if (typeof filePath !== 'string') {
          reject(new Error('文件路径无效，请重新选择文件'))
          return
        }
        
        uniCloud.uploadFile({
          filePath: filePath,
          cloudPath: cloudPath,
          success: (res) => {
            console.log('上传成功:', res)
            this.uploadProgress = 100
            resolve(res.fileID)
          },
          fail: (err) => {
            console.error('上传失败:', err)
            reject(err)
          },
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
              this.uploadProgress = percentCompleted
            }
          }
        })
        // #endif
      })
    },
    
    // 获取文件的临时访问 URL
    async getFileUrl(fileID) {
      try {
        const res = await uniCloud.getTempFileURL({
          fileList: [fileID]
        })
        if (res.fileList && res.fileList[0] && res.fileList[0].tempFileURL) {
          return res.fileList[0].tempFileURL
        }
        return null
      } catch (error) {
        console.error('获取文件URL失败:', error)
        return null
      }
    },
    
    async submitForm() {
      if (!this.formData.resume_name) {
        uni.showToast({ title: '请输入简历名称', icon: 'none' })
        return
      }
      
      if (!this.selectedFile) {
        uni.showToast({ title: '请选择PDF文件', icon: 'none' })
        return
      }
      
      const phoneNumber = storage.getPhone()
      if (!phoneNumber) {
        uni.showToast({ title: '请先登录', icon: 'none' })
        return
      }
      
      try {
        uni.showLoading({ title: '保存中...' })
        
        // 获取本地文件路径
        let localPath = ''
        
        // #ifdef H5
        // H5 端：使用 FileReader 转 base64
        localPath = this.formData.tempPath || ''
        // #endif
        
        // #ifdef APP-PLUS
        // App 端：使用保存到本地的路径
        localPath = this.formData.local_path || this.selectedFile.path || ''
        // #endif
        
        if (!localPath) {
          throw new Error('获取文件路径失败')
        }
        
        // 保存到数据库（使用本地文件路径）
        const now = Date.now()
        const db = uniCloud.database()
        await db.collection('resume_files').add({
          phone_number: phoneNumber,
          resume_name: this.formData.resume_name,
          file_url: localPath,           // 本地文件路径
          file_name: this.formData.file_name,
          file_size: this.formData.file_size,
          create_time: now,
          update_time: now
        })
        
        uni.hideLoading()
        uni.showToast({ title: '添加成功', icon: 'success' })
        this.hideAddForm()
        this.loadResumes()
        
      } catch (error) {
        uni.hideLoading()
        console.error('添加简历失败:', error)
        uni.showToast({ title: error.message || '添加失败', icon: 'none' })
      }
    },
    
    editResume(resume) {
      if (resume.file_url) {
        uni.downloadFile({
          url: resume.file_url,
          success: (res) => {
            if (res.statusCode === 200) {
              uni.openDocument({
                filePath: res.tempFilePath,
                success: () => {
                  console.log('简历打开成功')
                },
                fail: () => {
                  uni.showToast({ title: '打开失败', icon: 'none' })
                }
              })
            }
          },
          fail: () => {
            uni.showToast({ title: '下载失败', icon: 'none' })
          }
        })
      } else {
        uni.showToast({ title: `下载 ${resume.resume_name}`, icon: 'none' })
      }
    },
    
    async deleteResume(resume) {
      uni.showModal({
        title: '确认删除',
        content: `确定要删除 ${resume.resume_name} 吗？`,
        success: async (modalRes) => {
          if (modalRes.confirm) {
            try {
              // 1. 删除云存储中的文件（如果有 file_id）
              if (resume.file_id) {
                try {
                  await uniCloud.deleteFile({
                    fileList: [resume.file_id]
                  })
                } catch (fileError) {
                  console.error('删除云存储文件失败:', fileError)
                }
              }
              
              // 2. 删除数据库记录
              const db = uniCloud.database()
              await db.collection('resume_files')
                .doc(resume._id)
                .remove()
              
              uni.showToast({ title: '删除成功', icon: 'success' })
              this.loadResumes()
            } catch (error) {
              console.error('删除简历失败:', error)
              uni.showToast({ title: '删除失败', icon: 'none' })
            }
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
// ... 保持原有样式不变，添加以下新样式

.upload-status {
  font-size: 12px;
  color: #888A8F;
  text-align: center;
  padding: 8px;
}

.download {
  width: 19px;
  height: 19px;
}

.del {
  width: 19px;
  height: 19px;
}

.page-wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #F5F3EF;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  padding-bottom: 100px;
  box-sizing: border-box;
}

.page-container {
  width: 90%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.page-title {
  font-size: 21px;
  font-weight: 500;
  color: #444548;
  text-align: center;
  margin-top: 150rpx;
}

.top-bar {
  display: flex;
  gap: 12px;
  align-items: center;
}

.select-input {
  flex: 1;
  height: 45px;
  padding: 0 18px;
  border: none;
  border-radius: 16px;
  background: #F5F3EF;
  font-size: 12px;
  color: #444548;
  box-shadow: 
    6px 6px 12px #E0DFDB,
    -6px 6px 12px #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.select-text {
  font-size: 14px;
  color: #444548;
}

.select-arrow {
  font-size: 12px;
  color: #888A8F;
}

.add-btn {
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 16px;
  background: #F5F3EF;
  font-size: 22px;
  color: #444548;
  box-shadow: 
    6px 6px 12px #E0DFDB,
    -6px -6px 12px #FFFFFF;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-btn:active {
  box-shadow: 
    inset 6px 6px 12px #E0DFDB,
    inset -6px -6px 12px #FFFFFF;
}

.add-btn text {
  font-size: 22px;
  color: #444548;
  line-height: 1;
}

.add-btn:active text {
  color: #66676A;
}

.table-card {
  width: 90%;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 
    8px 8px 16px #E0DFDB,
    -8px -8px 16px #FFFFFF;
}

.resume-table {
  width: 100%;
}

.table-header {
  display: flex;
  padding-bottom: 16px;
  border-bottom: 1px solid #E0DFDB;
}

.th {
  text-align: left;
  font-size: 12px;
  color: #888A8F;
  font-weight: 500;
  
  &:first-child {
    flex: 3;
  }
  
  &:last-child {
    flex: 2;
  }
}

.table-row {
  display: flex;
  padding: 14px 0;
  border-bottom: 1px solid #EAE8E3;
}

.table-row:last-child {
  border-bottom: none;
}

.td {
  font-size: 14px;
  color: #444548;
  
  &:first-child {
    flex: 3;
    display: flex;
    align-items: center;
  }
  
  &:last-child {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

.action-btns {
  display: flex;
  gap: 8px;
}

.edit-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 10px;
  background: #F5F3EF;
  font-size: 13px;
  color: #444548;
  box-shadow: 
    3px 3px 6px #E0DFDB,
    -3px -3px 6px #FFFFFF;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.del-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 10px;
  background: #F5F3EF;
  font-size: 13px;
  color: #D9534F;
  box-shadow: 
    3px 3px 6px #E0DFDB,
    -3px -3px 6px #FFFFFF;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.edit-btn:active, .del-btn:active {
  box-shadow: 
    inset 3px 3px 6px #E0DFDB,
    inset -3px -3px 6px #FFFFFF;
}

.edit-btn text {
  font-size: 13px;
  color: #444548;
}

.del-btn text {
  font-size: 13px;
  color: #D9534F;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.form-card {
  width: 100%;
  height: 100%;
  max-width: 320px;
  background: #F5F3EF;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 
    8px 8px 16px #E0DFDB, 
    -8px -8px 16px #FFFFFF;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-title {
	margin-top: 200px;
  font-size: 16px;
  font-weight: 500;
  color: #444548;
  text-align: center;
  margin-bottom: 8px;
}

.form-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 11px;
  color: #888A8F;
  font-weight: 500;
}

.form-input {
  width: 100%;
  height: 39px;
  padding: 0 16px;
  border: none;
  border-radius: 14px;
  background: #F5F3EF;
  font-size: 14px;
  color: #444548;
  box-shadow: 
    inset 4px 4px 8px #E0DFDB, 
    inset -4px -4px 8px #FFFFFF;
  outline: none;
  box-sizing: border-box;
}

.form-input::placeholder {
  color: #888A8F;
}

.upload-btn {
  width: 100%;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: #F5F3EF;
  box-shadow: 
    4px 4px 8px #E0DFDB, 
    -4px -4px 8px #FFFFFF;
  transition: all 0.2s ease;
}

.upload-btn:active {
  box-shadow: 
    inset 4px 4px 8px #E0DFDB, 
    inset -4px -4px 8px #FFFFFF;
}

.upload-btn text {
  font-size: 14px;
  color: #444548;
}

.form-buttons {
  display: flex;
  gap: 16px;
  margin-top: 8px;
}

.cancel-btn,
.confirm-btn {
  flex: 1;
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: #F5F3EF;
  box-shadow: 
    4px 4px 8px #E0DFDB, 
    -4px -4px 8px #FFFFFF;
  transition: all 0.2s ease;
}

.cancel-btn:active,
.confirm-btn:active {
  box-shadow: 
    inset 4px 4px 8px #E0DFDB, 
    inset -4px -4px 8px #FFFFFF;
}

.cancel-btn text,
.confirm-btn text {
  font-size: 14px;
  color: #444548;
  font-weight: 400;
}

.cancel-btn:active text,
.confirm-btn:active text {
  color: #66676A;
}

.confirm-btn text {
  font-weight: 500;
}
</style>