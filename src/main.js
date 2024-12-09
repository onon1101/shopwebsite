import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue3-cookies'

// Vuetify
import 'vuetify/styles' // 引入 Vuetify 樣式
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// 初始化 Vuetify
const vuetify = createVuetify({
  components,
  directives,
})

// 引入icon模組
import '@mdi/font/css/materialdesignicons.css';

const app = createApp(App)
app.use(router)
app.use(VueCookies)
app.use(vuetify) // 添加 Vuetify 支持

app.mount('#app')
// createApp(App).use(router).mount('#app')
// createApp(App).use(vue3-cookies).mount('#app')