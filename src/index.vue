<template>
<div>
  <!--这是我分别写的4个内容都在Views李米娜-->
  <v-middle></v-middle>
  <v-middleimg></v-middleimg>
  <v-footer2></v-footer2>
  <v-bottom></v-bottom>
</div>
</template>
<script>
//这些都是导入
import middle from './views/middle.vue'
import middleimg from './views/middleimg.vue'
import footer2 from './views/footer2.vue'
import bottom from './views/bottom.vue'
export default {
  data () {
        return {
        }
    },
 components: {
   /* eslint-disable vue/no-unused-components */
   "v-middle":middle,
   "v-middleimg":middleimg,
   "v-footer2":footer2,
   "v-bottom":bottom,
},
methods:{
  
}

}

</script>
