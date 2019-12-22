import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
new Vue({
  el:'#app',
  router,

  render: function(createElement){
    // return createElement('h2',
    // {class: 'box'},
    // ["Hello World"])
    return createElement(App)
  }
})