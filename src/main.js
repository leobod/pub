import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import './styles/index.scss'
import router from './router'
import 'virtual:svg-icons-register'
import i18n from './lang/index'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import 'animate.css'
import 'normalize.css'

const app = createApp(App)
const store = createPinia()
store.use(piniaPluginPersist)
app.use(Antd)
app.use(router)
app.use(store)
app.use(i18n)
app.mount('#app')
