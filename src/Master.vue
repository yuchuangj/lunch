<template>
    <div>
        <div id="bjt">
            <div class="headertext">
                <span>美食达人推荐</span>
                <p>这里展示的是由我们为你推荐的资深小伙伴，你可以向TA提问，快速解答你的问题。</p>
                <button @click="talent">申请美食达人认证</button>
            </div>
            <div class="middle">
                <div class="Blog">
                    <router-link to="/u1" ><img src="./images/1bk.jpeg"></router-link><br>
                    <a href="/u1">余老师</a><br>
                    <span>站长</span><br>
                    <button @click="talent">向他提问</button>
                </div>
                <div class="Blog">
                   <router-link to="/u2" ><img src="./images/ztf.png"></router-link><br>
                    <a href="/u2">飞翔</a><br>
                    <span>朱大哥</span><br>
                    <button @click="talent">向他提问</button>
                </div>
                 <div class="Blog">
                     <router-link to="/u3" ><img src="./images/3bk.jpeg"></router-link><br> 
                    <a href="/u3">ARR</a><br>
                    <span>第一个注册的</span><br>
                     <button @click="talent">向他提问</button>
                </div>
                 <div class="Blog">
                    <router-link to="/u4" ><img src="./images/2bk.jpg"></router-link><br> 
                    <a href="/u4">美食作家</a><br>
                    <span>吃吃吃</span><br>
                    <button @click="talent">向他提问</button>
                </div>
                 <div class="Blog">
                     <router-link to="/u5" ><img src="./images/5bk.jpg"></router-link><br> 
                    <a href="/u5">白醋少女</a><br>
                    <span>选择困难大神</span><br>
                     <button @click="talent">向他提问</button>
                </div>
                 <div class="Blog">
                     <router-link to="/u6" ><img src="./images/6bk.png"></router-link><br> 
                    <a href="/u6">符号</a><br>
                    <span>小吃吃吃吃</span><br>
                    <button @click="talent">向他提问</button>
                </div>
                <div class="Blog">
                    <router-link to="/u7" ><img src="./images/ya.jpg"></router-link><br> 
                    <a href="/u7">自己</a><br>
                    <span>太好吃了</span><br>
                     <button @click="talent">向他提问</button>
                </div>
            </div>    
        </div>
        <div class="bottom">
        <v-bottom></v-bottom>
        </div>
    </div>
    
</template>
<script>

import bottom from "./views/bottom.vue"
export default {
   data(){
       return{}
   },
   methods:{
       //按钮控件提示信息
       talent(){
           alert("请先登录，再来申请美食达人认证");
           window.location.href="/login";
       }

   },
   components:{
       //把底部添加回来
       "v-bottom":bottom
   }
}
</script>
<style scoped>
/*这是背景图*/
#bjt{
    background-image: url("./images/background.png");
    position: relative;
    top: -750px;
    width:1500px;
    height: 820px;
    margin: 0 auto;
}
/*上面文字以及按钮 */
.headertext{
    position: relative;
    left: 195px;
    top: 30px;
}
.headertext span{
    font-size: 25px;
    
}
.headertext p{
    font-size: 20px;
    position: relative;
    top: -10px;
    opacity: 0.5;
}
.headertext button{
    width: 140px;
    height: 35px;
    border-radius: 5px;
    background-color:white ;
    color: #007bff;
    border:solid 1px #007bff;
    cursor: pointer;
    position: relative;
    left: 1003px;
    top: -90px;
}
.headertext button:hover{
    background-color:#007bff;
    color: white;
}
/*中间内容 */
.middle{
    position: relative;
    left: 125px;
    top: -20px;
    width:1200px;
    height: 800px;
}
/*博客区域 */
.Blog{
    height: 260px;
    width: 230px;
    background-color: white;
    text-align: center;
    float: left;
    margin-left: 70px;
    margin-top: 50px;
}
.Blog:hover{
    box-shadow: 0px 0px 15px #575555;
}
.Blog img{
    width: 90px;
    height: 90px;
    border-radius: 50px;
    margin-top: 20px;
}
.Blog a{
    text-decoration: none;
    cursor: pointer;
    color: black;
    position: relative;
    top: 10px;
}
.Blog a:hover{
    border-bottom:1px solid black ;
}
.Blog span{
    color: black;
    opacity: 0.7;
    position: relative;
    top: 20px;
}
.Blog button{
    position: relative;
    top: 35px;
    cursor: pointer;
    background-color:#007bff ;
    color: white;
    border-radius: 3px;
    border:none;
    border:1px solid #007bff;
    width: 80px;
    height: 30px;
}
/*这是底部 */
.bottom{
    position: relative;
    top: 50px;
}
</style>
