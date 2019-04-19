<template>
  <div class="good-list-wrap">
    <ul class="good-list-box">
      <li class="good-list-item" v-for="good in data" :key="good._id">
        <router-link :to="'/detail/' + good._id">
          <div class="good-product">
            <div class="good-img">
              <img class="lazy-img-fadein" v-lazy="getThumb(good)">
            </div>
            <p class="good-text">{{ good.name }}</p>
            <div class="good-price">
              <span class="price">¥{{ good.purchasePrice }}</span>
              <div class="good-tags">
                <span>30天质保</span>
                <span>支持验机</span>
              </div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class GoodsList extends Vue {
  @Prop({ type: Array, default: () => [] })
  private data: any;

  getThumb(good: StoreState.Goods) {
    if (good.imgs && good.imgs.length > 0) {
      return good.imgs[0].url;
    }
  }
}
</script>

<style lang="scss" scoped>
.good-list-wrap {
  height: 100vh;
}
.good-list-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .good-list-item {
    width: 46%;
    overflow: hidden;
    margin: 20px 0 0 20px;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);

    a {
      display: block;
      overflow: hidden;
    }

    @at-root .good-product {
      background-color: #fff;
      font-size: 0;

      .good-img {
        position: relative;
        width: 100%;

        img {
          display: block;
          width: 100%;
          height: 371px;
          border-radius: 10px 10px 0 0;
          object-fit: cover;
        }
      }

      .good-text {
        padding: 10px 0;
        font-size: 26px;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-word;
        color: #232326;
        margin-top: 10px;
        line-height: 32px;
        margin-bottom: 6px;
        padding: 0 10px;
      }

      .good-price {
        padding: 10px 0;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .price {
          font-size: 30px;
          color: #f23030;
        }

        .good-tags > span {
          background-color: rgba(136, 220, 135, 0.5);
          border-radius: 5px;
          display: inline-block;
          font-size: 20px;
          padding: 2px 5px;
          margin-left: 5px;
          color: #355d34;
        }
      }
    }
  }
}
</style>
