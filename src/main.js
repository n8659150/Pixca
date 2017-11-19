// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {VueMasonryPlugin} from 'vue-masonry';
import App from './App'

Vue.config.productionTip = false
Vue.use(VueMasonryPlugin)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
