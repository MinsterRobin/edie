<template>
    <div id="Contact" class="footer-background">
        <div class="footer-layout">
            <div class="footer-sub-layout">

                <div class="footer-nav">
                    <router-link to="/#Home" class="router-link">Home</router-link>
                    <router-link to="/#Services" class="router-link">Services</router-link>
                    <router-link to="/#Works" class="router-link">Our Works</router-link>
                    <router-link to="/#Clients" class="router-link">Clients</router-link>
                    <router-link to="/#Contact" class="router-link">Contact</router-link>
                </div>

                <div class="socials-layout">
                    <p class="title">Edie</p>
                    <div class="socials-container">
                        <img class="social" v-bind:src="require('@/assets/instagram.svg')" alt="Social Instagram">
                        <img class="social" v-bind:src="require('@/assets/linkedin.svg')" alt="Social Linkedin">
                        <img class="social" v-bind:src="require('@/assets/twitter.svg')" alt="Social Twitter">
                    </div>
                </div>

                <Cta class="cta"/>
            </div>

            <p class="credits">created by <b><a href="https://robin-minster.fr">Minster Robin</a></b> - devChallenges.io</p>

        </div>
    </div>
</template>

<script>
    import Cta from "@/components/Cta";
    export default {
        name: "Footer",
        components: {Cta}
    }
</script>

<style lang="scss" scoped>
    @import "../styles/breakpoints";
    @import "../styles/variables";

    .footer-background {
        width: 100%;
        background-color: $color-dark-purple;
        margin-top: 200px;
    }

    .footer-layout {
        width: 100%;
        max-width: 1440px;
        margin: auto;

        display: flex;
        flex-direction: column;
        gap: 100px;
        padding: 50px $padding-large 20px $padding-large;

        @include breakpoint('xs') {
            padding: $padding-small;
        }
    }

    .footer-sub-layout {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 64px;
    }

    .footer-nav {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .socials-layout {
        width: max-content;
        height: max-content;
        display: flex;
        flex-direction: column;
    }

    .social {
        margin-right: 10px;
        width: 24px;
        cursor: pointer;
    }

    .title {
        font-family: $font-family-tertiary;
        font-size: $font-size-very-large;
        font-weight: 800;
        color: $color-background;
    }

    .router-link {
        font-family: $font-family-primary;
        font-size: $font-size-medium;
        font-weight: 400;
        color: $color-background;
        text-decoration-line: none;
        max-width: max-content;
    }

    .credits {
        text-align: center;
        font-family: $font-family-secondary;
        font-size: $font-size-small;
        font-weight: 500;
        color: $color-gray-5;
    }

</style>