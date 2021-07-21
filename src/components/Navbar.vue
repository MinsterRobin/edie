<template>
    <div class="navbar-layout">
        <p class="head-title">Edie</p>
        <div class="nav-layout">
            <router-link to="/#Home" class="router-link">Home</router-link>
            <router-link to="/#Services" class="router-link">Services</router-link>
            <router-link to="/#Works" class="router-link">Our Works</router-link>
            <router-link to="/#Clients" class="router-link">Clients</router-link>
            <router-link to="/#Contact" class="router-link">Contact</router-link>
        </div>
        <img class="hamburger-menu" v-bind:src="require('@/assets/hamburger_menu.svg')" alt="Hamburger Menu">
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style lang="scss" scoped>
    @import "../styles/breakpoints";
    @import "../styles/variables";

    .navbar-layout {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 96px;

        @include breakpoint('xs') {
            margin-bottom: 46px;
        }
    }

    .head-title {
        font-family: $font-family-tertiary;
        font-weight: 800;
        font-size: $font-size-very-large;

        @include breakpoint('xs') {
            font-size: $font-size-large;
        }
    }

    .nav-layout {
        display: flex;
        max-width: 703px;
        width: 100%;
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
    }

    .router-link-active {
        text-decoration-line: underline;
    }

    .hamburger-menu {
        display: none;
        height: 12px;

        @include breakpoint('s') {
            display: unset;
        }
    }
</style>