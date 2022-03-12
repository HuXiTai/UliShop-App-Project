<template>
	<view class="indexContainer">
		<view class="header">
			<image src="../../static/images/logo.png" class="headerLogo"></image>
			<view class="headerSearch">
				<text class="iconfont icon-sousuo:before"></text>
				<input class="headerIpt" placeholder="商品搜索" placeholder-style="color:red" />
			</view>
			<button class="headerBtn">芝麻糊糊</button>
		</view>

		<scroll-view view class="navList" scroll-x enable-flex>
			<view @click="isShow = '-1'" class="navItem" :class="{ active: isShow === '-1' }">推荐</view>
			<view @click="isShow = nav.L1Id" class="navItem" v-for="nav of navList" :key="nav.L1Id" :class="{ active: isShow === nav.L1Id }">{{ nav.text }}</view>
		</scroll-view>

		<scroll-view scroll-y enable-flex class="bodyList">
			<view v-show="isShow === '-1'">
				<view class="bodyItem">
					<swiper class="bodySwiperList" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
						<swiper-item class="bodySwiperItem" v-for="banner of bannerUrl" :key="banner"><image :src="banner" class="bodySwiperImg"></image></swiper-item>
					</swiper>
					<view class="iconList">
						<view class="iconItem" v-for="icon of iconList" :id="icon.desc">
							<image class="iconImg" :src="icon.icon"></image>
							<text class="iconText">{{ icon.desc }}</text>
						</view>
					</view>
				</view>

				<view class="categoryList">
					<view class="categoryItem" v-for="category of navList" :key="category.L1Id">
						<image :src="category.picUrl" class="categoryImg"></image>
						<text class="categoryText">{{ category.text }}</text>
					</view>
				</view>

				<floor v-for="floor of floorList" :floor="floor" :key="floor.originSchemeUrl" />
			</view>

			<card v-show="isShow !== '-1'" :isShow="isShow" />
		</scroll-view>
	</view>
</template>

<script>
import floor from '../components/floor/index.vue';
import card from '../components/card/index.vue';
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
	data() {
		return {
			isShow: '-1',
			bannerUrl: [
				'https://yanxuan.nosdn.127.net/92b8f568db3c9a3fcb6bd666b90ed9c6.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
				'https://yanxuan.nosdn.127.net/static-union/16462945850b6e17.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
				'https://yanxuan.nosdn.127.net/4e675544e967fb9d0de7885df390d603.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
				'https://yanxuan.nosdn.127.net/0e446521e786223161b2c21df94b7328.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
				'https://yanxuan.nosdn.127.net/static-union/1646745944c6f282.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
				'https://yanxuan.nosdn.127.net/92b8f568db3c9a3fcb6bd666b90ed9c6.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
				'https://yanxuan.nosdn.127.net/static-union/16462945850b6e17.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
			]
		};
	},
	components: {
		floor,
		card
	},
	mounted() {
		this.getHomeInitInfo();
	},
	methods: {
		...mapActions('home', ['getHomeInitInfo'])
	},
	computed: {
		...mapGetters('home', ['navList', 'iconList', 'floorList'])
	}
};
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
	.navList
		height 80rpx
		display flex
		.navItem
			width 140rpx
			height 80rpx
			font-size 28rpx
			text-align center
			line-height 80rpx
			flex-shrink 0
			box-sizing border-box
			&.active
				border-bottom 2rpx solid red
	.bodyList
		height calc(100vh - 80rpx)
		.bodyItem
			.bodySwiperList
				.bodySwiperImg
					width 100%
					height 300rpx
		.iconList
			display flex
			justify-content space-around
			margin 10rpx 0 20rpx 0
			.iconItem
				display flex
				align-items center
				.iconImg
					width 32rpx
					height 32rpx
				.iconText
					font-size 28rpx
		.categoryList
			display flex
			flex-wrap wrap
			.categoryItem
				width 20%
				display flex
				flex-direction column
				align-items center
				margin-bottom 30rpx
				.categoryImg
					width 110rpx
					height 110rpx
				.categoryText
					font-size 28rpx
</style>
