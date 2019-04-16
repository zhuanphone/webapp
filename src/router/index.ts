import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home/Home.vue';
import { getToken } from '@/utils';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { isNav: true },
    component: Home,
  },
  {
    path: '/category',
    name: 'category',
    meta: { isNav: true },
    component: () => import('../views/Category/Category.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart/Cart.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/Order/Order.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/payorder',
    name: 'payorder',
    component: () => import('../views/Order/PayOrder.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/views/Detail/Detail.vue'),
  },
  {
    path: '/me',
    name: 'me',
    meta: { isNav: true, requireAuth: true },
    component: () => import('@/views/Me/Me.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/User/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/User/Register.vue'),
  },
];

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requireAuth)) {
    // let user=window.window.sessionStorage.user;
    // user=user&&JSON.parse(user);
    // user={...store.state.userInfo,...user}

    const token = getToken()

    if (token) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next();
  }

})

export default router;
