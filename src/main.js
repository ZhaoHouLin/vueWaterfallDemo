import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import vueWaterfallEasy from 'vue-waterfall-easy'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  // vueWaterfallEasy,
  render: h => h(App)
}).$mount('#app')
