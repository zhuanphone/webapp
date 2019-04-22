import { MutationTree, ActionTree, GetterTree } from 'vuex';
import * as TYPES from '../mutation-types';
import {
  queryCreateOrder,
} from '@/api/order';

interface OrderState {
  orderInfo: Partial<StoreState.OrderInfo>, // 订单信息
}

export const state: OrderState = {
  orderInfo: {
    receiverName: '',
    receiverAddress: '',
    receiverPhone: null,
    total: 0,
    adjustmentTotal: 0,
    releatedGoods: [],
  }
};

const mutations: MutationTree<any> = {
  [TYPES.ADD_TO_ORDER](state, data): void {
    if (state.orderInfo.releatedGoods.find((good: StoreState.OrderGood) => good.good === data.good)) {
      return
    }
    state.orderInfo.releatedGoods.push({ good: data, count: 1 })
  },

  [TYPES.CHANGE_ORDER_GOOD](state, data): void {
    console.log('data: ', data);
    const index = state.orderInfo.releatedGoods.findIndex((good: StoreState.OrderGood) => good.good === data.good)
    state.orderInfo.releatedGoods.splice(index, 1, data);
  },

  [TYPES.SET_ORDER_AMOUNT](state) {
    const total = (state.orderInfo.releatedGoods as StoreState.OrderGood[]).reduce(function (ret, cur) {
      return ret + cur.good.purchasePrice * cur.count;
    }, 0);

    const adjustmentTotal = (state.orderInfo.releatedGoods as StoreState.OrderGood[]).reduce(function (ret, cur) {
      if (cur.good.postage === 'SHIPPING' || cur.good.postage === 'PAY') {
        return ret + 0
      } else {
        return ret + parseInt(cur.good.postage);
      }
    }, 0);

    state.orderInfo.total = total + adjustmentTotal;
    state.orderInfo.adjustmentTotal = adjustmentTotal;
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
    const orderDetail = Object.assign({}, orderInfo)
    const releatedGoods = orderDetail.releatedGoods
    orderDetail.releatedGoods = releatedGoods.map((item: StoreState.OrderGood) => {
      return {
        good: item.good._id,
        count: item.count
      }
    })
    const res = await queryCreateOrder(orderDetail)
    console.log('submitOrder res: ', res);
    if (res && res.status === 201) {
      // commit()
    }
    return res
  }

};

const getters: GetterTree<any, any> = {
  goodsOfOrder(state) {
    return state.orderInfo.releatedGoods
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
