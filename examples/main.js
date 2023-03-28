import { createApp } from 'vue'
import App from './App.vue'
import './assets/fonts/font.scss'
import SimiUI from '../packages'

const Vue = createApp(App)
Vue.use(SimiUI)
Vue.mount('#app')
