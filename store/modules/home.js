import request from "../../utils/request.js"
const state = {
	homeInitInfo: {}
}
const actions = {
	async getHomeInitInfo({
		commit
	}) {
		const re = await request("/getIndexData")
		console.log(re);
		commit("GET_HOME_INIT_INFO", re)
	}
}
const mutations = {
	GET_HOME_INIT_INFO(state, value) {
		state.homeInitInfo = value
	}
}
const getters = {
	navList(state) {
		return (state.homeInitInfo.kingKongModule || {}).kingKongList || []
	},
	iconList(state){
		return state.homeInitInfo.policyDescList || []
	},
	floorList(state){
		return state.homeInitInfo.categoryModule || []
	}
}
export default {
	state,
	actions,
	mutations,
	getters
}
