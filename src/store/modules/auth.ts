import { MutationTree, ActionTree, GetterTree } from 'vuex';
import * as TYPES from '../mutation-types';
import { queryRegister, queryLogin } from '@/api/auth';
import { setToken } from '@/utils';

interface AuthStore {
  currentUser: StoreState.UserInfo, // 当前用户
}

export const state: AuthStore = {
  currentUser: {
    _id: '',
    username: '',
    phone: '',
    address: [],
    role: 'USER'
  }
};

const mutations: MutationTree<any> = {

  [TYPES.SET_CURRENT_USER](state, data): void {
    state.currentUser = data
  },

  [TYPES.SET_TOKEN](state, data): void {
    setToken(data)
  }
};

const actions: ActionTree<any, any> = {
  async initAjaxShop({ dispatch }) {
  },

  async login({ commit }, form) {
    const res = await queryLogin(form)

    if (res && res.status === 200) {
      const { user, token } = res.result
      console.log('user: ', user);
      commit(TYPES.SET_TOKEN, token)
      commit(TYPES.SET_CURRENT_USER, user)
    }

    return res
  },

  async register({ commit }, user) {
    const res = await queryRegister(user)

    if (res && res.status === 201) {
      const { user, token } = res.result
      commit(TYPES.SET_TOKEN, token)
      commit(TYPES.SET_CURRENT_USER, user)
    }

    return res;
  }

};

const getters: GetterTree<any, any> = {

  currentUser(state) {
    return state.currentUser
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
