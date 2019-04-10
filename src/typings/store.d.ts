declare namespace StoreState {
  // 菜单导航
  export interface Navs {
    id: number;
    icon: string;
    name: string;
    path: string;
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

  // 商品类型
  export interface Goods {
    _id: string;
    brand: string;
    name: string;
    desc: string;
    coverImg: string;
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

  export interface GoodsInfo { }
}
