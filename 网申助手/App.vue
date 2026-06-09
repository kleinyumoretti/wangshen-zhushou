<script>
import storage from './utils/storage'

export default {
	onLaunch: function() {
		console.log('网申助手 App Launch')
		
		if (storage.isLoggedIn()) {
			uni.reLaunch({ url: '/pages/index/index' })
		}
	},
	onShow: function() {
		console.log('App Show')
	},
	onHide: function() {
		console.log('App Hide')
	}
}
</script>

<style lang="scss">
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	page {
		background-color: #F5F5F0;
		color: #333333;
		font-family: "Century Gothic", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif;
	}
	/* #endif */
</style>