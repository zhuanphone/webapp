<template>
  <div class="detail buy-goods-wrap">
    <mt-header fixed title="手机详情">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="detail-header">
      <div class="detail-header__user">
        <img src="../../assets/images/ego.png" alt="">
        <span>转转手机优品店</span>
      </div>
      <div class="detail-header__price">
        <i>￥</i>
        <h5>{{goodInfo.purchasePrice}}</h5>
        <span>{{getPostage(goodInfo.postage)}}</span>
      </div>
      <h1 class="detail-header__title">{{goodInfo.title}}</h1>
    </div>
    <!-- 图片 -->
    <!-- <div :class="[isFullScreen ? 'siema-wrapper' : '', 'goods-swiper']">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in goodInfo.imgs" :key="item.uid">
          <div class="img-wrapper">
            <img :src="item.url" @click.prevent="openGoodsSwiper">
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>-->
    <!-- 价格 -->
    <!-- <div class="goods-price">
      <p class="goods-sales-price">
        现价：¥
        <em>{{ goodInfo.purchasePrice }}</em>
      </p>
      <p class="goods-original-price">
        原价：￥
        <del>{{ goodInfo.originPrice }}</del>
      </p>
    </div>-->
    <!-- 价格 -->
    <!-- <div class="goods-name">
      <p class="goods-name-text">{{ goodInfo.title }}</p>
    </div>-->
    <!-- 其他信息 -->
    <!-- <div class="goods-text">
      <p class="goods-express">快递：{{ 1 }}</p>
      <p class="goods-sales">总销{{ 2 }}笔</p>
      <p class="goods-evaluation">评价{{ 3 }}条</p>
    </div>-->
    <div class="goods-gary"></div>
    <section class="detail-body">
      <h5>
        <span class="detail-body__title-quto"></span>
        商品详情
      </h5>
      <div class="detail-body__info">
        <div class="detail-body__info-item">
          <label for="">颜色：</label>
          <span>{{goodInfo.properties.color}}</span>
        </div>
        <div class="detail-body__info-item">
          <label for="">容量：</label>
          <span>{{goodInfo.properties.capacity}}</span>
        </div>
        <div class="detail-body__info-item">
          <label for="">发行版本：</label>
          <span>{{goodInfo.properties.release}}</span>
        </div>
        <div class="detail-body__info-item">
          <label for="">成色：</label>
          <span>{{goodInfo.properties.quality}}</span>
        </div>
        <div class="detail-desc-body" v-html="goodInfo.desc"></div>
        <div class="detail-body__properties">
          <h4>产品介绍：</h4>
          <div class="detail-body__properties-container">
            <div class="detail-body__properties-item">
              <span>[型号]：</span>
              <span>{{goodInfo.properties.model}}</span>
            </div>
            <div class="detail-body__properties-item">
              <span>[版本]：</span>
              <span>{{goodInfo.properties.release}}</span>
            </div>
            <div class="detail-body__properties-item">
              <span>[手机网络]：</span>
              <span>{{goodInfo.properties.network}}</span>
            </div>
            <div class="detail-body__properties-item">
              <span>[内存]：</span>
              <span>{{goodInfo.properties.capacity}}</span>
            </div>
            <div class="detail-body__properties-item">
              <span>[网络]：</span>
              <span>{{goodInfo.properties.network}}</span>
            </div>
            <div class="detail-body__properties-item">
              <span>[颜色]：</span>
              <span>{{goodInfo.properties.color}}</span>
            </div>
            <div class="detail-body__properties-item">
              <span>[屏幕]：</span>
              <span>{{goodInfo.properties.screen}}</span>
            </div>
            <div class="detail-body__properties-item">
              <span>[成色]：</span>
              <span>{{goodInfo.properties.quality}}</span>
            </div>
            <div class="detail-body__properties-item">
              <span>[边框外壳]：</span>
              <span>{{goodInfo.properties.borderShell}}</span>
            </div>
            <div class="detail-body__properties-item">
              <span>[维修历史]：</span>
              <span>{{goodInfo.properties.maintainHistory}}</span>
            </div>
            <div class="detail-body__properties-item">
              <span>[账号密码]：</span>
              <span>{{goodInfo.properties.account}}</span>
            </div>
            <div class="detail-body__properties-item">
              <span>[功能性问题]：</span>
              <span>{{goodInfo.properties.funcProblem}}</span>
            </div>
          </div>
        </div>
        <div class="detail-body__imgs">
          <div v-for="item in goodInfo.imgs" :key="item.uid">
            <img :src="item.url">
          </div>
        </div>
      </div>
      <!-- <div class="detais" v-for="(value, key , i) in goodInfo.properties" :key="i">
        <mt-cell :title="getKey(key)" :value="value"></mt-cell>
      </div>-->
    </section>
    <div class="bottom-bar">
      <div class="bottom-bar-btn buy" @click="buyNow()">
        <span class="btn-title">立即购买</span>
      </div>
    </div>
    <!-- <div class="bottom-bar">
      <div class="btn-shop" @click="goToChartPage()">
        <span class="taobao-iconfont icon-highlight">삍</span>
        <span class="btn-text">购物车</span>
        <i>{{ cartGoodsCount }}</i>
      </div>
      <div class="bottom-bar-btn cart">
        <span class="btn-title" @click="handleAddToCart()">加入购物车</span>
      </div>
      <div class="bottom-bar-btn buy">
        <span class="btn-title" @click="buyNow()">立即购买</span>
      </div>
    </div>-->
    <!-- <mt-popup v-model="popupProductVisible" position="bottom" class="mint-popup">
      <div class="dialog">
        <div class="dialog-content">
          <img src="goodInfo.imgs[0].url" alt="">
          <div>
            <h3>{{ goodInfo.name }}</h3>
            <div>
              <h4>{{ goodInfo.originPrice }}</h4>
            </div>
          </div>
        </div>
        <div class="dialog-button-group">
          <button class="btn-close" @click="confirmAddToCart()">完成</button>
        </div>
      </div>
    </mt-popup>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';

