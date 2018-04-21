import Vue from 'vue'
import App from './App.vue'
import bootstrap from 'bootstrap'
import popper from 'popper'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/animate.css'
import VueRouter from 'vue-router'
import vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(vuex)

new Vue({
  el: '#app',
  render: h => h(App)
})
