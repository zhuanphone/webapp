<template>
  <div class="home">
    <mt-header fixed title="手机二手交易网"></mt-header>
    <!-- <BannerSwiper :data="banners" /> -->
    <!-- <QuickLinkNav :data="quicknavlist" /> -->
    <!-- <CustomColumn :data="customs" /> -->
    <div class="guess-like-wrap">
      <!-- <p class="guess-title">
        <span class="guess-layout">二手手机卖场</span>
      </p>-->
      <GoodsList :data="goodsList"/>
    </div>
    <!-- <Footer :data="navs" /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { Header, Button, Field } from 'mint-ui';

import Footer from '@/components/Footer.vue';
import GoodsList from '@/components/GoodsList.vue';
import BannerSwiper from './components/BannerSwiper.vue';
import QuickLinkNav from './components/QuickLinkNav.vue';
import CustomColumn from './components/CustomColumn.vue';
import state from '@/store/state';

// const namespace: string = 'shop';

@Component({
  components: {
    [Header.name]: Header,
    [Button.name]: Button,
    Footer,
    GoodsList,
    BannerSwiper,
    QuickLinkNav,
    CustomColumn,
  },
})
export default class Home extends Vue {
  @State
  navs!: StoreState.Navs[];

  @State(state => state.shop.banners)
  banners!: StoreState.Banners[];

  @State(state => state.shop.quicknavlist)
  quicknavlist!: StoreState.QuickNav[];

  @State(state => state.shop.customs)
  customs!: StoreState.Customs[];

  @State(state => state.shop.goodsList)
  goodsList!: StoreState.Goods[];

  @Action('shop/initAjaxShop')
  initAjaxShop: any;
  // @Action('initAjaxShop', { namespace })
  // initAjaxShop: any;

  created() {
    this.initAjaxShop();
  }
  mounted() {}
}
</script>

<style lang="scss">
header.mint-header {
  .mintui {
    font-size: 30px;
  }
  .mint-header-title {
    font-size: 30px;
  }
}
</style>


<style lang="scss" scoped>
.home {
  .mint-header {
    height: 90px;
    background-color: #ff5556;
  }

  .guess-like-wrap {
    margin-top: 90px;
  }
}

.column-title {
  text-align: left;
  font-size: 30px;
  padding: 30px 30px;
}
</style>
