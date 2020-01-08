<template>
  <div id="home">
    <nav-bar class="home-nav"> <div slot="center">Cart</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view></feature-view>
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '畅销']"
      @tabClick='tabClick' 
    ></tab-control>
    <goods-list :goods="showGoods"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue" 

import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomeRecommendView from "./childComps/HomeRecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";
import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType:'pop'
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods('pop'); 
		this.getHomeGoods('sell');
		this.getHomeGoods('new');
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods: {
    //网络请求的方法定义
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
		getHomeGoods(type) {
					const page = this.goods[type].page + 1;
			    getHomeGoods(type, page).then(res => {
      				// console.log(res);
							this.goods[type].list.push(...res.data.list)
							this.goods[type].page += 1
    });
		},
    // 事件监听方法定义
    tabClick(index) {
      switch (index) {
        case 0:
        this.currentType = 'pop';
        break;
        case 1:
        this.currentType = 'new';
        break
        case 2:
        this.currentType = 'sell';
      }
    }
    
  }
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
