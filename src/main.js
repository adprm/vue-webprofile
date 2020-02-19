import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'

// font awesome import
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faFacebook, faGrav } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//add use your library
library.add(faUserSecret, faEnvelope, faGithub, faLinkedin, faFacebook, faGrav)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')