<template>
  	<div style="overflow: auto;display: flex;margin-top: 11.6rem;">
      <!-- 主页左侧列表页 -->
      <div class="left">
          <ul>
              <li :class="{current : AClass}" @click="current_A($event)"><a class="cur_A">秒杀</a><span></span></li>
              <li :class="{current : BClass}" @click="current_B($event)"><a class="cur_A">标准餐</a><span></span></li>
              <li :class="{current : CClass}" @click="current_C($event)"><a class="cur_A">瓦罐汤</a><span></span></li>
              <li :class="{current : DClass}" @click="current_D($event)"><a class="cur_A">烤鱼</a><span></span></li>
              <li :class="{current : EClass}" @click="current_E($event)"><a class="cur_A">饮料</a><span></span></li>
              <li :class="{current : FClass}" @click="current_F($event)"><a class="cur_A">沙拉</a><span></span></li>
          </ul>
      </div>
      <!-- 主页右侧列表页 -->
      <div class="right" style="overflow: auto;width: 100%;">
          	<ul>
              <li><router-link :to="'/cart/'+1"></router-link></li>
              <li><router-link :to="'/cart/'+2"></router-link></li>
              <li><router-link :to="'/cart/'+3"></router-link></li>
              <li><router-link :to="'/cart/'+4"></router-link></li>
              <li><router-link :to="'/cart/'+5"></router-link></li>
              <p style="font-size: 0.6rem;color: #999;margin: 0.3rem 0;text-align: center;margin-left: -25%;">亲，先看到这里吧~</p>
          	</ul>
      </div>
    </div>
</template>

<script>
import '../../static/css/reset.css';
export default {
  name : "HomeList",
  data(){
      return{
          msg:"这是首页列表",
          AClass:true,
          BClass:false,
          CClass:false,
          DClass:false,
          EClass:false,
          FClass:false
      }
  },
  methods:{
      current_A(event){
          this.AClass = true;this.BClass = false;this.CClass = false;this.DClass = false;this.EClass = false;this.FClass = false;
      },
       current_B(event){
          this.AClass = false;this.BClass = true;this.CClass = false;this.DClass = false;this.EClass = false;this.FClass = false;
      },
       current_C(event){
          this.AClass = false;this.BClass = false;this.CClass = true;this.DClass = false;this.EClass = false;this.FClass = false;
      },
       current_D(event){
          this.AClass = false;this.BClass = false;this.CClass = false;this.DClass = true;this.EClass = false;this.FClass = false;
      },
       current_E(event){
          this.AClass = false;this.BClass = false;this.CClass = false;this.DClass = false;this.EClass = true;this.FClass = false;
      },
       current_F(event){
          this.AClass = false;this.BClass = false;this.CClass = false;this.DClass = false;this.EClass = false;this.FClass = true;
      }
  }
}
</script>

<style>
    /* 左侧列表样式 */
    .left{width: 3.65rem;position: fixed;}
    .left ul{width: 100%;}
    .left ul li{width: 100%;height: 2.5rem;display: flex;align-items: center;}
    .left ul li>a{background: #f8f8f8;display:block;line-height:2.5rem;text-align:center;width: 3.15rem;height: 100%;font-size: 0.7rem;color:#666;}
    .current>span{border-left:0.25rem solid #ffd801;display: inline-block;width: 0;height: 0;border-top: 0.25rem solid #fff;border-right: 0.25rem solid #fff;border-bottom: 0.25rem solid #fff;}
    .current>a{background: #ffd801 !important;}
    .cur_A{border-bottom: 0.05rem solid #dedede;border-top: 0.05rem solid #dedede;}
    /* 右侧列表样式 */
    .right{float: right;}
    .right ul{width: 80%;height: 100%;float: right;}
    /*.right ul::after{content: "后面已经没有了哦~";font-size: 0.8rem;color: #999999;margin: 0 auto;}*/
    .right ul li{width: 100%;height: 6.3rem;border-bottom: 0.05rem solid #dedede;}
    .right ul li a{display: block;width: 100%;height: 100%;}
</style>
