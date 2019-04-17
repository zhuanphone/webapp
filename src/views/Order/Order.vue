<template>
  <div class="order order-wrap">
    <mt-header fixed title="填写订单">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="order-content">
      <section>
        <h5>收货地址</h5>
        <mt-field placeholder="填写收货地址" type="textarea" rows="4" v-model="orderInfo.address"></mt-field>
      </section>
      <section>
        <h5>收货人电话</h5>
        <mt-field placeholder="填写收货人电话" type="tel" v-model="orderInfo.phone"></mt-field>
      </section>
      <section>
        <h5>商品列表</h5>
        <div class="cart-area">
          <div class="cart-list">
            <!-- 购物车商品列表 -->
            <div
              v-if="orderInfo.goods"
              class="cart-item"
              v-for="good in orderInfo.goods"
              :key="good.id"
            >
              <div class="cart-item-box">
                <div class="item-detail">
                  <div>
                    <div class="item-img">
                      <a>
                        <img :src="getThumb(good)">
                      </a>
                    </div>
                    <div class="item-info">
                      <a href="">
                        <h3 class="title">{{ good.name }}</h3>
                      </a>
                      <div class="pay">
                        <div class="pay-price">
                          <div class="price">
                            <p class="o-t-price">
                              <span class="major">{{ good.purchasePrice }}</span>
                            </p>
                          </div>
                        </div>
                        <div class="edit-quantity">
                          <p class="btn-minus" @click.prevent="changeGoodCount(good, 'minus')">
                            <a class="sbtn minus off">
                              <icon name="minus"></icon>
                            </a>
                          </p>
                          <p class="btn-input">
                            <input
                              type="number"
                              v-model.number="good.count"
                              @blur="changeGoodCount(good, 'input')"
                            >
                          </p>
                          <p class="btn-plus" @click.prevent="changeGoodCount(good, 'plus')">
                            <a class="sbtn plus">
                              <icon name="plus"></icon>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="order-footer">
      <h5 class="order-total-price">￥{{orderInfo.amount}}</h5>
      <button class="bottom-bar-btn buy" @click="handleSubmitOrder()">提交订单</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';

import { Header, Button, Field, Toast } from 'mint-ui';
import { checkPhoneNumber } from '@/utils';

@Component({
  components: {
    [Header.name]: Header,
    [Button.name]: Button,
    [Field.name]: Field,
  },
})
export default class Order extends Vue {
  @Getter('orderInfo', { namespace: 'order' })
  orderInfo: any;

  @Getter('currentUser', { namespace: 'auth' })
  currentUser: any;

  // get orderAmount() {
  //   const ret = (this.orderInfo.goods as any[]).reduce(function(ret, cur) {
  //     return ret + cur.originPrice;
  //   }, 0);

  //   return ret.toFixed(2);
  // }

  getThumb(good: StoreState.Goods) {
    if (good && good.imgs) {
      return good.imgs[0].url;
    }
  }

  @Action('order/changeOrderGood')
  changeOrderGood: any;

  private changeGoodCount(good: StoreState.GoodsInOrder, action: string) {
    console.log('good: ', good);
    switch (action) {
      case 'minus':
        good.count -= 1;
        break;
      case 'plus':
        good.count += 1;
        break;
      default:
        break;
    }
    this.changeOrderGood(good);
  }

  @Action('order/submitOrder')
  submitOrder: any;

  private handleSubmitOrder() {
    if (!this.orderInfo.address) {
      Toast({
        message: '收货地址不能为空！',
      });
      return;
    }

    if (!this.orderInfo.phone) {
      Toast({
        message: '收货人手机号不能为空！',
      });
      return;
    }

    if (!checkPhoneNumber(this.orderInfo.phone)) {
      Toast({
        message: '手机号格式不正确！',
      });
      return;
    }

    const goods = this.orderInfo.goods as StoreState.GoodsInOrder[];
    this.orderInfo.goods = goods.map(good => ({
      id: good._id,
      count: good.count,
    }));

    // this.orderInfo.userId = this.currentUser._id;
    this.orderInfo.amount = goods.reduce(function(ret, cur) {
      return cur.originPrice + ret;
    }, 0);

    this.submitOrder(this.orderInfo).then((res: StoreState.ResponseData) => {
      if (res.status === 201) {
        const { order, payurl } = res.result;
        const orderId = order._id;
        window.location = payurl;
        // this.$router.push({ name: 'payorder', params: orderId });
      }
    });
  }
}
</script>


