<template>
    <div>
        <h2  class="title">{{message}}</h2>
        <button @click="btnclick">Click me</button>
        <h2>{{name}}</h2>
        <Cpn></Cpn>
    </div>
</template>

<script>
    import  Cpn from './Cpn'
    export default {
        name: "App",
        components:{
          Cpn
        },
        data(){
            return {
                message:"Hello ,Demo vue.esm.js",
                name:"coderwhy",
            }
        },
        methods:{
            btnclick(){
                console.log("Hello, click")
            }
        }
    }
</script>

<!--<style scoped>-->
<!--    .title {-->
<!--        color: red;-->
<!--    }-->

<!--</style>-->