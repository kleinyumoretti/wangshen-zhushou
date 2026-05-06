<template>
  <view class="page-wrapper">
    <view class="page-container">
      <!-- 页面标题 -->
      <view class="page-title">求职管理中心</view>

      <!-- 顶部：三个统计标签 -->
      <view class="stats-row">
        <view class="stat-item">
          <text class="stat-number">24</text>
          <text class="stat-text">总投递</text>
        </view>
        <view class="stat-item">
          <text class="stat-number">6</text>
          <text class="stat-text">待笔试</text>
        </view>
        <view class="stat-item">
          <text class="stat-number">4</text>
          <text class="stat-text">待面试</text>
        </view>
      </view>

      <!-- 中部：三个跳转按钮 -->
      <view class="func-btns">
        <view class="func-btn" @click="goToRecords">
          <text>投递记录</text>
        </view>
        <view class="func-btn" @click="goToResume">
          <text>简历管理</text>
        </view>
        <view class="func-btn" @click="goToCalendar">
          <text>面试日历</text>
        </view>
      </view>
    </view>

    <!-- 底部导航 -->
    <bottom-nav currentPath="/pages/index/index"></bottom-nav>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    goToRecords() {
      uni.reLaunch({ url: '/pages/records/records' })
    },
    goToResume() {
      uni.reLaunch({ url: '/pages/resume/resume' })
    },
    goToCalendar() {
      uni.reLaunch({ url: '/pages/calendar/calendar' })
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
  gap: 40px;
}

/* 页面标题 */
.page-title {
  font-size: 21px;
  font-weight: 500;
  color: #444548;
  text-align: center;
  margin-bottom: 8px;
}

/* 顶部统计卡片组 */
.stats-row {
  display: flex;
  gap: 18px;
  margin-left: 10%;
  margin-right: 10%;
}

/* 统计标签项（新拟态） */
.stat-item {
  flex: 1;
  padding: 10px 4px;
  border-radius: 20px;
  background: #F5F3EF;
  text-align: center;
  box-shadow: 
    6px 6px 12px #E0DFDB, 
    -6px -6px 12px #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 统计数字 */
.stat-number {
  font-size: 20px;
  font-weight: 400;
  color: #444548;
  margin-bottom: 4px;
  line-height: 1.2;
}

/* 统计文字 */
.stat-text {
  font-size: 13px;
  color: #888A8F;
  line-height: 1.2;
}

/* 功能按钮区域 */
.func-btns {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 10%;
  margin-right: 10%
}

/* 功能跳转大按钮（整套同款） */
.func-btn {
  height: 60px;
  border: none;
  border-radius: 16px;
  background: #F5F3EF;
  font-size: 17px;
  color: #444548;
  text-align: center;
  box-shadow: 
    8px 8px 16px #E0DFDB, 
    -8px -8px 16px #FFFFFF;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 按钮按压效果（统一新拟态） */
.func-btn:active {
  box-shadow: 
    inset 8px 8px 16px #E0DFDB, 
    inset -8px -8px 16px #FFFFFF;
  color: #66676A;
}

.func-btn text {
  font-size: 17px;
  color: #444548;
  line-height: 1.2;
}
</style>