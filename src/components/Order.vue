<template>
    <div style="display:flex;flex-direction: column;height:100%;">
         <!-- 头部 -->
        <mt-header title="订单" style="background:white;border-bottom: 1px solid #ebebeb;color:#333;font-size:0.8rem;height:2.25rem">
            <a @click="$router.go(-1)" slot="left">
                <mt-button icon="back"></mt-button>
            </a>
        </mt-header>
        <!-- container -->
        <!-- order nav -->
        <nav>
            <ul>
                <li @click="showAll()"><a :class="{active:all}">全部</a></li>
                <li @click="showOngoing()"><a :class="{active:ongoing}">进行中</a></li>
                <li @click="showPay()"><a :class="{active:pay}">待付款</a></li>
                <li @click="showDone()"><a :class="{active:done}">已完成</a></li>
            </ul>
        </nav>
        <!-- order list -->
        <mt-tab-container v-model="active" swipeable style="flex:1;overflow:auto;position:relative;">
            <mt-tab-container-item id="all">
                <!-- <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell> -->
                <div class="nothing" v-if="all_nothing">
                    <img src="../../static/img/wunai.png" alt="">
                    <span>空空如也~</span>
                    <p>不要让我独守空库嘛~</p>
                </div>
                <OrderAll @All-flag="allinfo"></OrderAll>  
            </mt-tab-container-item>
            <mt-tab-container-item id="ongoing">
                <!-- <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell> -->
                <div class="nothing" v-if="ongoing_nothing">
                    <img src="../../static/img/wunai.png" alt="">
                    <span>空空如也~</span>
                    <p>不要让我独守空库嘛~</p>
                </div>
                <OrderOngoing @Going-flag="goinginfo"></OrderOngoing>
            </mt-tab-container-item>
            <mt-tab-container-item id="pay">
                <!-- <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell> -->
                <div class="nothing" v-if="pay_nothing">
                    <img src="../../static/img/wunai.png" alt="">
                    <span>空空如也~</span>
                    <p>不要让我独守空库嘛~</p>
                </div>
                <OrderPay @Pay-flag="payinfo"></OrderPay>
            </mt-tab-container-item>
            <mt-tab-container-item id="done">
                <!-- <mt-cell v-for="n in 4" title="tab-container 4"></mt-cell> -->
                <div class="nothing" v-if="done_nothing">
                    <img src="../../static/img/wunai.png" alt="">
                    <span>空空如也~</span>
                    <p>不要让我独守空库嘛~</p>
                </div>
                <OrderDone @Done-flag="doneinfo"></OrderDone>
            </mt-tab-container-item>
            
        </mt-tab-container>
    </div>
</template>

<script>
    import OrderAll from './OrderAll'
    import OrderOngoing from './OrderOngoing'
    import OrderPay from './OrderPay'
    import OrderDone from './OrderDone'
    import { TabContainer, TabContainerItem } from 'mint-ui';
    import '../../static/css/reset.css'
    export default {
        name : 'Order',
        data(){
            return {
                active:"ongoing",
                all:false,
                ongoing:true,
                pay:false,
                done:false,
                all_nothing:false,
                ongoing_nothing:false,
                pay_nothing:false,
                done_nothing:false
            }
        },
        methods:{
            // 确定切换到哪个模块
            showAll(){
                this.active = "all";
                this.all = true;this.ongoing = false;this.pay = false;this.done = false;
            },
            showOngoing(){
                this.active = "ongoing";
                this.all = false;this.ongoing = true;this.pay = false;this.done = false;
            },
            showPay(){
                this.active = "pay";
                this.all = false;this.ongoing = false;this.pay = true;this.done = false;
            },
            showDone(){
                this.active = "done";
                this.all = false;this.ongoing = false;this.pay = false;this.done = true;
            },
            // 根据子组件传过来的值判断该模块下是否有内容
            allinfo(val){
                this.all_nothing = val;
            },
            goinginfo(val){
                this.ongoing_nothing = val;
            },
            payinfo(val){
                this.pay_nothing = val;
            },
            doneinfo(val){
                this.done_nothing = val;
            }
        },
        components:{
            "OrderAll" : OrderAll,
            "OrderOngoing" : OrderOngoing,
            "OrderPay" : OrderPay,
            "OrderDone" : OrderDone
        }
    }
</script>

<style>
    nav{height: 2.05rem;border-bottom: 0.025rem solid #ebebeb;}
    nav ul{width: 100%;display: flex;height: 2rem;}
    nav ul li{flex: 1;display: flex;align-items: center;justify-content: center;}
    nav ul li a{font-size: 0.6rem;color: #999;display: flex;height: 100%;align-items: center;border-bottom:0.1rem solid white;}
    .active{border-bottom:0.1rem solid #f9bb00;color: #f9bb00;}
    .nothing{width: 100%;height: 100%;position: absolute;background: #ebebeb;text-align: center;}
    .nothing img{width: 7.5rem; height: 7.5rem;margin-top: 5.6rem;}
    .nothing span{font-size: 0.5rem;color: #999;display: block;}
    .nothing p{font-size: 0.7rem;color: #af9696}
</style>