import 'mint-ui/lib/popup/style.css';
import { Popup, Header, Button, Field, Cell } from 'mint-ui';

import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

@Component({
  components: {
    [Header.name]: Header,
    [Button.name]: Button,
    [Popup.name]: Popup,
    [Cell.name]: Cell,
    swiper,
    swiperSlide,
  },
})
export default class Detail extends Vue {
  private isFullScreen: boolean = false;
  private popupSkuVisible: boolean = false;
  private popupProductVisible: boolean = false;

  private swiperOption = {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    preventLinksPropagation: true,
  };

  @State(state => state.shop.goodInfo)
  private goodInfo!: object;

  @Action('shop/getGoodsInfo')
  getGoodsInfo: any;

  @Action('order/addToOrder')
  addToOrder: any;

  @Getter('cartGoodsCount', { namespace: 'cart' })
  cartGoodsCount: any;

  created() {
    window.scroll(0, 0);
    let id = this.$route.params.id;
    if (id) this.getGoodsInfo(id);
  }

  destroyed() {
    document.body.classList.remove('full-screen');
  }

  getGrade(score: number) {
    let grade: any = {
      2: '低',
      3: '中',
      4: '高',
    };
    return grade[Math.floor(score)];
  }

  getPostage(value: any) {
    const postageMap: { [key: string]: string } = {
      SHIPPING: '包邮',
      PAY: '到付',
    };
    if (typeof parseInt(value) === 'number' && parseInt(value) > 0) {
      return `￥${value}`;
    } else {
      return postageMap[value];
    }
  }

  openGoodsSwiper() {
    this.isFullScreen = !this.isFullScreen;
    this.isFullScreen
      ? document.body.classList.add('full-screen')
      : document.body.classList.remove('full-screen');
  }

  @Action('cart/addToCart')
  addToCart: any;

  handleAddToCart() {
    this.popupProductVisible = true;
  }

