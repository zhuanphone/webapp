import $axios from '@/utils/axios';

// 登录
export function queryLogin(user: StoreState.User) {
  return $axios.post('/auth/login', user)
}

// 注册
export function queryRegister(user: StoreState.User) {
  return $axios.post('/auth/register', user)
}