<template>
    <hero></hero>
    <about></about>
    <service></service>
    <class></class>
    <discount></discount>
    <price></price>
    <testimonial></testimonial>
    <team></team>
    <blog></blog>
</template>



<script>

import $ from 'jquery';
import 'animate.css'
import 'wowjs/css/libs/animate.css'

import 'owl.carousel/dist/assets/owl.carousel.css'
//import 'owl.carousel'
import wow from 'wowjs/dist/wow.js'

import Hero from '../../components/home/Hero.vue'
import About from '../../components/home/About.vue'
import Service from '../../components/home/Service.vue'
import Class from '../../components/home/Class.vue'
import Discount from '../../components/home/Discount.vue'
import Price from '../../components/home/Price.vue'
import Testimonial from '../../components/home/Testimonial.vue'
import Team from '../../components/home/Team.vue'
import Blog from '../../components/home/Blog.vue'


//Vue.prototype.$wow = wow
export default{
    data(){

    },
    components:{
        Hero,
        About,
        Service,
        Class,
        Discount,
        Price,
        Testimonial,
        Team,
        Blog
    }
}
</script>

<style></style>
