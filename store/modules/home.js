import request from "../../utils/request.js"
const state = {
	homeInitInfo: {},
	cardInitInfo: []
}
const actions = {
	async getHomeInitInfo({
		commit
	}) {
		const re = await request("/getIndexData")
		commit("GET_HOME_INIT_INFO", re)
	},

	async getCardInitInfo({
		commit
	}) {
		const re = await request("/getIndexCateList")
		commit("GET_CARD_INIT_INFO", re)
	}
}
const mutations = {
	GET_HOME_INIT_INFO(state, value) {
		state.homeInitInfo = value
	},

	GET_CARD_INIT_INFO(state, value) {
		console.log(value,"123");
		state.cardInitInfo = value
	}
}
const getters = {
	navList(state) {
		return (state.homeInitInfo.kingKongModule || {}).kingKongList || []
	},
	iconList(state) {
		return state.homeInitInfo.policyDescList || []
	},
	floorList(state) {
		return state.homeInitInfo.categoryModule || []
	}
}
export default {
	state,
	actions,
	mutations,
	getters,
	namespaced:true
}
