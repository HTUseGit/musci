import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import 'common/stylus/index.styl'
/* eslint-disable */
// 移动端的调试，相当于调出控制台
// import Vconsole from 'vconsole'
// let vConsole = new Vconsole()
// export default vConsole
Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})
// 解决移动端点击会有300ms延迟的问题
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
