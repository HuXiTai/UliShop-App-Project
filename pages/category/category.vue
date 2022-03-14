<template>
	<view class="categoryContainer">
		<view class="header">搜索商品</view>

		<view class="body">
			<view class="left">
				<view v-for="(cl, index) of categoryList" :key="cl.id" class="leftItem" @click="currentIndex = index" :class="{active:index===currentIndex}">{{ cl.name }}</view>
			</view>

			<view class="right">
				<scroll-view scroll-y="true" enable-flex class="scrollList">
					<view class="scrollItem">
						<image :src="currentCategory1.imgUrl" class="scrollImg"></image>
						<view class="scrollmain">
							<view v-for="c2 of currentCategory2" :key="c2.id" class="rightList">
								<image :src="c2.wapBannerUrl" class="rightImg"></image>
								<text class="rightText">{{ c2.name }}</text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
export default {
	data() {
		return {
			currentIndex: 0
		};
	},
	mounted() {
		this.getCategoryList();
	},
	methods: {
		...mapActions('category', ['getCategoryList'])
	},
	computed: {
		...mapState('category', ['categoryList']),
		currentCategory1() {
			return this.categoryList[this.currentIndex] || {};
		},
		currentCategory2() {
			return this.currentCategory1.subCateList || [];
		}
	}
};
</script>

<style lang="stylus">
.categoryContainer
	height 100%
	.header
		text-align center
		margin 20rpx 5%
		width 90%
		height 60rpx
		background-color #aaa
		background-origin content-box
		line-height 60rpx
	.body
		display flex
		border-top 2rpx solid red
		box-sizing border-box
		.left
			width 150rpx
			.leftItem
				&.active
					background-color pink
				width 100%
				height 80rpx
				font-size 28rpx
				text-align center
				line-height 80rpx
		.right
			flex 1
			border-left 1rpx solid red
			box-sizing border-box
			.scrollList
				height calc(100vh - 100rpx - 2rpx)
				.scrollItem
					.scrollImg
						width 520rpx
						height 190rpx
						margin 20rpx auto
						display block
					.scrollmain
						display flex
						flex-wrap wrap
					.rightList
						width 33.333333%
						display flex
						flex-direction column
						align-items center
						.rightImg
							width 100%
							height 144rpx
						.rightText
							font-size 28rpx
</style>
