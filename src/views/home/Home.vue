<template>
  <nav-bar class="home-navbar">
    <template v-slot:center>
      <div>购物街</div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

import {getHomeMultidata} from "@/axios/home";

export default {
  name: "Home",
  components: {
    NavBar
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    //请求首页的多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
  .home-navbar {
    background-color: var(--color-tint);
    color: white;
  }
</style>
