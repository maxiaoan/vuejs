<template>
  <div id="app">
  	<router-view/>  
  	<main-tab-bar/>
  </div>
</template>

<script>
 import TabBar from 'components/common/tabbar/TabBar.vue'
 import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue'

export default {
  name: 'app',
  components: {
  	MainTabBar
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
