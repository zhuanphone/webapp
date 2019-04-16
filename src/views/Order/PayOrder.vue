<template>
  <div class="order order-wrap">
      <mt-header fixed title="支付订单">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    <div class="order-content">
      
    </div>
    <div class="order-footer">
      <button>确认支付</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';

import { Header, Button, Field } from 'mint-ui';

@Component({
  components: {
    [Header.name]: Header,
    [Button.name]: Button,
    [Field.name]: Field,
  },
})
export default class PayOrder extends Vue {
  @Getter('orderInfo', { namespace: 'order' })
  orderInfo: any;

  get orderAmount() {
    const ret = (this.orderInfo.goods as any[]).reduce(function(ret, cur) {
      return ret + cur.originPrice;
    }, 0);

    return ret.toFixed(2);
  }

  @Action('order/submitOrder')
  submitOrder: any;

  private handleSubmit() {
    const goods = this.orderInfo.goods as StoreState.GoodsInOrder[];
    this.orderInfo.goods = goods.map(good => ({
      id: good._id,
      count: good.count,
    }));
    this.submitOrder(this.orderInfo);
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
      min-height: 200px;
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
    position: relative;
    display: flex;
    font-size: 24px;
  }

  @at-root .cart-item-box {
    position: relative;
    z-index: 10;
    display: flex;
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
        margin: 15px 0 15px 0px;
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
          max-width: 100%;
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
