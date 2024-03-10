import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel';


//window.$ = $;
//import animated from "animate.css"
//import Isotope from 'isotope-layout'
//import WOW from 'wow.js'




import "./assets/style/all.css"

//切換頁面回到頂部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

// 全域註冊
const app = createApp(App);
app.use(router);
app.mount('#app')
