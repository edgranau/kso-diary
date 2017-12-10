import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import { state as originalState } from './state'

Vue.use(Vuex)

const state = JSON.parse(JSON.stringify(originalState))

export const options = {
  state,
  actions
}

export default new Vuex.Store(options)
