<template>
  <div id="app" style="height:100%;box-sizing:border-box;">
    <router-view @store = "current_store"></router-view>
  </div>
</template>

<script>
import '../static/css/reset.css'
export default {
  name: 'App',
  data(){
    return {
      store:""
    }
  },
  methods:{
    current_store(store){
      this.store = store;
    }
  }
}
</script>

<style>
</style>
