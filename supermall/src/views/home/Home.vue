<template>
	<div id="home">
		<nav-bar class="home-nav"> <div slot="center">Cart</div></nav-bar>
		<home-swiper :banners="banners"></home-swiper>
		<home-recommend-view :recommends="recommends"></home-recommend-view>
        <feature-view></feature-view>
         <tab-control class="tab-control" :titles="['Fashion','Newest','Style']"></tab-control>
		<br><br><br><br><br><br><br>
		<br><br><br><br><br><br><br>
		<br><br><br><br><br><br><br>
		<br><br><br><br><br><br><br>
		<br><br><br><br><br><br><br>
		<br><br><br><	br><br><br><br>
		<br><br><br><br><br><br><br>
		<br><br><br><br><br><br><br>
		<br><br><br><br><br><br><br>
		<br><br><br><br><br><br>
		<br><br><br><br><br><br><br>
		<br><br><br><br><br><br><br>
		<br><br><br><br><br><br><br>
		<br><br><br><br><br><br><br>
		<br><br><br><br><br><br><br>
		<br><br><br><br><br><br><br>

	</div>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar.vue";
	import TabControl from "components/content/tabControl/TabControl.vue";

	import HomeSwiper from "./childComps/HomeSwiper.vue";
	import HomeRecommendView from "./childComps/HomeRecommendView.vue";
	import FeatureView from "./childComps/FeatureView.vue";


	import {getHomeMultidata} from "network/home";

	export default{
		name:'Home',
		components:{
			HomeSwiper,
			HomeRecommendView,
            FeatureView,
			NavBar,
			TabControl
		},
		data (){
			return{
				banners:[],
				recommends:[],
				goods:{
				    'pop':{ page:0,list:[]},
                    'news':{ page:0,list:[]},
                    'sell':{ page:0,list:[]},
                }
			}
		},
		created() {
			getHomeMultidata().then(res =>{
				// console.log(res);
				this.banners = res.data.banner.list;
				this.recommends = res.data.recommend.list;
			});
		}
	}
</script>

<style scoped>
	.home-nav{
		background-color: var(--color-tint);
		color: #f6f6f6;

		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 9;
	}
	.tab-control{
		position: sticky;
		top: 44px;
	}

</style>
