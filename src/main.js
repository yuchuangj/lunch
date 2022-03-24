import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'jquery'

Vue.config.productionTip = false


new Vue({
  router,
  store,

  render: h => h(App),
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },
 
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    }
  }
}).$mount('#app')



