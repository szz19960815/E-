<template>
    <div>
        这是全部
    </div>
</template>

<script>
import '../../static/css/reset.css'
export default {
    name : "OrderAll",
    data(){
        return{
            have:true
        }
    },
    mounted:function(){
        if(this.have == true){
            this.$emit("All-flag",false);
        }else{
            this.$emit("All-flag",true);
        }
    }
}
</script>

<style>

</style>
