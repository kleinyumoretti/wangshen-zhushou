<template>
  <view class="page-wrapper">
    <view class="calendar-container">
      <!-- 顶部年月切换 -->
      <view class="calendar-header">
        <view class="nav-btn" @click="prevMonth">
          <text>&lt;</text>
        </view>
        <view class="month-title">{{ currentYear }}年{{ String(currentMonth).padStart(2, '0') }}月</view>
        <view class="nav-btn" @click="nextMonth">
          <text>&gt;</text>
        </view>
      </view>

      <!-- 星期栏 -->
      <view class="week-row">
        <view class="week-day" v-for="day in weekDays" :key="day">{{ day }}</view>
      </view>

      <!-- 日期网格 -->
      <view class="days-grid">
        <view 
          v-for="(day, index) in calendarDays" 
          :key="index"
          class="day"
          :class="{ 'empty': !day.date, 'today': day.isToday }"
          @click="selectDate(day.date)"
        >
          <text v-if="day.date">{{ day.day }}</text>
        </view>
      </view>

      <!-- 底部卡片 -->
      <view class="calendar-footer">
        <text>今日：{{ todayText }}</text>
      </view>
    </view>

    <!-- 底部导航 -->
    <bottom-nav currentPath="/pages/calendar/calendar"></bottom-nav>
  </view>
</template>

<script>
export default {
  data() {
    const today = new Date()
    return {
      currentYear: today.getFullYear(),
      currentMonth: today.getMonth() + 1,
      weekDays: ['日', '一', '二', '三', '四', '五', '六']
    }
  },
  computed: {
    calendarDays() {
      const days = []
      const firstDay = new Date(this.currentYear, this.currentMonth - 1, 1)
      const lastDay = new Date(this.currentYear, this.currentMonth, 0)
      const totalDays = lastDay.getDate()
      const startWeekDay = firstDay.getDay()
      
      for (let i = 0; i < startWeekDay; i++) {
        days.push({ date: null })
      }
      
      const today = new Date()
      for (let day = 1; day <= totalDays; day++) {
        const dateStr = this.formatDate(new Date(this.currentYear, this.currentMonth - 1, day))
        const isToday = dateStr === this.formatDate(today)
        
        days.push({ date: dateStr, day: day, isToday: isToday })
      }
      
      return days
    },
    todayText() {
      const today = new Date()
      return `${today.getFullYear()}年${String(today.getMonth() + 1).padStart(2, '0')}月${String(today.getDate()).padStart(2, '0')}日`
    }
  },
  methods: {
    formatDate(date) {
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    },
    selectDate(date) {
      if (date) {
        uni.showToast({ title: date, icon: 'none' })
      }
    },
    prevMonth() {
      if (this.currentMonth === 1) {
        this.currentYear--
        this.currentMonth = 12
      } else {
        this.currentMonth--
      }
    },
    nextMonth() {
      if (this.currentMonth === 12) {
        this.currentYear++
        this.currentMonth = 1
      } else {
        this.currentMonth++
      }
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

/* 页面容器 - 统一布局 */
.calendar-container {
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

/* 顶部年月标题栏 - 新拟态 */
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  border-radius: 20px;
  box-shadow: 
    8px 8px 16px #E0DFDB,
    -8px -8px 16px #FFFFFF;
	margin-top: 150rpx;
}

.month-title {
  font-size: 22px;
  color: #444548;
  font-weight: 500;
}

/* 切换按钮 新拟态 */
.nav-btn {
  width: 44px;
  height: 44px;
  border-radius: 16px;
  border: none;
  background: #F5F3EF;
  box-shadow: 
    5px 5px 10px #E0DFDB,
    -5px -5px 10px #FFFFFF;
  font-size: 18px;
  color: #55575A;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-btn:active {
  box-shadow: 
    inset 5px 5px 10px #E0DFDB,
    inset -5px -5px 10px #FFFFFF;
}

.nav-btn text {
  font-size: 18px;
  color: #55575A;
  line-height: 1;
}

.nav-btn:active text {
  color: #66676A;
}

/* 星期栏 */
.week-row {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 16px;
  border-radius: 16px;
  box-shadow: 
    6px 6px 12px #E0DFDB,
    -6px -6px 12px #FFFFFF;
}

.week-day {
  text-align: center;
  font-size: 14px;
  color: #888A8F;
  font-weight: 400;
}

/* 日期网格 */
.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 12px;
  padding: 18px;
  border-radius: 20px;
  box-shadow: 
    8px 8px 16px #E0DFDB,
    -8px -8px 16px #FFFFFF;
}

/* 日期样式 - 新拟态 */
.day {
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 13px;
  color: #444548;
  background: #F5F3EF;
  box-shadow: 
    4px 4px 8px #E0DFDB,
    -4px -4px 8px #FFFFFF;
  cursor: pointer;
  transition: all 0.2s;
}

/* 今天高亮 */
.day.today {
  background: #E0DFDB;
  font-weight: 500;
}

/* 按压效果 */
.day:active {
  box-shadow: 
    inset 4px 4px 8px #E0DFDB,
    inset -4px -4px 8px #FFFFFF;
}

.day:active text {
  color: #66676A;
}

.day text {
  font-size: 16px;
  color: #444548;
}

.day.today text {
  font-weight: 500;
}

/* 空白日期 */
.day.empty {
  box-shadow: none;
  background: transparent;
  cursor: default;
}

/* 底部快捷卡片 */
.calendar-footer {
  padding: 12px;
  border-radius: 20px;
  box-shadow: 
    8px 8px 16px #E0DFDB,
    -8px -8px 16px #FFFFFF;
  text-align: center;
  color: #888A8F;
  font-size: 12px;
}

.calendar-footer text {
  font-size: 14px;
  color: #888A8F;
}
</style>