<template>
  <nav-bar class="home-navbar">
    <template v-slot:center>
      <div>购物街</div>
    </template>
  </nav-bar>
  <home-swiper :banners="banners"></home-swiper>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from "@/views/home/children/HomeSwiper";
import {getHomeMultidata} from "@/axios/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  mounted() {
    // 请求首页的多个数据
    getHomeMultidata().then(res => {
      this.banners = res.banner.list;
      this.recommends = res.recommend.list;
    })
  },
}
</script>

<style scoped>
  .home-navbar {
    background-color: var(--color-tint);
    color: white;
  }
</style>
