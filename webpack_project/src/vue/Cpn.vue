<template>
    <h2> I am h2 Title of Cpn component </h2>
    <p>I am  content</p>
    <h2> {{name}}</h2>
</template>

<script>
    export default {
        name: "Cpn",
        data(){
            return{
                name:"Cpn component name"
            }
        }
    }
</script>

<style scoped>

</style>