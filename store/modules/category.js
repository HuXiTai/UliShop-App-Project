import request from "../../utils/request.js"

const state = {
	categoryList: []
}

const actions = {
	async getCategoryList({
		commit
	}) {
		const re = await request('/getCateGoryData')
		commit("GET_CATEGORY_LIST", re)
	}
}

const mutations = {
	GET_CATEGORY_LIST(state, value) {
		state.categoryList = value
	}
}

const getters = {}

export default {
	state,
	actions,
	mutations,
	getters,
	namespaced: true
}
