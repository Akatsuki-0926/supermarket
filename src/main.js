import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper'

createApp(App).use(store).use(router).mount('#app')
