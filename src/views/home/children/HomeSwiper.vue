<template>
  <div class="homeSwiper">
    <swiper :autoplay="options.autoplay" loop :pagination="{ clickable : true }" :speed="2000">
      <swiper-slide v-for="item in banners">
        <img :src="item.image" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import SwiperCore, { Pagination, Autoplay } from 'swiper'
  import{ Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/swiper.scss'
  import'swiper/components/pagination/pagination.scss'
  SwiperCore.use([Pagination, Autoplay])
  export default {
    props: {
      banners: Object
    },
    name:'HomeSwiper',
    data(){
      return {
      }
    },
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      let options = {
        autoplay: {
          delay: 2000
        }
      }
      return {options}
    }
  }
</script>

<style lang="less" scoped>
img {
  height: 200px;
  width: 100%;
}
</style>
