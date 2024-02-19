import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)

//New version of tanstack, change to new conf from cacheTime to gcTime
//app.use(VueQueryPlugin)
VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
               gcTime: 1000 * 120,
               refetchOnMount: 'always',
            }
        }
    }
})

app.use(router)


app.mount('#app')