  buyNow() {
    this.addToOrder(this.goodInfo);
    this.$router.push('/order');
  }

  confirmAddToCart() {
    this.addToCart(this.goodInfo);
    this.popupProductVisible = false;
  }

  goToChartPage() {
    this.$router.push('/cart');
  }

  getKey(key: string): string {
    const keyMap: { [key: string]: string } = {
      model: ' 型号',
      color: ' 颜色',
      capacity: ' 容量',
      release: ' 发行版本',
      network: ' 手机网络',
      quality: ' 成色',
      warranty: ' 保修',
      borderShell: ' 边框外壳',
      screen: ' 屏幕',
      maintainHistory: ' 维修拆机史',
      account: ' 账号密码',
      funcProblem: ' 功能性问题',
    };

    return keyMap[key];
  }
}
</script>

<style lang="scss">
.full-screen {
  position: fixed;
  overflow: hidden;
}

header.mint-header {
  .mintui {
    font-size: 30px;
  }
  .mint-header-title {
    font-size: 30px;
  }
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.img-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  font-size: 0;
  overflow: hidden;
  min-height: 750px;

  img {
    width: 100%;
    height: auto;
  }
}

.mint-popup {
  width: 100%;
}
.detail-desc-body {
  overflow: hidden;
  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }
}
</style>
<style lang="scss" scoped>
.detail-header__user {
  padding: 0 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    border: 1px solid #ccc;
    border-radius: 80px;
    object-fit: contain;
  }

  span {
    font-size: 30px;
    margin-left: 20px;
  }
}

.detail-header__price {
  padding: 0 20px;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  margin-top: 40px;
  i {
    color: #ff5556;
    font-size: 22px;
    font-style: normal;
  }
  h5 {
    margin-right: 12px;
    color: #ff5556;
    font-size: 40px;
  }

  span {
    margin-left: 10px;
    color: #98989b;
    font-size: 26px;
  }
}

.detail-header__title {
  text-indent: 8px;
  font-size: 40px;
  font-weight: normal;
  padding-left: 20px;
  margin-top: 40px;
}

.detail-body {
  .detail-body__title-quto {
    display: inline-block;
    width: 10px;
    height: 40px;
    margin-right: 12px;

    border-radius: 10px;
    background-color: #ff5556;
  }
  h5 {
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 40px;
    line-height: 40px;
  }
}

.detail-body__info {
  .detail-body__info-item {
    display: inline-block;
    width: 50%;
    margin-bottom: 30px;

    label {
      color: #9f9f9f;
    }
  }
}

.detail-body__properties {
  margin-top: 80px;

  h4 {
    font-weight: normal;
    margin-bottom: 20px;
  }

  .detail-body__properties-item {
    margin-bottom: 22px;
  }
}

.detail-body__imgs {
  width: 100%;

  img {
    width: 100%;
    border-radius: 10px;
  }
}

.goods-swiper {
  overflow: hidden;
  width: 100vw;
  height: 100vw;
  background: #f5f5f5;
  transition: height 0.3s;
  z-index: 1000;
}

.siema-wrapper {
  position: relative;
  top: 0;
  height: 100vh;
  background: #000;
}

