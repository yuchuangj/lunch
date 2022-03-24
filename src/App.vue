<template>
  <div id="Content">
  <v-nav></v-nav>
  <!--这是加载里面路由内容-->
  <router-view></router-view>
  <div>
    <h1>{{this.name}}</h1><br>
    <h1>{{this.code}}</h1>
  </div>
  </div>
</template>

<script>
//这是导入导航
import nav from './views/nav.vue'
export default {
  data(){
    return{

      }
  },
  //一般可以在created函数中调用ajax获取页面初始化所需的数据。
  created(){
    const {name,code}=this.$route.query
    this.name=name
    this.code=code
  },
 components: {
   /* eslint-disable vue/no-unused-components */
   "v-nav":nav,
},

}
</script>
<style scoped>
#Content{
    width:1500px;
    height:800px;
    margin:0px auto;
}
h1{
  text-align: center;
  position: relative;
  top: -500px;
  display: none;
}
</style>

