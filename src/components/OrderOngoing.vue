<template>
    <div>
        这是进行中
    </div>
</template>

<script>
export default {
    name:"OrderOngoing",
    data(){
        return {
            have:false
        }
    },
    mounted:function(){
        if(this.have == true){
            this.$emit("Going-flag",false);
        }else{
            this.$emit("Going-flag",true);
        }
    }
}
</script>

<style>

</style>
