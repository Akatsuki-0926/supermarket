<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    /*有内容line-height才有效果*/
    line-height: 44px;
    /*background-color: #ff5777;*/
    text-align: center;
    box-shadow: 0 1px 1px #c98b8b;
  }
  .left {
    width: 60px;
  }
  .right {
    width: 60px;
  }
  .center {
    /*flex:1,将剩余部分全部占据*/
    flex: 1;
  }
</style>
