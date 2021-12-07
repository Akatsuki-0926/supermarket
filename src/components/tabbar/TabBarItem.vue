<template>
  <div id="tab-bar-item" class="tab-bar-item" @click="changeActive">
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="icon-active"></slot></div>
    <div :style="activeStyle"><slot name="icon-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    changeActive() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
#tab-bar-item {
  text-align: center;
  flex: 1;
  height: 75px;
  font-size: 14px;
}
</style>