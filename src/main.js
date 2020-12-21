
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
import store from '@/store/store';

Vue.config.productionTip = false
Vue.config.performance = true
Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
