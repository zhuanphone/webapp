import $axios from '@/utils/axios';

// export function queryBannerList() {
//   return $axios.get('/shop/banner');
// }

// export function queryCustomsList() {
//   return $axios.get('/shop/customs');
// }

// export function queryQuickNavList() {
//   return $axios.get('/shop/quicknav');
// }

export function queryGoodsInfo(id: string) {
  return $axios.post(`/shop/goods/${id}`);
}

export function queryGoodsList() {
  return $axios.get('/goods/list')
}

export function queryGoodInfo(id: string) {
  return $axios.get(`/goods/read/${id}`)
}