import { MutationTree, ActionTree, GetterTree } from 'vuex';
import * as TYPES from '../mutation-types';
import {
  queryCreateOrder,
} from '@/api/order';

interface OrderState {
  orderInfo: StoreState.OrderInfo, // 订单信息
}

export const state: OrderState = {
  orderInfo: {
    deliveryAddr: '',
    amount: 0,
    goods: [],
    userId: ''
  }
};

const mutations: MutationTree<any> = {
  [TYPES.ADD_TO_ORDER](state, data): void {
    state.orderInfo.goods.push({ ...data, count: 1 })
  },

  [TYPES.CHANGE_ORDER_GOOD](state, data): void {
    console.log('data: ', data);
    const index = state.orderInfo.goods.findIndex((good: StoreState.Goods) => good._id === data.id)
    state.orderInfo.goods.splice(index, 1, data);
  },

  [TYPES.SET_ORDER_AMOUNT](state) {
    const total = (state.orderInfo.goods as any[]).reduce(function (ret, cur) {
      return ret + cur.purchasePrice * cur.count;
    }, 0);

    //  ret.toFixed(2);
    state.orderInfo.amount = total;
  }
};

const actions: ActionTree<any, any> = {
  async initAjaxShop({ dispatch }) {
    dispatch('initOrderUserId')
  },

  // 初始化订单的用户信息
  initOrderUserId({ commit }) {
    const userId = '222'
    commit(TYPES.SET_ORDER_USERID, userId)
  },

  // 将商品添加到用于生成订单的store里
  addToOrder({ commit }, good) {
    console.log('add to cart: ', good)
    commit(TYPES.ADD_TO_ORDER, good)
    commit(TYPES.SET_ORDER_AMOUNT)
  },

  changeOrderGood({ commit }, good) {
    commit(TYPES.CHANGE_ORDER_GOOD, good)
    commit(TYPES.SET_ORDER_AMOUNT)
  },

  async submitOrder({ commit }, orderInfo) {
    console.log('orderInfo: ', orderInfo);
    const res = await queryCreateOrder(orderInfo)
    console.log('submitOrder res: ', res);
    if (res && res.status === 201) {
      // commit()
    }
    return res
  }

};

const getters: GetterTree<any, any> = {
  goodsOfOrder(state) {
    return state.orderInfo.goods
  },

  orderInfo(state) {
    return state.orderInfo
  }

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
