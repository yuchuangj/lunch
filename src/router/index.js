import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../login.vue'
import index from '../index.vue'
import Carousel from '../Carouselimg.vue'
import eatshopping from '../eatshopping.vue'
import Master from '../Master.vue'
import b1 from '../Blog.vue/u1.vue'
import b2 from '../Blog.vue/u2.vue'
import b3 from '../Blog.vue/u3.vue'
import b4 from '../Blog.vue/u4.vue'
import b5 from '../Blog.vue/u5.vue'
import b6 from '../Blog.vue/u6.vue'
import b7 from '../Blog.vue/u7.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
  },
  {
    path:'/login',
    component:login
  },
  {
    path:'/index',
    component:index
  },
  {
    path:'/Carouselimg',
    component:Carousel
  },
  {
    path:'/eatshopping',
    component:eatshopping
  },
  {
    path:'/Master',
    component:Master
  },
  {
    path:'/u1',
    component:b1
  },
  {
    path:'/u2',
    component:b2
  },
  {
    path:'/u3',
    component:b3
  },
  {
    path:'/u4',
    component:b4
  },
  {
    path:'/u5',
    component:b5
  },
  {
    path:'/u6',
    component:b6
  },
  {
    path:'/u7',
    component:b7
  }

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
