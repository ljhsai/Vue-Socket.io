import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VSocketIO from './lib/index'

createApp(App)
.use(new VSocketIO({
    debug: true,
    connection: 'http://127.0.0.1:8089',
})).mount('#app')
