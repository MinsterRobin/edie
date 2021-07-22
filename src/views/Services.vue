<template>
    <div id="Services" class="section-services-layout">
        <p class="section-title">We offer high demand services</p>

        <div class="service-cards-layout">
            <ServiceCard icon="Pen" color="blue"/>
            <ServiceCard icon="Code" color="green"/>
            <ServiceCard icon="DNS" color="red"/>
        </div>
    </div>
</template>

<script>
    import ServiceCard from "@/components/ServiceCard";
    export default {
        name: "Services",
        components: {ServiceCard}
    }
</script>

<style lang="scss" scoped>
    @import "../styles/breakpoints";
    @import "../styles/variables";

    .section-title {
        font-family: $font-family-primary;
        font-size: $font-size-very-large;
        font-weight: 500;
        color: $color-gray-1;
        max-width: 380px;

        @include breakpoint('xs') {
            font-size: $font-size-large;
        }
    }

    .service-cards-layout {
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        row-gap: 70px;
    }

</style>