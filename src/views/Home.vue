<template>
    <div class="index-layout">
        <Navbar/>
        <div id="Home" class="section-hero-layout">
            <p class="hero-catch-phrase">Unhappy with your website?</p>
            <p class="hero-head-title">We create beautiful and fast web services</p>
            <img class="hero-img" v-bind:src="require('@/assets/heroImage.jpg')" alt="Hero Photo">
            <p class="hero-head-title">Story, emotion and purpose</p>
            <p class="hero-introduction-text">We help transform your ideas into real world applications that will outperform
                your toughest competition and help you achieve your strategic goals in short
                period of time.</p>
            <Cta class="cta-container"/>
        </div>
    </div>
</template>

<script>
    import Navbar from "@/components/Navbar";
    import Cta from "@/components/Cta";
    export default {
        name: "Index",
        components: {Cta, Navbar}
    }
</script>

<style lang="scss" scoped>
    @import "../styles/breakpoints";
    @import "../styles/variables";

    .index-layout {
        min-height: 100vh;
        min-width: 250px;
        width: 100%;
        max-width: 1440px;

        padding: $padding-large;
        margin: auto;

        display: flex;
        flex-direction: column;

        font-family: $font-family-primary;

        @include breakpoint('xs') {
            padding: $padding-small;
        }
    }

    .section-hero-layout {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .hero-catch-phrase {
        font-weight: 500;
        font-size: $font-size-medium;
        color: $color-blue;
    }

    .hero-head-title {
        font-weight: 500;
        font-size: $font-size-xx-large;
        color: $color-gray-1;
        max-width: 530px;
        @include breakpoint('xs') {
            font-size: $font-size-large;
        }
    }

    .hero-head-title:nth-of-type(3) {
        max-width: 450px;
    }

    .hero-img {
        width: auto;
        min-width: 0;
        border-radius: 18px;
    }

    .hero-introduction-text {
        font-weight: 400;
        font-size: $font-size-medium;
        color: $color-gray-2;
        max-width: 370px;
    }

    .hero-catch-phrase, .hero-introduction-text {
        @include breakpoint('xs') {
            font-size: $font-size-very-small;
        }
    }

    p, .cta-container {
        margin-left: 10%;

        @include breakpoint('xs') {
            margin-left: 4%;
        }
    }


</style>