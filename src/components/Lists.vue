<template>
    <div id="lists">
        <mt-header style="height:2.25rem;background:-webkit-radial-gradient(right, #ffd801, #ffc601);font-size:0.7rem" title="请选择餐厅">
            <router-link :to="'/home/' + $route.params.currentStore" slot="left">
                <mt-button>
                    <img style="height:0.8rem" src="/static/img/return3.png" alt="">
                </mt-button>
            </router-link>
        </mt-header>
        <div id="searchBox">
            <div>
                <img src="/static/img/search.png" alt="">
                <span>输入目的地搜索附近的餐厅</span>
            </div>
        </div>
        <dl id="current" v-if="$route.params.currentStore">
            <dt>当前餐厅</dt>
            <dd>
                <li v-for="cur in current"><router-link class="H_detail" :to="'/home/' + $route.params.currentStore" style="display:inline-block;width:100%;height:100%;"><span><h2>{{$route.params.currentStore}}</h2></span><img src="../../static/img/rightArrow.png" alt="" srcset=""></router-link></li>
            </dd>
        </dl>
        <dl id="nearly">
            <dt>附近餐厅</dt>
            <dd>
                <li v-for="near,key in nearly" v-on:click="curr(key)"><router-link class="H_detail" :to="'/home/' + near" style="display:inline-block;width:100%;height:100%;"><a>进入详情</a><span><h2>{{near}}</h2></span><img src="../../static/img/rightArrow.png" alt="" srcset=""></router-link></li>
                <p>我是有底线的哦~</p>
            </dd>
        </dl>       
    </div>
</template>

<script>
import '../../static/css/reset.css'
export default {
    name : "Lists",
    data(){
        return{
            curstore:this.$route.params.currentStore,
            current:[this.curstore],
            nearly:["大冲旗舰店","科兴旗舰店","豪威旗舰店","生态园店","麻雀岭店","南头店",1,1,11,1,1,11,1,1,11,1]            
        }
    },
    methods:{
        curr:function(key){
            if(this.current === []){
                this.current.push(this.nearly[key]);
            }else{
                this.current = [];
                this.current.push(this.nearly[key]);
            }
            // console.log(this.current)
            this.$emit('store',this.nearly[key]);
        }
    },
    computed:{
        cur:function(newval,oldval){
            console.log(nerval,oldval)
        }
    }
}
</script>

<style>
    #lists{width: 100%;}
    #searchBox{width:100%;height:2.25rem;background: -webkit-radial-gradient(right, #ffd801, #ffc601);display: flex;flex-direction: column;justify-content: center;align-items: center;}
    #searchBox>div{width: 17rem;height: 1.3rem;background: white;border-radius:1rem;text-align: center;}
    #searchBox>div>span{font-size: 0.6rem;color: #666}
    #searchBox>div>img{width: 0.7rem}
    dl{width: 100%;color: #666;}
    dt{width: 100%;height: 1.5rem;background: #f0f0f0;font-size: 0.7rem;display: flex;align-items: center;text-indent: 0.9rem;}
    li{width: 90%;height: 2.8rem;margin: 0 auto;font-size: 0.6rem;display: flex;align-items: center;position: relative;}
    .H_detail{display: flex !important;align-items: center}
    #nearly>dd>li{border-bottom:0.025rem solid #999}
    li>a>a{font-size: 0.6rem;color: #f1b000;display: inline-block;width: 3rem;height: 1.6rem;display: flex;align-items: center;border-right: 0.025rem dashed #888;margin-right: 0.5rem}
    li>a h2{display: inline-block;font-weight: normal;font-size: 0.7rem;color:#666;}
    li>a>img{position: absolute;right: 0.6rem;width: 0.5rem;height: 0.75rem;}
    p{color:#999;font-size: 0.6rem;text-align: center;margin: 0.5rem 0;}
    #lists{overflow:auto;}
</style>
