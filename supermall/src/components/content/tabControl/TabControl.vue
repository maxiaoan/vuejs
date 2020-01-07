<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles"
             :class="{active:index === currentIndex}"
             @click="itemClick(index)"
             class="tab-control-item">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                currentIndex:0
            }
        },
        methods:{
            itemClick(index){
                this.currentIndex = index;
            }
        }
    }
</script>

<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        font-size: 14px;
        background-color: #ff8198;
    }
    .tab-control-item{
        flex: 1;
        height: 40px;
        line-height: 40px;

    }
    .active{
        color: var(--color-high-text);
    }
    .active span{
        border-bottom: 3px solid var(--color-tint);
    }
</style>