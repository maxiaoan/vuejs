import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {request} from "./network/requests";
// import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios({
//   // url:'http://123.207.32.32:8000/home/multidata',
//     url:'http://httpbin.org/'
// }).then((res) =>{
//   console.log(res);
// })

// axios({
//   url:'http://123.207.32.32:8000/home/data?type=sell&page=1'
// }).then(res =>{
//   console.log(res);
// })

// axios.all([
//     axios({
//       url:'http://123.207.32.32:8000/home/multidata'
// }),
//     axios({
//       url:'http://123.207.32.32:8000/home/data',
//       params:{
//         type:'sell',
//         page:4
//   }
// })
// ]).then(res =>{
//   console.log(res);
// })
//=============================================
// axios.defaults.baseURL = "http://123.207.32.32:8000/api/v2"
// // axios.defaults.baseURL = "http://106.54.54.237:8000/api/v1"
// axios.defaults.timeout = 5000
// axios.all([
//   axios({
//     url:'home/multidata'
//   }),
//   axios({
//     url:'/home/data',
//     params:{
//       type:'sell',
//       page:5
//     }
//   })
// ]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))
//
// axios({
//   url:'/category'
// })

// const obj ={
//   name:'why',
//   age:28
// }
// const {name, age} = obj;
// const names = ['zhangsan','lisi','wangmazi']
// const [name1, name2 ,name3] = names
//
// const myAxiosInstance = axios.create({
//   baseURL:'http://123.207.32.32:8000/api/v2',
//   timeout:5000
// })
//
// myAxiosInstance({
//   url:'home/multidata'
// }).then(res =>{
//   console.log(res);
// })
//
// myAxiosInstance({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then( res =>{
//   console.log(res);
// })


// request({
//   baseConfig:{
//     url:'/home/multidata'
//   },
//   success:(res) =>{
//     console.log(res);
//   },
//   faliure:(err) =>{
//     console.log(err);
//   }
// })

// request({
//   url:'/home/multidata',
// },res => {
//   console.log(res);
// },err =>{
//   console.log(err);
// })

request({
  url: '/home/multidata',
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

