import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueSocketIO from './lib/index.js'

createApp(App)
.use(new VueSocketIO({
    debug: true,
    connection: 'http://127.0.0.1:8089',
})).mount('#app')
