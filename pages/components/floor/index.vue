<template>
	<view class="floor">
		<image :src="floor.titlePicUrl" class="floorImg"></image>
		<scroll-view scroll-x enable-flex class="floorScrollList" >
			<view class="floorScrollItem" v-for="item of floor.itemList" :key="item.id">
				<image :src="item.primaryPicUrl" class="itemImg"></image>
				<text class="itemText" >{{item.name}}</text>
			</view>
			
			
			<view class="floorScrollItem lookMore">
				查看更多>>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:["floor"]
	}
</script>

<style lang="stylus">
	.floor
		.floorImg
			width 100%
			height 350rpx
		.floorScrollList
			height 300rpx
			display flex
			.floorScrollItem
				margin-right 20rpx
				&.lookMore
					flex-shrink:0
					width 200rpx
					height 300rpx
					line-height 300rpx
					text-align center
				.itemImg
					width 200rpx
					height 200rpx
				.itemText
					font-size 28rpx
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;

				
</style>
