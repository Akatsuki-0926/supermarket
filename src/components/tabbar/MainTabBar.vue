<template>
  <tab-bar>
    <template v-slot>
      <tab-bar-item path="/home">
        <template v-slot:icon>
          <img src="../../assets/img/tabbar/home.svg" alt="" class="myImg">
        </template>
        <template v-slot:icon-active>
          <img src="../../assets/img/tabbar/home_active.svg" alt="" class="myImg">
        </template>
        <template v-slot:icon-text>首页</template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:icon>
          <img src="../../assets/img/tabbar/category.svg" alt="" class="myImg">
        </template>
        <template v-slot:icon-active>
          <img src="../../assets/img/tabbar/category_active.svg" alt="" class="myImg">
        </template>
        <template v-slot:icon-text>分类</template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template v-slot:icon>
          <img src="../../assets/img/tabbar/shopcart.svg" alt="" class="myImg">
        </template>
        <template v-slot:icon-active>
          <img src="../../assets/img/tabbar/shopcart_active.svg" alt="" class="myImg">
        </template>
        <template v-slot:icon-text>购物车</template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:icon>
          <img src="../../assets/img/tabbar/profile.svg" alt="" class="myImg">
        </template>
        <template v-slot:icon-active>
          <img src="../../assets/img/tabbar/profile_active.svg" alt="" class="myImg">
        </template>
        <template v-slot:icon-text>我的</template>
      </tab-bar-item>
    </template>
  </tab-bar>
</template>

<script>
import TabBar from '@/components/tabbar/TabBar'
import TabBarItem from '@/components/tabbar/TabBarItem'
export default {
  name: "MainTabBar",
  components: {TabBarItem, TabBar}
}
</script>

<style scoped>
.myImg {
  width: 18px;
  height: 18px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>