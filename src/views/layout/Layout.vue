<template>
    <top-bar></top-bar>
    <nav-bar></nav-bar>

    <main>
        <RouterView></RouterView>
    </main>

    <footer></footer>

</template>

<script>
import NavBar from '../../components/header/NavBar.vue';
import TopBar from '../../components/header/TopBar.vue';
import Footer from '../../components/Footer.vue';
export default {
    data() {
        return {

        }
    },
    mounted() {
        //new this.$wow.WOW().init();
    },
    methods: {

    },
    components: {
        NavBar,
        TopBar,
        Footer
    },
    computed: {

    },
}
</script>

<style></style>
