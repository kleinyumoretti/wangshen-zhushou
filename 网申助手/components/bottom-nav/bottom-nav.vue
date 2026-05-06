<template>
  <view class="bottom-nav">
    <view class="nav-content">
      <view 
        class="nav-item" 
        :class="{ active: currentIndex === 0 }"
        @click="switchPage(0, '/pages/index/index')"
      >
        <image class="img" src="/static/Home.png" />
        <text class="nav-text">首页</text>
      </view>
      <view 
        class="nav-item" 
        :class="{ active: currentIndex === 1 }"
        @click="switchPage(1, '/pages/records/records')"
      >
        <image class="img" src="/static/direc.png" />
        <text class="nav-text">投递记录</text>
      </view>
      <view 
        class="nav-item" 
        :class="{ active: currentIndex === 2 }"
        @click="switchPage(2, '/pages/resume/resume')"
      >
        <image class="img" src="/static/PDF.png" />
        <text class="nav-text">简历管理</text>
      </view>
      <view 
        class="nav-item" 
        :class="{ active: currentIndex === 3 }"
        @click="switchPage(3, '/pages/calendar/calendar')"
      >
        <image class="img" src="/static/note.png" />
        <text class="nav-text">日历</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'BottomNav',
  props: {
    currentPath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      navList: [
        { path: '/pages/index/index', index: 0 },
        { path: '/pages/records/records', index: 1 },
        { path: '/pages/resume/resume', index: 2 },
        { path: '/pages/calendar/calendar', index: 3 }
      ]
    }
  },
  computed: {
    currentIndex() {
      const item = this.navList.find(item => this.currentPath.includes(item.path))
      return item ? item.index : 0
    }
  },
  methods: {
    switchPage(index, path) {
      uni.reLaunch({ url: path })
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 2px;
  height: 45px;
  background: transparent;
  z-index: 999;
  display: flex;
  justify-content: center;
  padding: 9px 2px;
}

.nav-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 380px;
  height: 50px;
  background: #F5F3EF;
  border-radius: 34px;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(0, 0, 0, 0.06),
    inset 0 2px 4px rgba(255, 255, 255, 0.8);
  position: relative;
  
}

.img{
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
}
.nav-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 6px;
  border-radius: 20px;
  transition: all 0.2s ease;
  color: #888A8F;
  min-width: 60px;
}

.nav-item.active {
  color: #444548;
}

.nav-item:not(.active):active {
  background: rgba(0, 0, 0, 0.03);
}

.nav-text {
  font-size: 11px;
  font-weight: 400;
  line-height: 1;
}

.nav-item.active .nav-text {
  color: #444548;
}

.nav-item.active .img {
  opacity: 1;
}

.img {
  opacity: 0.6;
  transition: opacity 0.2s ease;
}
</style>