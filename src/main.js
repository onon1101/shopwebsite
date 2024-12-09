import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue3-cookies'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives
  })


const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(VueCookies)
app.mount('#app')
// createApp(App).use(router).mount('#app')
// createApp(App).use(vue3-cookies).mount('#app')
