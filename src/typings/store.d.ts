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

  export enum GoodPostState {
    Shipping = '包邮',
    Pay = "到付",
  }

  // 商品类型
  export interface Goods {
    _id: string;
    type: String; // Phone, Watch, Other
    title: string;
    desc: string;
    postage: string; // 运费
    createdAt: string;
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

  export interface OrderGood {
    good: Goods;
    count: number;
  }

  // 订单信息
  export interface OrderInfo {
    serialNum: string; // 订单号
    receiverAddress: string; // 收货地址
    receiverPhone: number | null; // 收货人电话
    receiverName: string; // 收货人姓名
    createdAt: string; // 订单创建日期
    completedAt: string; // 订单完成时间
    total: number; // 订单总金额
    adjustmentTotal: number; // 邮费和其他费用
    state: string; // 订单状态
    paymentState: string; // 支付状态
    releatedGoods: OrderGood[] // 包含商品
  }
}
