<template>
	<view class="card">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="swiperList">
			<swiper-item v-for="(banner, index) of currentDataCategory.bannerUrlList" :key="index" class="swiperItem">
				<image :src="banner" class="swiperImg"></image>
			</swiper-item>
		</swiper>

		<view class="title">
			<view>{{currentDataCategory.name}}</view>
			<view>{{currentDataCategory.frontName}}</view>
		</view>

		<view class="goodsList">
			<view v-for="(goods,index) in currentData.itemList" :key="goods.id" class="goodsItem">
				<image :src="goods.primaryPicUrl" class="goodsImg"></image>
				<text class="goodsText">{{goods.name}}</text>
				<text class="goodsPrice">{{goods.counterPrice}}</text>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
	data() {
		return {};
	},
	props: ['isShow'],
	mounted() {
		this.getCardInitInfo();
	},
	methods: {
		...mapActions('home', ['getCardInitInfo'])
	},
	computed: {
		...mapState('home', ['cardInitInfo']),
		currentData() {
			let obj = this.cardInitInfo.find(item => item.category.parentId === this.isShow) || {};
			console.log(obj);
			return obj;
		},
		currentDataCategory() {
			return this.currentData.category || {};
		}
	}
};
</script>

<style lang="stylus">
.card
	.swiperList
		.swiperItem
			.swiperImg
				height 300rpx
				width 100%
	.title
		view
			text-align center
	.goodsList
		display flex
		justify-content space-around
		flex-wrap wrap
		.goodsItem
			display flex
			flex-direction column
			.goodsImg
				width 344rpx
				height 344rpx
			.goodsText
				font-size 28rpx
				width 344rpx
			.goodsPrice
				font-size 28rpx
		&::after
			content ''
			display block
			width 344rpx
</style>
