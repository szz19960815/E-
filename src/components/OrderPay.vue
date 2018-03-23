<template>
    <div>
        这是待付款
    </div>
</template>

<script>
export default {
    name:"OrderPay",
    data(){
        return{
            have:true
        }
    },
    mounted:function(){
        if(this.have == true){
            this.$emit("Pay-flag",false);
        }else{
            this.$emit("Pay-flag",true);
        }
    }
}
</script>

<style>

</style>
