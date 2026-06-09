<template>
  <view class="page-wrapper">
    <view class="page-container">
      <!-- 页面标题 -->
      <view class="page-title">投递记录</view>

      <!-- 顶部：搜索框 + 添加按钮 -->
      <view class="top-bar">
        <view class="search-wrapper">
          <input 
            type="text" 
            class="search-input" 
            placeholder="搜索公司/岗位"
            v-model="searchText"
          />
          <text 
            class="clear-icon" 
            v-if="searchText" 
            @click="searchText = ''"
          >✕</text>
        </view>
        <view class="add-btn" @click="showAddForm">
          <text>+</text>
        </view>
      </view>

      <!-- 投递记录表格 -->
      <view class="table-card">
        <view class="record-table">
          <!-- 表头 -->
          <view class="table-header">
            <text class="th">公司名</text>
            <text class="th">公司网址</text>
            <text class="th">进度</text>
            <text class="th">岗位</text>
          </view>

          <!-- 表格内容 -->
          <view 
            class="table-row" 
            v-for="(record, index) in filteredRecords" 
            :key="record._id || index"
          >
            <text class="td company-name" @click="showEditForm(record)">{{ record.company_name }}</text>
            <text class="td url-text">{{ record.website }}</text>
            <view class="td">
              <view class="status-tag">
                <text>{{ record.status }}</text>
              </view>
            </view>
            <text class="td">{{ record.position }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 底部导航 -->
    <bottom-nav currentPath="/pages/records/records"></bottom-nav>

    <!-- 添加表单弹窗 -->
    <view class="modal-overlay" v-if="showForm" @click="hideAddForm">
      <view class="form-card" @click.stop>
        <text class="form-title">添加投递记录</text>
        
        <view class="form-item">
          <text class="form-label">公司名称</text>
          <input 
            class="form-input" 
            v-model="formData.company_name" 
            placeholder="请输入公司名称"
          />
        </view>
        
        <view class="form-item">
          <text class="form-label">公司网址</text>
          <input 
            class="form-input" 
            v-model="formData.website" 
            placeholder="请输入公司网址"
          />
        </view>
        
        <view class="form-item">
          <text class="form-label">投递岗位</text>
          <input 
            class="form-input" 
            v-model="formData.position" 
            placeholder="请输入投递岗位"
          />
        </view>
        
        <view class="form-item">
          <text class="form-label">投递状态</text>
          <view class="status-picker">
            <view 
              class="status-option" 
              :class="{ active: formData.status === '已投递' }"
              @click="formData.status = '已投递'"
            >
              <text>已投递</text>
            </view>
            <view 
              class="status-option" 
              :class="{ active: formData.status === '面试中' }"
              @click="formData.status = '面试中'"
            >
              <text>面试中</text>
            </view>
            <view 
              class="status-option" 
              :class="{ active: formData.status === '已通过' }"
              @click="formData.status = '已通过'"
            >
              <text>已通过</text>
            </view>
            <view 
              class="status-option" 
              :class="{ active: formData.status === '已拒绝' }"
              @click="formData.status = '已拒绝'"
            >
              <text>已拒绝</text>
            </view>
          </view>
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

    <!-- 编辑表单弹窗 -->
    <view class="modal-overlay" v-if="showEditModal" @click="hideEditForm">
      <view class="form-card" @click.stop>
        <text class="form-title">编辑投递记录</text>
        
        <view class="form-item">
          <text class="form-label">公司名称</text>
          <input 
            class="form-input" 
            v-model="editData.company_name" 
            placeholder="请输入公司名称"
          />
        </view>
        
        <view class="form-item">
          <text class="form-label">公司网址</text>
          <input 
            class="form-input" 
            v-model="editData.website" 
            placeholder="请输入公司网址"
          />
        </view>
        
        <view class="form-item">
          <text class="form-label">投递岗位</text>
          <input 
            class="form-input" 
            v-model="editData.position" 
            placeholder="请输入投递岗位"
          />
        </view>
        
        <view class="form-item">
          <text class="form-label">投递状态</text>
          <view class="status-picker">
            <view 
              class="status-option" 
              :class="{ active: editData.status === '已投递' }"
              @click="editData.status = '已投递'"
            >
              <text>已投递</text>
            </view>
            <view 
              class="status-option" 
              :class="{ active: editData.status === '面试中' }"
              @click="editData.status = '面试中'"
            >
              <text>面试中</text>
            </view>
            <view 
              class="status-option" 
              :class="{ active: editData.status === '已通过' }"
              @click="editData.status = '已通过'"
            >
              <text>已通过</text>
            </view>
            <view 
              class="status-option" 
              :class="{ active: editData.status === '已拒绝' }"
              @click="editData.status = '已拒绝'"
            >
              <text>已拒绝</text>
            </view>
          </view>
        </view>
        
        <view class="form-buttons-edit">
          <view class="delete-btn" @click="deleteRecord">
            <text>删除</text>
          </view>
          <view class="cancel-btn" @click="hideEditForm">
            <text>取消</text>
          </view>
          <view class="confirm-btn" @click="updateRecord">
            <text>保存</text>
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
      searchText: '',
      records: [],
      loading: false,
      showForm: false,
      showEditModal: false,
      formData: {
        company_name: '',
        website: '',
        position: '',
        status: '已投递'
      },
      editData: {
        _id: '',
        company_name: '',
        website: '',
        position: '',
        status: '已投递'
      }
    }
  },
  computed: {
    filteredRecords() {
      if (!this.searchText) return this.records
      const keyword = this.searchText.toLowerCase()
      return this.records.filter(item => 
        item.company_name.toLowerCase().includes(keyword) || 
        item.website.toLowerCase().includes(keyword) ||
        (item.position && item.position.toLowerCase().includes(keyword))
      )
    }
  },
  onShow() {
    this.loadRecords()
  },
  methods: {
    async loadRecords() {
      this.loading = true
      const userId = storage.getPhone()
      
      if (!userId) {
        uni.showToast({ title: '请先登录', icon: 'none' })
        return
      }
      
      try {
        const db = uniCloud.database()
        const res = await db.collection('job_applications')
          .where({ user_id: userId })
          .get()
        
        if (res.result && res.result.data) {
          this.records = res.result.data
        }
      } catch (error) {
        console.error('获取投递记录失败:', error)
        uni.showToast({ title: '获取数据失败', icon: 'none' })
      } finally {
        this.loading = false
      }
    },
    showAddForm() {
      this.showForm = true
    },
    hideAddForm() {
      this.showForm = false
      this.resetForm()
    },
    resetForm() {
      this.formData = {
        company_name: '',
        website: '',
        position: '',
        status: '已投递'
      }
    },
    async submitForm() {
      if (!this.formData.company_name) {
        uni.showToast({ title: '请输入公司名称', icon: 'none' })
        return
      }
      
      const userId = storage.getPhone()
      if (!userId) {
        uni.showToast({ title: '请先登录', icon: 'none' })
        return
      }
      
      try {
        const db = uniCloud.database()
        await db.collection('job_applications').add({
          company_name: this.formData.company_name,
          website: this.formData.website,
          position: this.formData.position,
          status: this.formData.status,
          user_id: userId
        })
        
        uni.showToast({ title: '添加成功', icon: 'success' })
        this.hideAddForm()
        this.loadRecords()
      } catch (error) {
        console.error('添加记录失败:', error)
        uni.showToast({ title: '添加失败', icon: 'none' })
      }
    },
    showEditForm(record) {
      this.editData = {
        _id: record._id,
        company_name: record.company_name,
        website: record.website,
        position: record.position,
        status: record.status
      }
      this.showEditModal = true
    },
    hideEditForm() {
      this.showEditModal = false
    },
    async updateRecord() {
      if (!this.editData.company_name) {
        uni.showToast({ title: '请输入公司名称', icon: 'none' })
        return
      }
      
      try {
        const db = uniCloud.database()
        await db.collection('job_applications')
          .doc(this.editData._id)
          .update({
            company_name: this.editData.company_name,
            website: this.editData.website,
            position: this.editData.position,
            status: this.editData.status
          })
        
        uni.showToast({ title: '保存成功', icon: 'success' })
        this.hideEditForm()
        this.loadRecords()
      } catch (error) {
        console.error('更新记录失败:', error)
        uni.showToast({ title: '保存失败', icon: 'none' })
      }
    },
    deleteRecord() {
      uni.showModal({
        title: '确认删除',
        content: '确定要删除这条投递记录吗？',
        success: async (res) => {
          if (res.confirm) {
            try {
              const db = uniCloud.database()
              await db.collection('job_applications')
                .doc(this.editData._id)
                .remove()
              
              uni.showToast({ title: '删除成功', icon: 'success' })
              this.hideEditForm()
              this.loadRecords()
            } catch (error) {
              console.error('删除记录失败:', error)
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
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* 顶部标题 */
.page-title {
  font-size: 21px;
  font-weight: 500;
  color: #444548;
  text-align: center;
  margin-top: 150rpx;
}

/* 顶部操作栏：搜索 + 添加 */
.top-bar {
  display: flex;
  gap: 12px;
  align-items: center;
}

/* 搜索框包装器 */
.search-wrapper {
  flex: 1;
  height: 50px;
  padding: 0 12px;
  border-radius: 16px;
  background: #F5F3EF;
  box-shadow: 
    6px 6px 12px #E0DFDB, 
    -6px -6px 12px #FFFFFF;
  display: flex;
  align-items: center;
  gap: 8px;
}

.search-icon {
  font-size: 16px;
  color: #888A8F;
}

/* 新拟态搜索框 */
.search-input {
  flex: 1;
  height: 100%;
  border: none;
  background: transparent;
  font-size: 13px;
  color: #444548;
  outline: none;
}

.search-input::placeholder {
  color: #888A8F;
}

.clear-icon {
  font-size: 14px;
  color: #888A8F;
  padding: 4px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.clear-icon:active {
  background-color: #E0DFDB;
}

/* 添加按钮 */
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

/* 表格卡片容器 */
.table-card {
	width: 90%;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 
    8px 8px 16px #E0DFDB, 
    -8px -8px 16px #FFFFFF;
}

/* 表格样式 */
.record-table {
  width: 100%;
}

/* 表头 */
.table-header {
  display: flex;
  padding-bottom: 16px;
  border-bottom: 1px solid #E0DFDB;
}

.th {
  flex: 1;
  text-align: left;
  font-size: 12px;
  color: #888A8F;
  font-weight: 500;
}

/* 表格行 */
.table-row {
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #EAE8E3;
}

.table-row:last-child {
  border-bottom: none;
}

.td {
  flex: 1;
  font-size: 12px;
  color: #444548;
  display: flex;
  align-items: center;
}

/* 进度标签样式 */
.status-tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 12px;
  background: #F5F3EF;
  box-shadow: 
    3px 3px 6px #E0DFDB, 
    -3px -3px 6px #FFFFFF;
}

.status-tag text {
  font-size: 11px;
  color: #444548;
}

/* 网址样式 */
.url-text {
  color: #888A8F;
  font-size: 12px;
  max-width: 60px;
}

/* 可点击的公司名样式 */
.company-name {
  color: #444548;
  text-decoration: underline;
  text-decoration-color: #888A8F;
  text-decoration-style: dashed;
  cursor: pointer;
}

.company-name:active {
  color: #66676A;
}

/* 弹窗遮罩层 */
.modal-overlay {
  position: fixed;
  top: 150px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

/* 表单卡片 */
.form-card {
  width: 80%;
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

/* 状态选择器 */
.status-picker {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.status-option {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: #F5F3EF;
  box-shadow: 
    4px 4px 8px #E0DFDB, 
    -4px -4px 8px #FFFFFF;
  transition: all 0.2s ease;
}

.status-option:active {
  box-shadow: 
    inset 3px 3px 6px #E0DFDB, 
    inset -3px -3px 6px #FFFFFF;
}

.status-option.active {
  box-shadow: 
    inset 3px 3px 6px #E0DFDB, 
    inset -3px -3px 6px #FFFFFF;
}

.status-option text {
  font-size: 11px;
  color: #444548;
  font-weight: 400;
}

.status-option.active text {
  color: #66676A;
}

/* 表单按钮 */
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

.confirm-btn {
  background: #F5F3EF;
}

.confirm-btn text {
  font-weight: 500;
}

/* 编辑表单按钮（三个按钮） */
.form-buttons-edit {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.delete-btn {
  flex: 1;
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: #E8E6E1;
  box-shadow: 
    4px 4px 8px #D5D4D0, 
    -4px -4px 8px #FFFFFF;
  transition: all 0.2s ease;
}

.delete-btn:active {
  box-shadow: 
    inset 4px 4px 8px #D5D4D0, 
    inset -4px -4px 8px #FFFFFF;
}

.delete-btn text {
  font-size: 14px;
  color: #C74040;
  font-weight: 400;
}

.delete-btn:active text {
  color: #A53535;
}

.form-buttons-edit .cancel-btn,
.form-buttons-edit .confirm-btn {
  flex: 1;
}
</style>