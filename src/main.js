import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'
import moment from 'moment'

Vue.config.productionTip = false
Vue.prototype.$moment = moment

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

