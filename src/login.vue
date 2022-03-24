<template>
<div>
    <div id="bjt">
        <div id="logincontent">
            <div id="loginleft">
                <span>欢迎来到我的登陆...</span>
                <br><br><br><br><br>
                <p>2016 年 6 月 27 日，微软发布</p>
                <p>ASP.NET Core 1.0。.NET Core 是微</p>
                <p>软开发的第一个完全开源的跨平台应</p>
                <p>用开发开发框架，可运行在</p>
                <p>Windows、Linux 和 macOS 等多个</p>
                <p>平台。一开始，.NET Core 的部分功</p>
                <p>能不如.NET 丰富，但是其开源和跨</p>
                <p>平台特性为其赢得了大量用户。</p>
                <div id="btn" @click="add"><a>👍</a><span>{{sum}}</span></div>
            </div>
            <div id="loginright">
                <div class="text">
                <!--href="javascript:;" 表示什么都不执行 去掉分号执行一次-->
                <!--点击设置msg的值  如果msg等于0，第一个a添加cur类名，如果msg等于1，第二个a添加cur类名，以此类推。
                添加了cur类名，a就会改变样式 @click,:class ,v-show这三个是vue常用的指令或添加事件的方式-->
                <span id="a1"><a href="javascript:;" @click="msg=0" :class="{'cur':msg===0}">账号密码登陆</a></span>
                <span id="a1"><a href="javascript:;" @click="msg=1" :class="{'cur':msg===1}">手机密码登陆</a></span>
                </div>
                <div v-show="msg===0" >
                <form >
                    <div id="textname" >
                    <input type="text" placeholder="手机号/邮箱/用户名" id="zh" v-model="username">
                    </div>
                    <div id="textname">
                    <input type="text" placeholder="密码"  id="zh" v-model="password">
                    </div>
                    <div id="textname">
                    <input type="text" placeholder="请重新输入密码" name="mm" id="zh" v-model="repassword">
                    </div>
                    <input type="submit" value="登录" id="login" @click="login" >
                     </form>
                </div>
               
                <div v-show="msg===1">
                <div id="select">
                   <select name="select" class="select">
                      <option value="+86" selected="selected">+86</option>
                      <option value="+852">+852</option>
                      <option value="+856">+856</option>
                      <option value="+81">+81</option>
                   </select>
                   <input type="text" placeholder="用户名" id="username">
                   <input type="text" placeholder="6位数字验证码" id="password"><a id="yzm" @click="yzm">获取验证码</a>
                   <input type="submit" value="登陆/注册" id="login2">
                </div>

                </div>
            </div>
        </div>
    </div>
    <!--这是底部-->
    <div class="bottom">
    <v-bottom></v-bottom>
    </div>
</div>
</template>
<script>
import bottom from "./views/bottom.vue"
export default{
    data(){
        return{
            loginForm: {
            username: '',
            password: '',
            repassword:''
            },
            sum:1120,
            msg:0
        }
    },
    methods:{
        //这是点赞系列
        add(){
            this.sum++
        },
        //这是登录的
        login(){
        if (this.username=='1930630' && this.password =='123123asd' && this.repassword=='123123asd') {
        alert('登陆成功');
        this.$router.push({
            path:'/',
            query:{
                name:'登陆成功',
                code:'欢迎来到1930630余创杰页面'
            }
        })
        }
        else if(this.loginForm.username==="" || this.loginForm.password===""){
            alert('你的账号为空')
        }
        else{
            alert("你的密码错误！")
        }  
      },
       //这是验证码的
       yzm(){
           for(var i=0;i<=6;i++){
           var yzm2= Math.ceil(Math.random()*10[i])
           }
            alert(yzm2);      
       }
    },
    
    components: {
        "v-bottom":bottom,
    }
}
</script>



<style scoped>
/*这是背景图 */
#bjt{
    background-image: url("./images/background.png");
    position: relative;
    top: -750px;
    width:1500px;
    height: 900px;
}
/*主内容 */  
#logincontent{
    width: 800px;
    height: 600px;
    margin: 0px auto;
    position: relative;
    top: 100px;
}
/*左边内容 */
#loginleft{
    width: 350px;
    height: 600px;
    text-align: center;
    float: left;
    background-color: black;
    opacity: 0.5;
}
#loginleft span{
    color: white;
    font-size: 32px;
    position: relative;
    top: 60px;
}
p{
    color: white;
}
a{
    font-size: 20px;
    position: relative;
    top: 2px;
    left: -2px;
    cursor: pointer;
    color: black;
    text-decoration: none;
}
/*点赞事件 */
#btn{
    width: 150px;
    height: 50px;
    border: solid 1px red;
    position: relative;
    left: 50px;
    top: 30px;
    border-radius: 50px;
    color: white;
}
#btn:hover{
    background-color:rgb(68, 68, 247);
    color: black;
}
#btn span{
    position: relative;
    font-size: 25px;
    top: 5px;
    left: 5px;
}

/*右边表单区域 */
#loginright{
    width: 450px;
    height: 600px;
    float: left;
    background-color: white;
    margin: 0 auto;
}

.text{
    text-align: center;
    font-size: 20px;
    padding-top: 70px;
}
.text span{
    margin-left: 20px;
}

.text span a:hover{
    width: 100%;
    border-bottom:2px solid red;
    left: 0;
}

/*这是三个文本域 */
#textname{
    position: relative;
    left: 105px;
    margin-top: 50px;
}
#zh{
    height: 26px;
    width: 250px;
    border-radius: 5px;  
}
#zh:focus{
    outline: none;
    border:solid 1px #127af1;
    box-shadow: 0px 0px 3px #127af1;
}

#login{
    height: 36px;
    width: 258px;
    position: relative;
    left: 105px;
    top: 60px;
    opacity: 0.5;
}

/*这是下拉框 */
#select{
    height: 35px;
    width: 80px;
    border: solid 0.5px #9c9c9c;
    border-radius: 5px;
    position: relative;
    left: 105px;
    top: 50px;
    text-align: center;
}
.select{
    position: relative;
    top: 6px;
    border:none;
    width: 60px;
    height: 20px;
    outline: none;
}

/*手机号和密码 */
#username{
    position: relative;
    height: 34px;
    width:155px;
    left: 100px;
    top: -22px;
    border:none;
    border: solid 0.5px #9c9c9c;
    border-radius: 5px;
}
#password{
    margin-top: 20px;
    height: 30px;
    width: 255px;
    border-radius: 5px;
    border: none;
    border: solid 0.5px #9c9c9c;
}
/*鼠标点击边框颜色该白 */
#password:focus,#username:focus{
    border: solid 1px #0d8dd8;
    outline: none;
    box-shadow: 0px 0px 3px  #0d8dd8;
}
/*这是验证码*/
#yzm{
    cursor: pointer;
    font-size: 15px;
    color: #0d8dd8;
    position: relative;
    left: 180px;
    top:-30px;
}
#yzm:hover{
    font-weight: 800;
}
#login2{
    height: 36px;
    width: 258px;
    position: relative;
    top: 25px;
    opacity: 0.5;

}
/*这是底部 */
.bottom{
    position: relative;
    top: 50px;
}


</style>
