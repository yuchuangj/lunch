<template>
    <div class="middleimage">
        <div><img src="../images/6.jpg" id="pos" /></div>
        <div><img src="../images/7.jpg" id="pos" /></div>
        <div><img src="../images/8.jpg" id="pos" /></div>
        <span id="hsrz">红烧乳猪</span>
        <span id="mxf">毛血旺</span>
        <span id="zdj">猪肚鸡</span>
        <span id="toptext">三大经典</span>
    </div>
</template>
<script>
export default{
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
.middleimage{
    width:100%;
    height:207px;
    background-image:url(../images/background.png);
    margin:0px auto;
    text-align:center;
    position: relative;
    top:-812px;
}
/*这是三张图片下面的名称 */
.middleimage span{
    position:relative;
    top:120px;
    left:-1020px;
    font-weight:600;
    color:#fafafa;
    text-shadow:0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135 ;
    font-size:30px;
}
#mxf{
    position:relative;
    left:-700px;
}
#zdj{
    position:relative;
    left:-150px;
    top:80px;
}
#pos{
    position:relative;
    top:-100px;
    width:200px;
    height:200px;
    float:left;
    margin-left:220px;
    border-radius:10px;
    border:3px solid antiquewhite;
    /*改变元素的位置*/
    transform-origin: bottom center;
    animation: swing 6s .15s linear infinite;
}
/*这是三张图片上面的文字 */
#toptext{
    position:relative;
    top:-240px;
    left:-685px;
    text-shadow:0 0 4px white,    
                0 -5px 4px #ff3,   
                2px -10px 6px #fd3,   
                -2px -15px 11px #f80,   
                2px -25px 18px #f20;
    color:#000
}
#hid{
    display:none;
}
@keyframes swing {
  10% {
    transform: rotate(15deg);
  }
  20% {
    transform: rotate(-10deg);
  }
  30% {
    transform: rotate(5deg);
  }
  40% {
    transform: rotate(-5deg);
  }
  50%,100% {
    transform: rotate(0deg);
  }
}
</style>
