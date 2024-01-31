import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import HeaderComponent from './components/HeaderComponent.vue'
import MainComponent from './components/MainComponent.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('HeaderComponent', HeaderComponent)
app.component('MainComponent', MainComponent)

app.mount('#app')
