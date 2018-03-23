<template>
  <div style="position:relative;display:felx;flex-direction: column;">
    <!-- 头部 -->
    <mt-header class="H_title" fixed='fixed'>
        <router-link to="" slot="left">
            <a class="my" @click="myinfo()"><img src="../../static/img/my.png" alt=""></a>
        </router-link>
        <router-link to="/order" slot="right">
            <a class="my"><img src="../../static/img/order.png" alt=""></a>
        </router-link>
    </mt-header>
    <!-- 头部按钮 -->
    <div class="H_titlebtn">
      <router-link :to="'//' + $route.params.store">{{$route.params.store}}<img src="../../static/img/rightArrow.png" alt="" srcset=""/></router-link>
    </div>
    <!-- 轮播图 -->
    <mt-swipe class="H_swipe" :auto="4000" style="width:100%;height:9.375rem">
      <mt-swipe-item><img src="http://image.51efan.me//storage/banner/201708/e3bd9ae73d92301fd24cf645ee8a89aa.jpg" alt="" srcset=""></mt-swipe-item>
      <mt-swipe-item><img src="http://image.51efan.me//storage/banner/201708/ec09d89c9e468b9a6d8d46d84d065b83.jpg" alt="" srcset=""></mt-swipe-item>
    </mt-swipe>
    <!-- 列表区 -->
    <home-list></home-list>
    <!--我的信息-->
    <my></my>
  </div>
</template>

<script>
import '../../static/css/reset.css'
import { Swipe, SwipeItem } from 'mint-ui';
import HomeList from './Home_list.vue';
import '../../static/js/HomeLIst';
import my from './my.vue'

export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  components : {  
    'home-list' : HomeList,
    'my' : my
  },
  methods : {
  	myinfo(){
  		var my = document.getElementsByClassName("H_my")[0];
  		var _width = 10;
  		var timer = setInterval(function(){
  			if(_width < 100){
  				_width += 10;
  				
  			}else{
  				clearInterval(timer)
  			}
  			my.style.width = _width + "%";
  		},1000/60);
  	}
  }
}
</script>

<style>
    .my{width: 1.5rem;height: 1.5rem;display: inline-block;}
    .my>img{width: 100%;height: 100%;}
    .H_title{display: flex;background: white;height:2.25rem;border-bottom:0.025rem solid #d0d0d0;color: black;}
    .H_titlebtn{position: fixed;top:0.5rem;left: 6.75rem;z-index: 2;}
    .H_titlebtn>a{border:0.025rem solid #d0d0d0;border-radius: 1rem;font-size: 0.6rem;padding: 0.25rem 0.75rem;color:#333;}
    .H_titlebtn>a>img{width:0.46rem;height: 0.7rem;margin-left: 0.2rem;margin-top:-0.1rem }
    .H_swipe{position: fixed;top:2.28rem;z-index: 2;}
    .H_swipe img{width: 100%;}
</style>