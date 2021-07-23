<template>
    <div class="navbar-layout">
        <router-link to="/" class="head-title">Edie</router-link>
        <div class="nav-layout">
            <router-link to="/#Home" class="router-link">Home</router-link>
            <router-link to="/#Services" class="router-link">Services</router-link>
            <router-link to="/#Works" class="router-link">Our Works</router-link>
            <router-link to="/#Clients" class="router-link">Clients</router-link>
            <router-link to="/#Contact" class="router-link">Contact</router-link>
        </div>

<!--        <div class="hamburger-menu-container">-->
            <img
                    class="hamburger-menu"
                    v-bind:src="require('@/assets/hamburger_menu.svg')"
                    alt="Hamburger Menu"
                    v-on:click.prevent="toggleMobileNav"
            >
<!--        </div>-->
    </div>
</template>

<script>
    import { store, mutations } from "@/store.js";

    export default {
        name: "Navbar",
        computed: {
            isMobileNavOpen() {
                return store.isMobileNavOpen;
            }
        },
        methods: {
            toggleMobileNav() {
                mutations.toggleMobileNav();
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/breakpoints";
    @import "../styles/variables";

    .navbar-layout {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        height: 100%;
        margin-bottom: 96px;

        @include breakpoint('xs') {
            margin-bottom: 46px;
        }
    }

    .head-title {
        font-family: $font-family-tertiary;
        font-weight: 800;
        font-size: $font-size-very-large;
        color: $color-gray-1;
        text-decoration: none;

        @include breakpoint('xs') {
            font-size: $font-size-large;
        }
    }

    .nav-layout {
        display: flex;
        max-width: 703px;
        width: 100%;
        align-items: center;
        justify-content: space-between;

        @include breakpoint('s') {
            display: none;
        }
    }

    .router-link {
        font-family: $font-family-primary;
        font-size: $font-size-large;
        font-weight: 500;
        color: $color-gray-1;
        text-decoration-line: none;
        transition: all 0.1s ease-in-out;
    }

    .router-link:hover {
        opacity: 85%;
    }

    .hamburger-menu-container {
        display: flex;
        justify-content: center;
        max-width: 25px;
        width: 100%;
    }

    .hamburger-menu {
        display: none;
        height: auto;
        max-width: 25px;
        width: 100%;

        @include breakpoint('s') {
            display: unset;
        }
    }
</style>