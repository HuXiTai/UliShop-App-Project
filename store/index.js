import Vue from "vue"
import Vuex from "vuex"
import home from "./modules/home.js"
Vue.use(Vuex)

const state = {}

const actions = {}

const mutations = {}

const getters = {}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters,
	modules: {
		home
	}
})
