import Vue, { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/fontAwesome'
import Hotjar from 'vue-hotjar'

Vue.use(Hotjar, {
  id: 'https://604a39018b1085142ceef115--elastic-leavitt-9379ad.netlify.app/',
  isProduction: true
})
createApp(App).use(store).use(router).mount('#app')
