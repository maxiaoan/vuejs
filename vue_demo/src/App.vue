<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
			<router-link :to="{path:'/profile',query:{name:'codewhy',age:18,height:188}}">Profile</router-link> |
    <button @click="userClick">User</button> |
		<button @click="profileClick">Profile</button>
		</div>
    <router-view/>
  </div>
</template>

<script>
	export default {
		name:"App",
		data(){
			return{
				userId: '1234'
			}
		},
		methods:{
			userClick(){
				this.$router.push('/user/' + this.userId)
			},
			profileClick(){
				this.$router.push('/profile')
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
}

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
