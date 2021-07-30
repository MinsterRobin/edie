<template>
    <div id="Works" class="section-work-layout">

        <p class="section-title">Good design means good business</p>

        <div class="work-cards-layout">
            <WorkCard class="work-card-container" picture="smarthome.jpg" type="Full stack application" title="Smart home dashboard" />
            <WorkCard class="work-card-container" picture="onboard.png" type="UX/UI design" title="Onboard application" />
            <WorkCard class="work-card-container" picture="booking.png" type="Mobile application" title="Booking system" />
            <WorkCard class="work-card-container" picture="juice-product.png" type="Front End applicati on" title="Juice product homepage" />
        </div>

        <div class="see-more">
            <p>see more</p>
            <img class="right-arrow" v-bind:src="require('@/assets/arrow.svg')" alt="Right arrow">
        </div>

    </div>
</template>

<script>
    import WorkCard from "@/components/WorkCard";
    export default {
        name: "Works",
        components: {WorkCard}
    }
</script>

<style lang="scss" scoped>
    @import "../styles/breakpoints";
    @import "../styles/variables";

    .section-work-layout {
        display: flex;
        flex-direction: column;
    }

    .section-title {
        font-family: $font-family-primary;
        font-size: $font-size-very-large;
        font-weight: 500;
        color: $color-gray-1;
        max-width: 380px;
    }

    .work-cards-layout {
        display: grid;
        grid-template: repeat(2, 1fr) / repeat(2, minmax(0px,550px));
        grid-gap: 0 20px;

        justify-content: space-between;
    }

    .work-card-container:nth-of-type(2n + 1) {
        padding-top: 150px;
    }

    .see-more {
        display: flex;
        align-items: center;
        column-gap: 12px;

        font-family: $font-family-primary;
        font-size: $font-size-large;
        font-weight: 500;
        color: $color-blue;
        align-self: flex-end;
        margin-top: 35px;
    }

    @include breakpoint('xs') {
        .section-title {
            font-size: $font-size-large;
        }

        .work-cards-layout {
            display: flex;
            max-width: 540px;
            margin: 45px auto auto;
            flex-direction: column;
            row-gap: 36px;
        }

        .work-card-container:nth-of-type(2n + 1) {
            padding-top: 0;
        }

        .see-more {
            font-size: $font-size-medium;
            align-self: flex-start;
        }
    }

</style>