.buy-goods-wrap {
  height: calc(100% + 500px);
  padding-top: 90px;
  padding-bottom: 90px;

  section {
    h5 {
      margin-bottom: 50px;
    }
    padding: 60px 20px 0 20px;
  }

  .mint-header {
    height: 90px;
    background-color: #ffffff;
    color: #000;
  }

  .mint-header.is-fixed {
    z-index: 100;
  }
  .goods-gary {
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 20px;
    background-color: #f8f8f8;
    position: relative;
  }
  .goods-price {
    overflow: hidden;
    position: relative;
    padding: 0 20px;
    margin-top: 24px;

    .goods-sales-price {
      font-size: 24px;
      font-weight: bold;
      color: #e4393c;

      em {
        font-size: 38px;
        font-style: normal;
      }
    }

    .goods-original-price {
      font-size: 24px;

      del {
        font-style: normal;
      }
    }
  }

  .goods-sales > span {
    display: inline-block;
    padding: 0 10px;
  }

  .goods-name {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    padding: 20px 20px;

    .goods-name-text {
      font-size: 30px;
      font-weight: bold;
      line-height: 40px;
    }

    .goods-share {
      width: 240px;
      height: 100px;
    }
  }

  .goods-text {
    display: flex;
    overflow: hidden;
    position: relative;
    padding: 0 20px;
    padding-bottom: 20px;

    > p {
      flex: 1;
      font-size: 24px;
    }

    > p:nth-child(2) {
      text-align: center;
    }

    > p:nth-child(3) {
      text-align: right;
    }
  }

  .goods-shop {
    padding: 10px 0;
    .goods-shop-name {
      display: flex;
      overflow: hidden;
      position: relative;
      padding: 0 20px;
      align-items: center;
      .shop-logo {
        width: 80px;
        height: 80px;
      }

      .shop-name {
        flex: 1;
        font-size: 28px;
        margin-top: 10px;
        margin-left: 15px;
      }
    }
  }

  .goods-shop-evaluation {
    display: flex;
    overflow: hidden;
    position: relative;
    padding: 0 20px;

    > p {
      flex: 1;
      font-size: 24px;

      span {
        display: inline-block;
        margin-right: 10px;
        color: #e4393c;
      }
    }

    > p:nth-child(2) {
      text-align: center;
    }

    > p:nth-child(3) {
      text-align: right;
    }
  }

  .goods-shop-bnts {
    display: flex;
    overflow: hidden;
    padding: 20px 0 10px 20px;

    button {
      flex: 1;
      position: relative;
      border: none;
      margin: 10px 20px 0 0;
      height: 60px;
      line-height: 60px;
      font-size: 24px;
      background-color: #fff;
      border: 1px solid #ddd;
    }
  }
}

.goods-detail-desc {
  overflow: hidden;

  .detail-desc-title {
    position: relative;
    display: -webkit-box;
    -webkit-box-pack: center;
    padding: 20px 0;
    text-align: center;
    font-size: 28px;
    background-color: #f5f5f5;

    &:after {
      transform: scaleY(0.5);
      background-color: #cbcbcb;
      content: '';
      height: 1px;
      left: 0;
      position: absolute;
      top: 50%;
      width: 100%;
    }

    span {
      display: block;
      position: relative;
      z-index: 1;
      padding: 0 20px;
      background-color: #f5f5f5;
    }
  }

  .detail-desc-body {
    overflow: hidden;
    letter-spacing: 1px;
    padding: 10px;
    line-height: 40px;
    font-size: 30px;
    img {
      display: block;
      max-width: 100%;
      margin: 0 auto;
    }
  }
}

.goods-cell {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  padding: 20px 20px;
  font-size: 26px;
  line-height: 50px;

  .goods-cell-title {
    width: 100px;
    color: rgb(153, 153, 153);
  }

  .goods-cell-content {
    flex: 1;
  }
}

