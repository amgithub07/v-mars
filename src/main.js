import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@flaticon/flaticon-uicons/css/all/all.css'


import "./assets/style/all.css"
import "./assets/js/main.js"


//切換頁面回到頂部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

// 全域註冊
const app = createApp(App);
app.use(router);
app.mount('#app')
