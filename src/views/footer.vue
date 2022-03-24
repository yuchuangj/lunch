<template>
     <div id="bottom">
        <div id="Carousel">
            <h1 id="font">这是轮播美食图片</h1>
            <img :src="img[index]" class="img" @mousemove="move" @mouseleave="leave">
            <div id="leftarrow" @click="left" v-show="disabled">&lt;</div>
            <div id="rightarrow" @click="right" v-show="disabled2">&gt;</div>                                   
        </div>
    </div>
</template>
<script>
    var index=0;
    //这是我导图的图片
    import bn from '../images/6.jpg'
    import bn2 from '../images/7.jpg'
    import bn3 from '../images/8.jpg'
    import bn4 from '../images/9.jpg'
export default{
    data () {
    return {
        disabled:false,
        disabled2:false,
        index:0,
        img:[bn,bn2,bn3,bn4],
        timer:0      
    }
}, 
    components:{
    },
    methods:{
        //这是鼠标移进去的时候
        move(){
            if(index==0){
                this.disabled=true,
                this.disabled2=true;
            }
        },
        //这是鼠标离开的时候
        leave(){
            if(index==2){
                this.disabled=false,
                this.disabled2=true;
            }
        },
        //这是左箭头
        left(){
            if(this.index>0){
                this.index--
            }
            else{
               alert("这是第一张图片")
            }
        },
        //这是右箭头
        right(){
            if(this.index<3){
                this.index++
            }else{
                this.index=0;
            }
        },
    }     
}
</script>

<style scoped>
#bottom{
    width:100%;
    height:880px;
    background-image: url("../images/background.png");
    position: relative;
    top: -770px;
}
h1{
    text-align: center;
    padding-top: 10px;
    text-shadow: 0px 0px 20px #aae621;
}
#Carousel{
    height: 850px;
    background-image: url("../images/background.png");
    width: 800px;
    position: relative;
    top: 30px;
    margin: auto;
}
.img{
    margin: 0 auto;
    height: 650px;
    width: 800px;
}

#rightarrow,#leftarrow{
    font-size: 125px;
    position: relative;
    top: -440px;
    left: 560px;
    font-weight: 500;
    opacity: 0.3;
    box-sizing: border-box;
}
#rightarrow{
    position: relative;
    top:-605px;
    left: 820px;
}
#leftarrow{
    position: relative;
    left:-130px;
}
#rightarrow:hover,#leftarrow:hover{
    opacity: 0.8;
    font-weight: 800;
}
</style>