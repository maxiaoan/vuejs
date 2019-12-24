const math = require('./js/mathUtils.js')

// console.log("Hello Webpack")
// console.log(math.add(20,30))
// console.log(math.mul(20,30))
// console.log(math.div(10,20))


require('./css/normal.css')
require('./css/special.less')
// document.writeln('<div> Hello World</div>')

import Vue from 'vue'

// import  app from './vue/app'

import  App from  './vue/App'
new Vue({
    el:"#app",
    template:'<App></App>',
    data:{},
    methods: {},
    components:{
        app
    }
})