<template>
    <div id="Content">
        <div id="head">                                       
            <span class="eat">中午吃什么?</span>
            <ul>
                <li><router-link to="/" tag="a" >导航初始页</router-link></li>
                <li><router-link to="/index" tag="a" >首页</router-link></li>
                <li><router-link to="/Carouselimg" tag="a">美食轮播</router-link></li>
                <li><router-link to="/Master" tag="a">美食达人</router-link></li>
                <li><router-link to="/login" tag="a" >登陆</router-link></li>
            </ul>        
            <input type="text" name="tx" id="tx"/> 
        </div>        
    </div>
</template>
<script>

document.getElementById('Content')
export default{
    name:'helloworld',
    data () {
        return {
            
        }
    },
    components:{},
    methods: {
        
      
}

   
}
</script>

<style scoped>
#head{
    width:100%;
    height:50px;
    background-color:#333;
}
.eat{
    font-size:20px;
    color:white;
    font-weight:800;
    position:relative;
    top:10px;
    left:13%;
}
#head ul{
    list-style-type:none;
    position:relative;
    top:-30px;
    left:19%;
}
#head ul li{
    float:left;
    margin-left:70px;

}
#head ul li a{
    text-decoration:none;
    color:darkgray;
}
#head ul li a:hover{
    color:#00ffff
}
/*这是搜索的内容*/
#tx{
    position:relative;
    top:-32px;
    left:380px;
    border:none;
}
#tx,#search{
    position:relative;
    top:-32px;
    left:380px;
    border:none;
}
#search{
    position:relative;
    top:-27px;
    left:410px;
    
}
#tx{
    background-image:url(../images/search.gif);
    background-repeat:no-repeat;
    background-position-y:3px;
    background-position-x:10px;
    width:250px;
    height:25px;
    border-radius:5px;
    text-align:center; 
    position:relative;
    top:-31px;
    left:400px; 
}
</style>
