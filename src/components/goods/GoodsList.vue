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
  flex-wrap: wrap; /*包裹，否则数据会往一行塞*/
  justify-content: space-around;/*图片中间的空隙均等分，两边是中间的一半*/
  padding: 2px;
}
</style>
