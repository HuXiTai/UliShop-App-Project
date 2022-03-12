<template>
	<view class="categoryContainer">
		<swiper class="swiperList" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="swiperItem">
				<image src="../../static/images/mylove.jpg" class="swiperImg"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="stylus">
	.categoryContainer
		height 100%
		.swiperList
			.swiperItem
				.swiperImg
					width 100%
					height 300rpx
	
</style>
