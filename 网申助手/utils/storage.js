/**
 * 本地存储工具类
 */

const PHONE_KEY = 'user_phone'
const USER_ID_KEY = 'user_id'
const LOGIN_STATUS_KEY = 'is_logged_in'

export default {
  /**
   * 保存手机号
   */
  setPhone(phone) {
    try {
      uni.setStorageSync(PHONE_KEY, phone)
      console.log('手机号保存成功:', phone)
    } catch (e) {
      console.error('保存手机号失败:', e)
    }
  },

  /**
   * 获取手机号
   */
  getPhone() {
    try {
      return uni.getStorageSync(PHONE_KEY) || ''
    } catch (e) {
      console.error('获取手机号失败:', e)
      return ''
    }
  },

  /**
   * 保存用户ID（可用于云数据库表的id）
   */
  setUserId(userId) {
    try {
      uni.setStorageSync(USER_ID_KEY, userId)
      console.log('用户ID保存成功:', userId)
    } catch (e) {
      console.error('保存用户ID失败:', e)
    }
  },

  /**
   * 获取用户ID
   */
  getUserId() {
    try {
      return uni.getStorageSync(USER_ID_KEY) || ''
    } catch (e) {
      console.error('获取用户ID失败:', e)
      return ''
    }
  },

  /**
   * 设置登录状态
   */
  setLoginStatus(status) {
    try {
      uni.setStorageSync(LOGIN_STATUS_KEY, status)
      console.log('登录状态保存成功:', status)
    } catch (e) {
      console.error('保存登录状态失败:', e)
    }
  },

  /**
   * 获取登录状态
   */
  getLoginStatus() {
    try {
      return uni.getStorageSync(LOGIN_STATUS_KEY) || false
    } catch (e) {
      console.error('获取登录状态失败:', e)
      return false
    }
  },

  /**
   * 检查是否已登录
   */
  isLoggedIn() {
    return this.getLoginStatus() && this.getPhone()
  },

  /**
   * 清除所有用户相关数据
   */
  clearUserData() {
    try {
      uni.removeStorageSync(PHONE_KEY)
      uni.removeStorageSync(USER_ID_KEY)
      uni.removeStorageSync(LOGIN_STATUS_KEY)
      console.log('用户数据已清除')
    } catch (e) {
      console.error('清除用户数据失败:', e)
    }
  }
}