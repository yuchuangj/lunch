<template>
    <div id="bottom">
       <span>还是不知道吃什么？可以问问别人吃什么</span>
                <div id="Carousel">                     
                    <div id="img1"><img src="../images/1.jpg" />
                     <p><a>合成大欧</a></p>
                     <p>合成大西瓜猛男版小游戏</p>
                     <button >马上去玩</button>
                    </div>
                     <div id="kongbai"></div>
                    <div id="img1"><img src="../images/2.jpg" />
                     <p><a>2048小游戏</a></p>
                     <p>2048小游戏</p>
                     <button >马上去玩</button>
                    </div>
                    <div id="kongbai"></div>
                    
                    <div id="img1"><img src="../images/3.jpg" />
                     <p><a href="#">白裤少女</a></p>
                     <p>选择困难大神</p>
                     <button id="bb">向Ta提问</button>
                    </div>
                    <div id="kongbai"></div>  
                    
                    <div id="img1"><img src="../images/4.jpg" />
                     <p><a href="#">美食作家</a></p>
                     <p>一个大吃货</p>
                     <button id="bb">向Ta提问</button>
                    </div>
                    <div id="kongbai"></div>     
                
                    <div id="img1"><img src="../images/5.jpg" />
                     <p><a href="#">灰色吉斯坦</a></p>
                     <p>养竹鼠的？</p>
                     <button id="bb">向Ta提问</button>
                    </div>   
                    <div id="kongbai"></div>                                                     
                </div>
    </div>
</template>
<style scoped>
#bottom{
    width:1500px;
    height:350px;
    position: relative;
    top: -825px;
    margin:auto;
    background-color:#f4f6f8
}
#bottom span{
   position:relative;
   top:10px;
   left:200px;
   font-weight:400;
   font-size:20px;
}
/*这是下面图片轮播*/
#Carousel{
    width:100%;
    height:300px;
    text-align:center;
}
#img1{
    width:190px;
    height:240px;
    background-color:white;
    position:relative;
    margin-left:50px;
    left: 150px;
    top:45px;
    float:left;
}
#img1 img{
    width:100px;
    height:100px;
    border-radius:50px;
    padding-top:10px;
}
#img1 p{
    color:darkgray;
}
#img1 p a{
    text-decoration:none;
    color:black;
}
#img1 p a:hover{
    color:red;  
}
#img1 button{
    background-color:#1a6bf4;
    color:white;
    border-radius:5px;
    border:none;
    width:120px;
    height:30px;
}
</style>