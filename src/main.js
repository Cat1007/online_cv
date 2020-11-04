import Vue from 'vue'
import App from './App.vue'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
import vuetify from './plugins/vuetify'
import VChartsRedar from 'v-charts/lib/radar.common'

Vue.use(VueFullPage)
Vue.component(VChartsRedar.name,VChartsRedar)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
