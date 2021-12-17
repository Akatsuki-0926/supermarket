<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: Object
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  padding: 10px 0 10px;
  border-bottom: 8px solid #eee;
}
.recommend-item img {
  height: 80px;
  width: 80px;
  margin-bottom: 8px;
}
.recommend-item {
  flex: 1;
  font-size: 15px;
}
</style>
