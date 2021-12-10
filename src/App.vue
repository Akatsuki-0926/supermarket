<template>
  <div id="nav">
    <main-tab-bar></main-tab-bar>
  </div>
  <router-view/>
</template>
<script>
  import MainTabBar from '@/components/tabbar/MainTabBar'
  export default {
    components: {MainTabBar}
  }

</script>
<style>
  @import "assets/css/base.css";
</style>
