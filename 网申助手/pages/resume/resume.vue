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
            :key="index"
          >
            <text class="td">{{ resume.name }}</text>
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
  </view>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: '全部版本',
      resumes: [
        { name: '通用简历_V1.0' },
        { name: '互联网前端_V2.1' },
        { name: '国企行政版_V1.2' },
        { name: '产品经理专用_V3.0' }
      ]
    }
  },
  methods: {
    addResume() {
      uni.showToast({ title: '新增简历', icon: 'none' })
    },
    editResume(resume) {
      uni.showToast({ title: `编辑 ${resume.name}`, icon: 'none' })
    },
    deleteResume(resume) {
      uni.showToast({ title: `删除 ${resume.name}`, icon: 'none' })
    }
  }
}
</script>

<style lang="scss" scoped>
.download{
	width: 19px;
	height: 19px;
}
.del{
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

/* 页面标题 */
.page-title {
  font-size: 21px;
  font-weight: 500;
  color: #444548;
  text-align: center;
}

/* 顶部操作栏：筛选 + 添加 */
.top-bar {
  display: flex;
  gap: 12px;
  align-items: center;
}

/* 新拟态筛选框 */
.select-input {
  flex: 1;
  height: 50px;
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

/* 添加按钮（同款） */
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

/* 表格卡片（新拟态） */
.table-card {
  width: 90%;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 
    8px 8px 16px #E0DFDB,
    -8px -8px 16px #FFFFFF;
}

/* 表格样式 */
.resume-table {
  width: 100%;
}

/* 表头 */
.table-header {
  display: flex;
  padding-bottom: 16px;
  border-bottom: 1px solid #E0DFDB;
}

.th {
  text-align: left;
  font-size: 14px;
  color: #888A8F;
  font-weight: 500;
  
  &:first-child {
    flex: 3;
  }
  
  &:last-child {
    flex: 2;
  }
}

/* 表格行 */
.table-row {
  display: flex;
  padding: 16px 0;
  border-bottom: 1px solid #EAE8E3;
}

.table-row:last-child {
  border-bottom: none;
}

.td {
  font-size: 15px;
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

/* 操作按钮组 */
.action-btns {
  display: flex;
  gap: 8px;
}

/* 修改按钮 */
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

/* 删除按钮 */
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

/* 按压效果 */
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
</style>