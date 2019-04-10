import { MutationTree, ActionTree } from 'vuex';
import * as TYPES from '../mutation-types';
import {
  queryGoodsList,
  queryGoodInfo,
} from '@/api/shop';

interface ShopState {
  banners: StoreState.Banners[];
  customs: StoreState.Customs[];
  goodsList: StoreState.Goods[];
  quicknavlist: StoreState.QuickNav[];
  goodInfo: {}
}

export const state: ShopState = {
  banners: [],
  customs: [],
  goodsList: [],
  quicknavlist: [],
  goodInfo: {}
};

const mutations: MutationTree<any> = {
  [TYPES.SET_BANNERS](state, banners) {
    state.banners = banners;
  },

  [TYPES.SET_QUICKNAV](state, list) {
    state.quicknavlist = list;
  },

  [TYPES.SET_CUSTOMS](state, customs) {
    state.customs = customs;
  },

  [TYPES.SET_GOODSLIST](state, list) {
    state.goodsList = list;
  },

  [TYPES.SET_GOODSINFO](state, data) {
    state.goodInfo = data;
  },
};

const actions: ActionTree<any, any> = {
  // 初始化首页数据
  async initAjaxShop({ dispatch }) {
    // dispatch('getBanners');
    // dispatch('getQuickNavList');
    // dispatch('getCustoms');
    // dispatch('getGoodsList');
    dispatch('getGoodsList')
  },


  // 获取猜你喜欢商品列表

  async getGoodsList({ commit }) {
    const res = await queryGoodsList()

    if (res && res.status === 200) {
      commit(TYPES.SET_GOODSLIST, res.result.list || [])
    }
  },

  // 获取快链导航
  // async getQuickNavList({ commit }) {
  //   const res: Ajax.AjaxResponse = await queryQuickNavList();
  //   if (res && res.code === 200)
  //     commit(TYPES.SET_QUICKNAV, res.data.list || []);
  // },

  async getGoodsInfo({ commit }, id) {
    const res = await queryGoodInfo(id)
    console.log('res ====>', res)
    if (res && res.status === 200) commit(TYPES.SET_GOODSINFO, res.result || {})
  },

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
