<template>
	<view class="indexContainer">
		<view class="header">
			<image src="../../static/images/logo.png" class="headerLogo"></image>
			<view class="headerSearch">
				<text class="iconfont icon-sousuo:before" ></text>
				<input class="headerIpt" placeholder="商品搜索" placeholder-style="color:red"/>
			</view>
			<button class="headerBtn">芝麻糊糊</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="stylus">
	.indexContainer 
		height 100%
		.header 
			height 80rpx
			display flex
			align-items center 
			.headerLogo
				width 120rpx
				height 40rpx
				margin 0 20rpx
			.headerBtn
				width 140rpx
				height 40rpx
				font-size 28rpx
				text-align center
				line-height 40rpx
				padding 0 10rpx
				margin 0 10rpx
			.headerSearch
				display flex
				align-items center
				font-size 28rpx
				flex 1
				border 2rpx solid #aaa
				border-radius 10rpx
				height 40rpx
				.iconfont
					margin 0 10rpx
				
				
		
	
</style>
