import $axios from '@/utils/axios';

export function queryCreateOrder(orderInfo: StoreState.OrderInfo) {
  return $axios.post(`/orders/create`, orderInfo);
}