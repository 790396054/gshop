/*
  入口 js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { Button } from 'mint-ui'

Vue.component(Button.name, Button)

/* eslint-disable */
new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用 vue-router
  store // 使用 vuex
})
