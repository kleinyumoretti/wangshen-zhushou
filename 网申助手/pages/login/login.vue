<template>
  <view class="login-wrapper">
    <view class="login-container">
      <!-- 品牌Logo区域 -->
      <view class="logo-area">
        <image class="brand" src="/static/blackbrand.png"></image>
        <text class="app-name">Presure</text>
      </view>

      <!-- 标题提示区域 -->
      <view class="title-area">
       <!-- <text class="main-title">你好， Pressure</text> -->
        <text class="sub-title">专注理想，轻松上岸</text>
      </view>

      <!-- 按钮区域 -->
      <view class="btn-area">
        <view class="login-btn" @click="handleLogin">
          <text>本机号码一键登录</text>
        </view>
        <view class="other-login" @click="handleOtherLogin">
          <text>其他账号登录</text>
        </view>
      </view>

      <!-- 底部协议 -->
      <view class="agreement">
        <text class="other-login">登录即同意用户协议</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleLogin() {
      uni.showLoading({ title: '登录中...' })
      setTimeout(() => {
        uni.hideLoading()
        uni.switchTab({ url: '/pages/index/index' })
      }, 1000)
    },
    handleOtherLogin() {
      uni.showToast({ title: '其他登录方式开发中', icon: 'none' })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #F5F3EF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  box-sizing: border-box;
}

.login-container {
  width: 80%;
  max-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
}

/* 品牌Logo区域 新拟态卡片 */
.logo-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px 29px;
  border-radius: 20px;
  background: #F5F3EF;
  box-shadow: 
    8px 8px 16px #E0DFDB, 
    -8px -8px 16px #FFFFFF;
}

.brand{
	width: 52px;
	height: 33px;
}
.logo-icon {
  width: 36px;
  height: 36px;
  border: 2px solid #888A8F;
  border-radius: 9px;
  position: relative;
  background: #F5F3EF;
}

.logo-icon::after {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  border-top: 2px solid #888A8F;
  border-right: 2px solid #888A8F;
  top: 18px;
  left: 18px;
}

.app-name {
  font-size: 10px;
  color: #55575A;
  font-weight: 400;
  line-height: 1.2;
}

/* 文案区域 */
.title-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.main-title {
  font-size: 18px;
  color: #444548;
  font-weight: 540;
  line-height: 1.2;
}

.sub-title {
  margin-top: 40px;
  font-size: 8px;
  color: #888A8F;
  font-weight: 400;
  line-height: 1.4;
}

.btn-area {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
}

/* 新拟态登录按钮 凹陷+柔阴影 */
.login-btn {
  width: 85%;
  height: 43px;
  border: none;
  border-radius: 18px;
  font-size: 17px;
  font-weight: 400;
  cursor: pointer;
  background: #F5F3EF;
  color: #444548;
  box-shadow: 
    6px 6px 12px #E0DFDB, 
    -6px -6px 12px #FFFFFF;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 按压变成凹陷新拟态 */
.login-btn:active {
  box-shadow: 
    inset 6px 6px 12px #E0DFDB, 
    inset -6px -6px 12px #FFFFFF;
  color: #66676A;
}

.login-btn text {
  font-size: 12px;
  color: #444548;
  line-height: 1.2;
}

.other-login {
  font-size: 12px;
  color: #888A8F;
  text-decoration: none;
  font-weight: 300;
  line-height: 1.2;
}

.other-login text {
  font-size: 12px;
  color: #888A8F;
}

.agreement {
  font-size: 12px;
  color: #888A8F;
  text-align: center;
  line-height: 1.6;
  max-width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.agreement text {
  font-size: 12px;
  color: #888A8F;
  line-height: 1.6;
}

.agreement-link {
  color: #66676A;
  text-decoration: none;
  margin-left: 4px;
  margin-right: 4px;
  line-height: 1.6;
}
</style>