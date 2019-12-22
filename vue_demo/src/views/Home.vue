<template>
  <div>
    
		<router-link to="/home/news">News</router-link> |
		<router-link to="/home/jokes">Jokes</router-link>
		<router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',

}
</script>
