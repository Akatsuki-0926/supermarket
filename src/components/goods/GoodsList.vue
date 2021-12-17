<template>
  <div class="goods">
    <goods-item v-for="item in goods" :goods-info="item"></goods-item>
  </div>
</template>

<script>
import GoodsItem from "@/components/goods/GoodsItem";
export default {
  name: "GoodsList",
  props: {
    goods: Array
  },
  components: {
    GoodsItem
  },
  created() {
    console.log(this.goods);
  }
}
</script>

<style scoped>
.goods {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>
