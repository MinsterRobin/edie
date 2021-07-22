<template>
    <div>
        <div class="index-layout">

            <Navbar/>

            <MobileMenu />

            <div class="content-layout">

                <Hero />

                <Services />

                <Works />

                <Team />

                <Clients />

            </div>
        </div>

        <Footer />
    </div>

</template>

<script>
    import Navbar from "@/components/Navbar";
    import Clients from "@/views/Clients";
    import Footer from "@/components/Footer";
    import Hero from "@/views/Hero";
    import Services from "@/views/Services";
    import Works from "@/views/Works";
    import Team from "@/views/Team";
    import MobileMenu from "@/components/MobileMenu";

    export default {
        name: "Index",
        components: {MobileMenu, Team, Works, Services, Hero, Footer, Clients, Navbar}
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

    .content-layout {
        flex: 1;

        display: flex;
        flex-direction: column;
        row-gap: 200px;

        @include breakpoint('xs') {
            row-gap: 110px;
        }
    }
</style>