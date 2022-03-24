<template>
     <div class="middle" ref="content" >
            <h1 ref="name">今天中午吃什么？</h1>
            <span>解决人类的世纪难题！吃什么不用愁！</span>
            <br />
            <button id="start" @click="start">开始</button>
            <p><span>编辑临时菜单</span></p>
                <p><a href="#">看看别人的菜单</a>|<a href="#">创建自己的菜单</a></p>
                <input type="button" value="分享给好朋友" id="friend"  />
                <input type="button" value="请登陆后签到"  id="logo" />
                <input type="button" value="签到排行榜" id="sign" @click="qd" />
                 <v-footer v-show="false"></v-footer>
         </div>
          
</template>
<script>
import footer from "../views/footer.vue"
export default{
    data () {
        return {}
    },
    methods:{
        start(){
               this.$refs.name.textContent="中午吃乳猪";
        },
        qd(){
            alert("请先登陆，后签到")
            window.location.href="./login"
        }
    },
    components:{
        "v-footer":footer
    }
}

</script>
<style scoped>
.middle{
    width:100%;
    height: 600px;
    background-image: url("../images/background.png");
    margin:0px auto;
    text-align:center;
    position: relative;
    top: -772px;
}
h1{
    padding-top: 35px;
    font-size:33px;
}
/* 这是中间开始的按钮*/
.middle button{
    width:200px;
    height:65px;
    border-radius:40px;
    color:white;
    background-color:#f5b608;
    text-shadow:#9e9c9c 0 1px 0;
    font-weight:700;
    font-size:18px;
    border:none;
}
.middle button:hover{
    background-color:#fcc03e;
}
.middle p span{
  position:relative;
  top:5px;
  color:darkgray;
}
.middle p span:hover{
    color:darkgray;
    font-weight:700;
}
.middle p a{
    color:black;
    text-decoration:none;
}
.middle span{
    position:relative;
    top:-15px;
    font-size:17px;
}

/*这是下面三个按钮 */
#friend,#logo{
    color:white;
    background-color:#1a6bf4;
    border-radius:5px;
    border:none;
    width:110px;
    height:30px;
    margin-left: 5px;
}
#sign {
    width:110px;
    height:30px;
    border:1px solid #1a6bf4;
    color:#1a6bf4;
    margin-left: 5px;
}
#sign:hover{
    background-color:#1a6bf4;
    color:white;
}

</style>

