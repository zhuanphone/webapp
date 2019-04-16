import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import shop from './modules/shop';
import category from './modules/category';
import cart from './modules/cart';
import order from './modules/order'
import auth from './modules/auth'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: {
    shop,
    category,
    cart,
    order,
    auth
  },
});
