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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
