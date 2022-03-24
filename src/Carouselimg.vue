<template>
    <div>
        <v-footer></v-footer>
        <v-bottom></v-bottom>
    </div>
</template>
<script>
import footer from './views/footer.vue'
import bottom from './views/bottom.vue'

export default {
    components:{
       "v-footer":footer,
       "v-bottom":bottom
    }
}

</script>
