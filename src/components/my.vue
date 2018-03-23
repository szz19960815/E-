<template>
	<div class="H_my">
		<div class="my_left">
			<div class="my_title">
				<router-link to="/login">
					<img src="../../static/img/my.png" alt="">
					<span>点击头像登录</span>
					<img src="../../static/img/rightArrow.png" alt="">
				</router-link>
			</div>
			<ul>
				<li><router-link to=""><span><img src="../../static/img/member.png" /></span><b>会员中心</b></router-link></li>
				<li><router-link to=""><span><img src="../../static/img/mealCard.png" /></span><b>积分商城</b></router-link></li>
				<li><router-link to=""><span><img src="../../static/img/coupon.png" /></span><b>我的票券</b></router-link></li>
				<li><router-link to=""><span><img src="../../static/img/service.png" /></span><b>服务中心</b></router-link></li>
				<li><router-link to=""><span><img src="../../static/img/about.png" /></span><b>关于E顿饭</b></router-link></li>
			</ul>
		</div>
		<div class="my_right" @click="noMy()"></div>
	</div>
</template>

<script>
	import '../../static/css/reset.css';
	export default {
		name:"my",
		data(){
			return {
				loginUrl:"/login"
			}
		},
		methods:{
			noMy(){
				let my = document.getElementsByClassName("H_my")[0];
				var _width = 100;
		  		var timer = setInterval(function(){
		  			if(_width > 0){
		  				_width -= 10;
		  				
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
	.H_my{width: 0%;height:100%;position: fixed;top: 0;left: 0;z-index: 10;overflow: hidden;background: rgba(0,0,0,0.7);display: flex;}
	.my_left{width: 75%;height:100%;background: white;}
	.my_right{width: 25%;height:100%;}
	.my_title{width: 100%;height: 5.35rem;border-bottom: 0.05rem solid #dedede;display: flex;align-items: center;justify-content: flex-end;}
	.my_title a{display: flex;width: 80%;height: 2.75rem;align-items: center;margin: 0 auto;}
	.my_title a img:nth-child(1){width: 2.25rem;height:2.25rem;margin-right: 0.75rem;}
	.my_title a span{font-size: 0.8rem;color:#333;flex: 1;}
	.my_title a img:nth-child(3){width: 0.52rem;height: 0.8rem;margin-left: 0;}
	.my_left ul{width: 100%;margin-top: 0.75rem;}
	.my_left ul li{width: 100%;height: 2.25rem;}
	.my_left ul li a{width: 80%;height: 100%;overflow: hidden;margin: 0 auto;display:flex;align-items: center;color: #333;}
	.my_left ul li a span{display: inline-block;width: 1rem;height: 1rem;margin-right: 0.6rem;}
	.my_left ul li a span img{width: 100%;height: 100%;}
	.my_left ul li a b{font-weight: normal;font-size: 0.75rem;}
</style>