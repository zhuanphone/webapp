<template>
  <div class="good-list-wrap">
    <ul class="good-list-box">
      <li class="good-list-item" v-for="good in data" :key="good._id">
        <router-link :to="'/detail/' + good._id">
          <div class="good-product">
            <div class="good-img">
              <img class="lazy-img-fadein" v-lazy="good.imgs[0].url">
            </div>
            <p class="good-text">{{ good.name }}</p>
            <p class="good-price">
              ¥
              <span class="price">{{ good.originPrice }}</span>
            </p>
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
}
</script>

<style lang="scss" scoped>
.good-list-wrap {
  height: 100vh;
}
.good-list-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .good-list-item {
    width: 46%;
    overflow: hidden;
    margin: 20px 0 0 0;
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
        text-align: center;
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
        text-align: center;
        font-size: 28px;
        color: #f23030;
      }
    }
  }
}
</style>
