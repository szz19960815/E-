<template>
    <div>
        这是已完成
    </div>
</template>

<script>
export default {
    name:"OrderDone",
    data(){
        return{
            have:false
        }
    },
    mounted:function(){
        if(this.have == true){
            this.$emit("Done-flag",false);
        }else{
            this.$emit("Done-flag",true);
        }
    }
}
</script>
