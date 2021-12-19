<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="titles" class="tab-control" @tabClick="tabClick"></tab-control>
    <goods-list :goods="list"></goods-list>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from "@/views/home/children/HomeSwiper";
import RecommendView from "@/views/home/children/RecommendView";
import FeatureView from "@/views/home/children/FeatureView";
import TabControl from "@/components/tabControl/TabControl";
import GoodsList from "@/components/goods/GoodsList";
import {getHomeMultidata, getGoods} from "@/axios/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['综合', '销量', '新品'],
      currentSort: 'pop',
      list: [],
      goods: {
        'pop': {
          page: 0, list: []
        },
        'new': {
          page: 0, list: []
        },
        'sell': {
          page: 0, list: []
        },
      }
    }
  },
  mounted() {
    this.getMultidata()
    //请求商品数据
    this.getGoodsInfo('pop')
    this.getGoodsInfo('sell')
    this.getGoodsInfo('new')
    this.list = this.goods.pop.list
  },
  methods: {
    getMultidata() {
      // 请求首页的多个数据
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getGoodsInfo(type) {
      const page = this.goods[type].page + 1;
      getGoods(type, page).then(res => {
        this.goods[type].list.push(...res);
        this.goods[type].page = page;
      }).catch(err => {
        console.log(err);
      })
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentSort = 'pop';
          break;
        case 1:
          this.currentSort = 'sell';
          break;
        case 2:
          this.currentSort = 'new';
          break;
      }
      this.goodsList(this.currentSort)
    },
    goodsList(type) {
      this.list = this.goods[type].list;
    }
  }
}
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-navbar {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1000;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    background-color: #fff;
    z-index: 9;
  }
</style>
