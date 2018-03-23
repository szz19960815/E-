<template>
    <div>
        <!-- 头部 -->
        <mt-header title="会员注册" style="background:white;border-bottom: 1px solid #ebebeb;color:#333;font-size:0.8rem;height:2.25">
            <a @click="$router.go(-1)" slot="left">
                <mt-button icon="back"></mt-button>
            </a>
        </mt-header>
        <!-- 注册表单 -->
        <div class="R_form">
            <p>手机号码</p>
            <input type="tel" placeholder="输入手机号码" />
            <p>登录密码</p>
            <input type="text" placeholder="设置登录密码" />
            <p>请输入图片结果</p>
            <div class="img_verifivation">
                <input type="text" placeholder="请输入结果" /><a><img src="" alt=""></a>
            </div>
            <p>我们只想知道你是不是一个机器人</p>
            <div class="tel_verification">
                <input type="text" placeholder="请输入验证码" /><a>发送验证码</a>
            </div>
            <button>注册</button>
            <div class="xieyi"><router-link to="">用户协议</router-link></div>
        </div>
    </div>
</template>

<script>
import '../../static/css/reset.css'
export default {
    name: 'Register',
    data(){
        return {
            
        }
    }
}
</script>

<style>
    .R_form{width: 75%;height:18rem;margin: 1.25rem auto;display: flex;flex-direction: column;justify-content: space-between;}
    .R_form p{font-size: 0.7rem}
    .R_form input{font-size: 0.6rem;height: 1.6rem;border:0.05rem solid gainsboro;text-indent: 0.6rem;}
    .R_form>input{width: 100%;}
    .img_verifivation{width: 100%;display: flex;justify-content: space-between;}
    .img_verifivation a{display: inline-block;width: 5.5rem;height: 1.6rem;border: 0.05rem solid gainsboro;}
    .tel_verification{width: 100%;display: flex;justify-content: space-between;}
    .tel_verification a{display: inline-block;width: 5.5rem;height: 1.6rem;background: #ff0;text-align: center;line-height: 1.6rem;font-size: 0.6rem;color: black;}
    .R_form button{background: #ffd801;color: #666;width: 100%;height: 2rem;border: none;border-radius: 0.3rem;font-size: 0.7rem;}
    .xieyi{width: 100%;display: flex;justify-content: flex-end;}
    .xieyi>a{font-size: 0.6 rem;color:#6665fe;font-size: 0.6rem;}
</style>
