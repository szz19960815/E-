<template>
    <div>
        <!-- 头部 -->
        <mt-header :class="{head:true}">
            <router-link to="/" slot="left">
                <mt-button icon="back">重新选餐</mt-button>
            </router-link>
        </mt-header>
        <!-- 选购的商品 -->
        <div  class="cart_list">
            <ul>
                <li v-for="data,key in cart"><a>{{$route.params.goodsID}}</a><b>￥{{data}}</b><span @click="reduce()"><img src="../../static/img/reduce.png" alt=""></span><i>{{amounts}}</i><span @click="add()"><img src="../../static/img/add.png" alt=""></span></li>
            </ul>
        </div>
        <div class="partition"></div>
        这是购物车{{$route.params.goodsID}}
    </div>
</template>

<script>
import '../../static/css/reset.css'

export default {
    name : "Cart",
    data(){
        return{
            cart:[1,2,34,54,6],
            amounts:1
        }
    },
    methods:{
        reduce(){
            if(this.amounts <= 1){
                return ;
            }else{
                this.amounts -= 1;
            }
        },
        add(){
            this.amounts += 1;
        }
    }
}
</script>

<style>
    .head{width: 100%;height: 2.2rem;background: white;color: #333;border-bottom: 0.05rem solid #d0d0d0;display: flex;align-items: center;}
    .cart_list ul{width: 100%;display: flex;flex-direction: column;}
    .cart_list ul li{width: 100%;height: 3rem;display: flex;justify-content: center;align-items: center;font-size: 0.75rem;}
    .cart_list ul li a{width: 55%;display: block;height: 100%;display: flex;align-items: center;}
    .cart_list ul li span{display: inline-block;width: 1rem;height: 1rem;}
    .cart_list ul li span img{width: 100%;height: 100%;}
    .cart_list ul li b{font-weight: normal;width: 2.5rem;}
    .cart_list ul li i{text-decoration: none;width: 1rem;text-align: center;}
    .partition{width: 100%;height: 0.77rem;background: #f0f0f0;}
</style>

