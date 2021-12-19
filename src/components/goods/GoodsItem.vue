<template>
  <div class="goods-item">
    <img :src="goodsInfo.img" alt="">
    <div>
      <p class="text">{{goodsInfo.title}}</p>
      <span class="price">￥{{goodsInfo.price}}</span>
      <span class="sale">{{goodsInfo.sale}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsInfo: Object
  }
}
</script>

<style scoped>
.goods-item {
  width: 48%;
  padding-bottom: 20px;
  position: relative;
  /*text-overflow: ellipsis;*/
}
.goods-item img{
  width: 100%;
  border-radius: 5px;
}
.text {
  text-align: left;
  font-size: 8px;
}
.price {
  margin-left: 40px;
  text-align: center;
  color: #ff8198;
}
.sale {
  margin-left: 10px;
}
</style>
