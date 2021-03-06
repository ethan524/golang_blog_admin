import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'font-awesome/css/font-awesome.css';


Vue.config.productionTip = false

new Vue({
  'el': '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
