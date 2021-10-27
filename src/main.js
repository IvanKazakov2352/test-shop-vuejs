import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueMask from "v-mask";
import "./scss/index.scss"

Vue.config.productionTip = false
Vue.use(VueMask);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
