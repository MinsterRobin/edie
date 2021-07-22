<template>
    <div class="mobile-menu-container">
        <div class="mobile-menu-backdrop" v-if="isMobileNavOpen" v-on:click="closeMobileNav"></div>
        <transition name="slide">
            <div class="mobile-menu-layout" v-if="isMobileNavOpen">
                <img
                    class="close-button"
                    v-bind:src="require('@/assets/close.svg')"
                    alt="Close Mobile Menu"
                    v-on:click.prevent="closeMobileNav"
                >
                <router-link to="/#Home" class="router-link">Home</router-link>
                <router-link to="/#Services" class="router-link">Services</router-link>
                <router-link to="/#Works" class="router-link">Our Works</router-link>
                <router-link to="/#Clients" class="router-link">Clients</router-link>
                <router-link to="/#Contact" class="router-link">Contact</router-link>
            </div>
        </transition>
    </div>
</template>

<script>
    import { store, mutations } from '@/store.js'

    export default {
        name: "MobileMenu",
        computed: {
            isMobileNavOpen() {
                return store.isMobileNavOpen;
            }
        },
        methods: {
            closeMobileNav() {
                mutations.toggleMobileNav();
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/breakpoints";
    @import "../styles/variables";

    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.2s ease;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateX(100%);
        transition: all 150ms ease-in 0s
    }

    .mobile-menu-container {
        display: none;

        @include breakpoint('s') {
            display: unset;
        }
    }

    .mobile-menu-backdrop {
        background-color: rgba(19, 15, 64, .4);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        cursor: pointer;
    }

    .mobile-menu-layout {
        position: fixed;
        right: 0;
        top: 0;
        max-width: max-content;
        width: 100%;
        min-width: 300px;
        height: 100vh;
        background-color: $color-dark-purple;
        overflow-y: auto;
        z-index: 999;

        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: $padding-large $padding-large $padding-large 80px;
        gap: 1.5vh;

        @include breakpoint('xs') {
            padding: $padding-small $padding-small $padding-small 60px;
        }
    }

    .close-button {
        position: absolute;
        right: $padding-large;
        top: $padding-large + 12px;
        width: 22px;

        @include breakpoint('xs') {
            right: $padding-small;
            top: $padding-small + 4px;
        }
    }

    .router-link {
        font-family: $font-family-primary;
        font-size: $font-size-very-large;
        font-weight: 300;
        color: $color-background;
        text-decoration: none;
        text-align: left;

        min-width: max-content;
        margin-right: 45px;

        @include breakpoint('xs') {
            font-size: $font-size-large;
        }
    }

</style>