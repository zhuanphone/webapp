export default {
  nav: [
    {
      id: 1,
      icon: 'home',
      name: '首页',
      path: '/',
    },
    // {
    //   id: 2,
    //   icon: 'categrory',
    //   name: '分类',
    //   path: '/category',
    // },
    {
      id: 3,
      icon: 'cart',
      name: '购物车',
      path: '/cart',
    },
    {
      id: 4,
      icon: 'me',
      name: '我',
      path: '/me',
    },
  ],
  url: {
    basicUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000/api/v1'
        // ? 'http://172.18.3.216:5000/api/v1'
        : '',
  },
};