<style lang="scss" scoped>
.order-wrap {
  min-height: 100vh;
  background: #f5f5f5;
  padding-top: 110px;
  padding-bottom: 50px;

  .mint-header {
    height: 90px;
    background-color: #f7624f;
  }

  .order-content {
    border-radius: 10px;
    padding: 0 20px;

    section {
      background: #fff;
      padding: 15px;
      margin-bottom: 20px;

      h5 {
        margin-bottom: 10px;
      }

      .mint-cell:last-child {
        background-image: none;
      }
    }
    .mint-cell-title {
      width: 50px;
    }
  }

  .order-footer {
    width: 100%;
    padding: 10px 10px;
    background: #fff;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;

    h5 {
      width: 40%;
      line-height: 80px;
      height: 80px;
      font-size: 40px;
      color: #ff7a00;
    }
  }

  .bottom-bar-btn {
    width: 40%;
    height: 80px;
    bottom: 24px;
    line-height: 80px;
    color: #fff;
    text-align: center;
    font-size: 28px;
    cursor: pointer;
    line-height: 1;
  }

  .buy {
    border-radius: 0 4px 4px 0;
    background-image: -webkit-linear-gradient(left, #ff7a00, #fe560a);
    background-image: linear-gradient(to right, #ff7a00, #fe560a);
  }

  .cart-item {
    // position: relative;
    // display: flex;
    font-size: 24px;
  }

  @at-root .cart-item-box {
    z-index: 10;
    background: #fff;
    transition: transform 0.2s ease-in 0s;

    .o-t-price {
      color: #f60;
      display: inline;

      &:before {
        content: '￥';
        display: inline-block;
      }

      .major {
        font-size: 32px;
      }
    }

    .item-cb {
      -webkit-box-pack: center;
      -ms-box-pack: center;
      -o-box-pack: center;
      display: -webkit-box;
      width: 80px;
      margin-right: 10p;
      position: relative;

      p {
        display: flex;
        align-items: center;
        -webkit-box-align: center;

        .icon {
          font-size: 40px;
        }
      }
    }

    .item-detail {
      flex: 1;

      div {
        display: flex;
      }

      .item-img {
        width: 200px;
        background: #fff;
        overflow: hidden;
        display: flex;
        -webkit-flex-direction: column;
        flex-direction: column;

        a {
          display: block;
          height: 200px;
          line-height: 250px;
          text-align: center;
          overflow: hidden;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: translateZ(0);
        }
      }

      .item-info {
        flex: 1;
        padding: 15px 30px;
        box-sizing: border-box;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;

        .title {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-weight: normal;
          color: #051b28;
          font-size: 23px;
          height: 60px;
          line-height: 32px;
        }

        .edit-sku {
          margin-top: 16px;
          max-height: 46px;
          color: #999;
          cursor: pointer;

          > div {
            max-height: 46px;
            line-height: 40px;
            overflow: hidden;
            box-sizing: boder-box;
            position: relative;
            background-color: #f5f5f5;
            border-radius: 8px;
            padding: 5px 5px 5px 10px;
            display: flex;
            align-items: center;
            -webkit-box-align: center;

            svg {
              margin-left: 10px;
            }
          }
        }

        .pay {
          display: flex;
          width: 100%;
          height: 87px;
          line-height: 87px;
          -webkit-box-align: center;
          -webkit-align-items: center;
          align-items: center;

          .pay-price {
            flex: 1;
          }
        }

        .edit-quantity {
          height: 100%;
          width: 175px;
          display: flex;

          input {
            width: 100%;
            text-align: center;
            font-size: 28px;
            height: 100%;
          }

          .sbtn {
            display: block;
            height: 100%;
            position: relative;
            text-align: center;
          }
        }

        .btn-minus,
        .btn-plus {
          width: 65px;
          height: 100%;
        }

        .btn-input {
          width: 45px;
        }
      }
    }
  }
}
</style>