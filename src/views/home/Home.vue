<template>
  <nav-bar class="home-navbar">
    <template v-slot:center>
      <div>测试</div>
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
      recommends: [],
      tabOffsetTop: 0,
      test: ["https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
      "https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg",
      "https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg"],
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
