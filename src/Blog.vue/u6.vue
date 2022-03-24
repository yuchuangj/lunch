<template>
    <div id="bjt">
        <div id="head">
            <div class="head">
            <img src="../images/6bk.png" alt="博主">
            <span>符号<a>-小吃吃吃吃</a></span>
            <div class="Underline">
                <p>注册于一年前</p>
            </div>
            
            <div class="headerleft">
                <span>回答<br><a>10</a></span>
                <button>关注TA</button>
            </div>
            <div class="headerleft">
                <span>文章<br><a>13</a></span>
                <button id="follow">向TA提问</button>
            </div>
            <div class="headerleft">
                <span>关注<br><a>5</a></span>
                <button id="follow2">发私信</button>
            </div>
            <div class="new"><h6>最新动态</h6></div>
            </div>
            <!--这是中间内容-->
            <div id="middle">
                <img src="../images/6bk.png">
                <div class="middletext">
                <p>朱老师<span>采纳了最佳答案</span></p>
                <a>4月前</a>
                <h4>什么东西是你这辈子最讨厌的</h4>
                <div id="Underline"></div>
                </div>

                <img src="../images/6bk.png">
                <div class="middletext">
                <p>朱老师<span>采纳了最佳答案</span></p>
                <a>4月前</a>
                <h4>你看看你代码里有什么奇怪的东西</h4>
                <div id="Underline"></div>
                </div>

                <img src="../images/6bk.png">
                <div class="middletext">
                <p>朱老师<span>采纳了最佳答案</span></p>
                <a>4月前</a>
                <h4>这首歌完全唱出了你的做菜水平？有没有戳中你？？</h4>
                <div id="Underline"></div>
                </div>
            </div>
            <div id="middleright">
                <div>TA的主页</div>
                <div>TA的回答</div>
                <div>TA的提问</div>
                <div>TA的菜单</div>
                <div>TA的粉丝</div>
                <div>TA的关注</div>
            </div>
            <div id="middlebottom">
                <div id="pos">
                <div>会员统计</div>
                <div id="xhx"></div>
                <span>注册于  1年前</span><br>
                <span>个人主页被9861人游览</span>
                </div>
            </div>
        </div>
        <div id="bottom">
        <v-bottom></v-bottom>
        </div>
        
    </div> 
    
</template>
<script>
import bottom from "../views/bottom.vue"
export default {
    components: {
        "v-bottom":bottom
    }
 
}
</script>
<style scoped>
/*这是背景图*/
#bjt{
    background-image: url("../images/background.png");
    position: relative;
    top: -750px;
    width:1500px;
    height: 1020px;
    margin: 0 auto;
}
/*这是详细信息 */
#head{
    width: 1500px;
    height: 250px;
    background-color: white;
}
.head{
    position: relative;
    left: 190px;
    top: 48px;
}
.head img{
    width: 150px;
    height: 150px;
    border-radius: 75px;
}
.head span{
    position: relative;
    left: 80px;
    top: -120px;
    font-size: 20px;
}
.head span a{
    font-size: 16px;
    opacity: 0.6;
}
/*这是下划线 */
.Underline{
    border-bottom: 1px solid #cccccc;
    width: 500px;
    position: relative;
    top: -100px;
    left: 230px;
}
.Underline p{
    position: absolute;
    opacity: 0.6;
}
/*这是博客信息的右边内容 */
.headerleft{
    position: relative;
    left: 870px;
    top:-50px;
    float: left;
    margin-left: 17px;
}
.headerleft span{
    position: absolute;
    font-size: 20px;
    left: -100px;
    top: -100px;
    opacity: 0.5;
}
.headerleft span a{
    position: relative;
    left: 12px;
    font-weight: 700;
    color: black;
}
.headerleft button{
    position: relative;
    left: -141px;
    top:-20px;
    width: 120px;
    height: 35px;
    border-radius: 5px;
    color: white;
    background-color: #007bff;
    cursor: pointer;
}
/*按钮颜色 */
#follow{
    background-color:rgb(247, 112, 63);
}
#follow2{
    background-color: white;
    color:  #007bff;
    border:none;
    border:solid 1px #007bff;
}
/*中间 */
#middle{
    width: 700px;
    height: 600px;
    background-color: white;
    position: relative;
    left: 190px;
    top: 108px;
}
.new{
    width: 100px;
    height: 30px;
    background-color: white;
    position: relative;
    top: 60px;
}
.new h6{
    position: relative;
    left: 23px;
    top: -3px;
}
#middle img{
    height: 60px;
    width:60px;
    border-radius: 30px;
    position: relative;
    left: 20px;
    top: 30px;
}
.middletext{
    position: relative;
    left: 100px;
    top: -60px;
}
.middletext p{
    cursor: pointer;
}
.middletext p span{
    margin-left: 5px;
    opacity: 0.3;
    cursor: text;
}
.middletext a{
    opacity: 0.5;
    cursor: text;
    position: relative;
    top: -10px;
}
h4{
    position: relative;
    top: -25px;
    font-weight: 400;
    cursor: pointer;
}
#Underline{
    border-bottom: 1px solid #cccccc;
    width: 680px;
    position: relative;
    left: -90px;
    top: -20px;
}
/*这是右边 */
#middleright{
    height: 300px;
    width: 350px;
    background-color: white;
    position: relative;
    left:930px;
    top: -522px;
}
#middleright div{
    position: relative;
    top: 20px;
    left: 10px;
    height: 30px;
    width: 280px;
    padding-top: 13px;
    padding-left: 50px;
    cursor: pointer;
}
#middleright div:hover{
 background-color: #b6b2b2;
 border-radius: 5px;
}
/*这是右下 */
#middlebottom{
    height: 200px;
    width: 350px;
    background-color: white;
    position: relative;
    left:930px;
    top: -492px;
}
#middlebottom div{
    padding-top: 10px;
    font-size: 20px;
}
#middlebottom span{
    position: relative;
    top: 10px;
    opacity: 0.6;
}
#pos{
    position: relative;
    left: 10px;
}
#xhx{
    border-bottom: 1px solid #d4d4d4;
    width: 330px;
    padding-top: 20px;
}

/*这是底部 */
#bottom{
    position: relative;
    top: 1600px;
}
</style>
