declare namespace StoreState {
  // 菜单导航
  export interface Navs {
    id: number;
    icon: string;
    name: string;
    path: string;
  }

  export interface ResponseData {
    status: number;
    message: string;
    result: any;
  }

  // 广告轮播
  export interface Banners {
    id: string | undefined;
    activityId: string | undefined;
    src: string;
    desc: string;
    isActivity: boolean;
  }

  // 自定义模块
  export interface Customs {
    type: string;
    title: string;
    imglist: any;
  }

  export interface User {
    username: string;
    phone: string;
    password: string;
  }

  export enum Roles {
    USER = 'USER',
    ADMIN = 'ADMIN'
  }

  export interface UserInfo {
    _id: string;
    username: string;
    phone: string;
    address: string[];
    cart?: any[];
    role: string;
  }

  export interface GoodImg {
    uid: string;
    url: string;
    name: string;
  }

  // 商品类型
  export interface Goods {
    _id: string;
    brand: string;
    name: string;
    desc: string;
    coverImg: string;
    imgs: GoodImg[];
    originPrice: number;
    purchasePrice: number;
    onShelve: GoodsStatus;
    saleCount: number;
  }

  export enum GoodsStatus {
    WILLSHELVES = 'WILLSHELVES',
    ONSHELVES = 'ONSHELVES',
    OBTAINED = 'OBTAINED'
  }

  // 快链导航
  export interface QuickNav {
    id: string;
    title: string;
    icon: string;
  }

  export interface GoodsLink {
    id: string;
    count: number;
  }

  type GoodsInOrder = Goods & GoodsLink

  // 订单信息
  export interface OrderInfo {
    deliveryAddr: string; // 发送地址
    amount: number; // 订单总金额
    userId: string; // 关联用户
    goods: GoodsInOrder[] // 包含商品
  }
}
