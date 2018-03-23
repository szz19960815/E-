<template>
    <div>
        <!-- banner -->
        <div class="L_banner">
            <div class="L_close" @click="$router.go(-1)">
                <img src="../../static/img/login_close.png" alt="">
            </div>
            <router-link to=""><img src="../../static/img/login_bg.jpg" alt=""></router-link>
        </div>
        <!-- form -->
        <div class="L_form">
            <input type="tel" placeholder="手机号">
            <input type="password" placeholder="密码">
            <button>登录</button>
            <p>
                <router-link to="/register">注册</router-link>
                <router-link to="">忘记密码</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:'Login',
    data(){
        return {

        }
    }
}
</script>

<style>
    .L_banner{width: 100%;position: relative;}
    .L_banner img{width: 100%;}
    .L_banner .L_close{position: fixed;top:0;right: 0;width: 0.8rem;height: 1rem;padding: 0.75rem 0.85rem;}
    .L_form{width: 70%;height:10rem;margin: 2rem auto;display: flex;justify-content: space-between;flex-direction: column;}
    .L_form input{border-radius: 0.3rem;width: 100%;height: 2rem;text-indent: 2rem;font-size: 0.6rem;border: 0.05rem solid gainsboro;}
    .L_form input:nth-of-type(1){background: #ebebeb url("../../static/img/tel.png") no-repeat 0.5rem center;background-size: 0.75rem 0.75rem;}
    .L_form input:nth-of-type(2){background: #ebebeb url("../../static/img/pwd.png") no-repeat 0.5rem center;background-size: 0.75rem 0.75rem;}
    .L_form button{background: #ffd801;color: #666;width: 100%;height: 2rem;border: none;border-radius: 0.3rem;font-size: 0.7rem;}
    .L_form p{display: flex;justify-content: space-between;font-size: 0.6rem;}
    .L_form p a{color: #666;}
</style>
