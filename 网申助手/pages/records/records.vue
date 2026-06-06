<template>
  <view class="page-wrapper">
    <view class="page-container">
      <!-- 页面标题 -->
      <view class="page-title">投递记录</view>

      <!-- 顶部：搜索框 + 添加按钮 -->
      <view class="top-bar">
        <input 
          type="text" 
          class="search-input" 
          placeholder="搜索公司/岗位"
          v-model="searchText"
        />
        <view class="add-btn" @click="addRecord">
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
            :key="index"
          >
            <text class="td">{{ record.company }}</text>
            <text class="td url-text">{{ record.url }}</text>
            <view class="td">
              <view class="status-tag">
                <text>{{ record.statusText }}</text>
              </view>
            </view>
            <text class="td">{{ record.position }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 底部导航 -->
    <bottom-nav currentPath="/pages/records/records"></bottom-nav>
  </view>
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
      records: [
        { company: '腾讯科技', url: 'qq.com', statusText: '已投递' },
        { company: '阿里巴巴', url: 'aliyun.com', statusText: '面试中' },
        { company: '字节跳动', url: 'bytedance.com', statusText: '已通过' },
        { company: '百度', url: 'baidu.com', statusText: '已拒绝' }
      ]
    }
  },
  computed: {
    filteredRecords() {
      if (!this.searchText) return this.records
      const keyword = this.searchText.toLowerCase()
      return this.records.filter(item => 
        item.company.toLowerCase().includes(keyword) || 
        item.position.toLowerCase().includes(keyword)
      )
    }
  },
  methods: {
    addRecord() {
      uni.showToast({ title: '新增投递', icon: 'none' })
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

/* 新拟态搜索框 */
.search-input {
  flex: 1;
  height: 50px;
  padding: 0 18px;
  border: none;
  border-radius: 16px;
  background: #F5F3EF;
  font-size: 13px;
  color: #444548;
  box-shadow: 
    6px 6px 12px #E0DFDB, 
    -6px -6px 12px #FFFFFF;
  outline: none;
}

.search-input::placeholder {
  color: #888A8F;
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
}
</style>