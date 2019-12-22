<template>
  <div id="app">
		<h2>{{message}}</h2>
		<h2>{{counter}}</h2>
		<button @click="counter++">+</button>
		<button @click="counter--">-</button>
  </div>
</template>
<script>
export default {
  name: 'app',
	data(){
		return {
			message:"我是App组件",
			counter: 0
		}
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
