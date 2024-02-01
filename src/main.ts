import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { localStoragePiniaPlugin } from './plugins/localStoragePiniaPlugin'

import HeaderComponent from './components/HeaderComponent.vue'
import MainComponent from './components/MainComponent.vue'

import App from './App.vue'
import router from './router'

const pinia = createPinia()

pinia.use(localStoragePiniaPlugin)

const app = createApp(App)

app.use(pinia)
app.use(router)

app.component('HeaderComponent', HeaderComponent)
app.component('MainComponent', MainComponent)

app.mount('#app')
