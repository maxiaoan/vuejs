import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
	{
		path:'/home',
		component:Home,
		children:[
			{
				path: 'news',
				component:() => import('../views/HomeNews.vue')
			},
			{
				path: 'jokes',
				component:() => import('../views/HomeJokes.vue')
			}
		]
	},
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
	{
		path:'/profile',
		component:() => import('../views/Profile.vue')
	},
	{
		path:'/user/:userId',
		component:() => import('../views/User.vue')
	}
]

const router = new VueRouter({
  routes,
	mode:'history'
})

export default router