.bottom-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  z-index: 110;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;

  .btn-shop {
    position: relative;
    i {
      position: absolute;
      top: 10px;
      right: 4px;
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 30px;
      text-align: center;
      line-height: 30px;
      background: #fe560a;
      color: white;
      font-style: normal;
    }
  }
  > div {
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    white-space: nowrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    color: #999;
    padding: 0 30px;
    font-size: 24px;
  }

  .bottom-bar-btn {
    width: 100%;
    height: 80px;
    bottom: 24px;
    line-height: 80px;
    color: #fff;
    text-align: center;
    font-size: 28px;
    cursor: pointer;
    line-height: 1;
  }

  .cart {
    border-radius: 4px 0 0 4px;
    background-image: -webkit-linear-gradient(left, #ffc500, #ff9402);
    background-image: linear-gradient(to right, #ffc500, #ff9402);
  }

  .buy {
    // border-radius: 5px;
    background-color: #ff5556;
  }
}

.dialog {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  width: 100%;
  height: 83vh;
  background-color: #fff;
  color: #333;
  font-size: 28px;

  .dialog-title {
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    height: 100px;
    line-height: 100px;
  }

  .dialog-content {
    display: flex;
    flex: 1;
    overflow: auto;
    padding: 0 20px;
  }

  .dialog-button-group {
    display: flex;
    width: 100%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    padding: 20px;

    .btn-close {
      width: 100%;
      height: 80px;
      font-size: 30px;
      border-radius: 4px;
      color: #fff;
      border: 0;
      background-image: -webkit-linear-gradient(left, #ff9000 0%, #ff5000 100%);
      background-image: linear-gradient(to right, #ff9000 0%, #ff5000 100%);
    }
  }
}

.dialog-xsku {
  width: 100%;
}

.ctrl-ui-sku {
  display: flex;
  height: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  font-size: 26px;
  padding: 20px 0;
  color: #333;

  .sku-pro {
    padding-bottom: 30px;
    border-bottom: 1px solid #f2f2f2;

    > div {
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      flex-direction: row;
      -webkit-box-align: end;
      align-items: flex-end;

      .sku-img {
        font-size: 0;

        img {
          width: 220px;
          height: 220px;
        }
      }

      .sku-pro-info {
        margin-left: 20px;

        .sku-title {
          display: none;
        }

        .h {
          color: #ff5000;
          font-size: 36px;
          margin-bottom: 10px;
        }

        .sku-txt {
          font-size: 24px;
        }

        .sku-txt {
          font-size: 24px;
        }
      }

      .sku-closed {
        font-size: inherit;
        position: relative;
        position: absolute;
        top: 20px;
        right: 20px;
        color: #999;
        cursor: pointer;
      }
    }
  }

  .sku-info {
    flex: 1;
    overflow: auto;

    > div {
      margin-top: 10px;
      border-top: 1px solid #f2f2f2;

      h2 {
        font-size: 28px;
        font-weight: normal;
        padding: 30px 0;
      }

      ul {
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        flex-direction: row;
        flex-wrap: wrap;

        li {
          border-radius: 32px;
          padding: 16px 29px;
          font-size: 24px;
          margin-right: 28px;
          margin-bottom: 20px;
        }

        li.normal {
          background-color: #f8f8f8;
          white-space: nowrap;
        }
      }
    }

    div:first-child {
      border-top: 0;
      margin-top: 0;
    }

    div.quantity-info .sku-quantity {
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      flex-direction: row;
      -webkit-box-align: center;
      align-items: center;
      margin-top: 10px;

      h2 {
        flex: 2;
      }

      .btn-minus,
      .btn-plus {
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        width: 65px;
        height: 65px;
        background-color: #f6f6f6;
        position: relative;
      }

      .btn-input {
        width: 80px;
        height: 65px;
        margin: 0 8px;
        position: relative;

        input {
          font-size: 28px;
          background-color: #f6f6f6;
          border: 0;
          width: 85px;
          height: 65px;
          text-align: center;
        }
      }
    }
  }

  .sku-btns {
    width: 100%;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    box-sizing: border-box;
    padding-top: 20px;

    .sku-btn {
      width: 50%;
      height: 80px;
      line-height: 80px;
      color: #fff;
      text-align: center;
      font-size: 30px;
      cursor: pointer;
    }

    .addcart {
      border-radius: 4px 0 0 4px;
      background-image: linear-gradient(to right, #ffc500, #ff9402);
    }

    .gobuy {
      border-radius: 0 4px 4px 0;
      background-image: linear-gradient(to right, #ff7a00, #fe560a);
    }
  }
}

.dialog-product-params {
  .product-param-list li:first-child {
    padding-top: 0;
  }

  .product-param-list li {
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    padding: 20px 0;

    .param-name {
      width: 20%;
      color: #999;
    }

    .param-value {
      width: 80%;
      padding-left: 30px;
      word-break: break-word;
    }
  }
}
</style>
