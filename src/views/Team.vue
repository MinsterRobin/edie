<template>
    <div class="section-team-layout">

        <div class="team-text-layout">
            <p class="team-meet-phrase">Meet the team</p>
            <p class="team-catch-phrase">We are chilled and a laidback team</p>
            <p class="team-sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div class="team-members-grid-layout">
            <img class="team-member person3" v-bind:src="require('@/assets/person3.png')" alt="Team member 3">
            <img class="team-member person1" v-bind:src="require('@/assets/person1.png')" alt="Team member 1">
            <img class="team-member person2" v-bind:src="require('@/assets/person2.png')" alt="Team member 2">
        </div>

    </div>
</template>

<script>
    export default {
        name: "Team"
    }
</script>

<style lang="scss" scoped>
    @import "../styles/breakpoints";
    @import "../styles/variables";

    .section-team-layout {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
    }

    .team-meet-phrase {
        font: {
            family: $font-family-primary;
            size: $font-size-medium;
            weight: 500;
        }

        color: $color-red;
    }

    .team-catch-phrase {
        font: {
            family: $font-family-primary;
            size: $font-size-very-large;
            weight: 500;
        }

        color: $color-gray-1;
    }

    .team-sub-title {
        font: {
            family: $font-family-primary;
            size: $font-size-regular;
            weight: 400;
        }

        color: $color-gray-2;
    }

    .team-text-layout {
        max-width: 300px;
    }

    .team-members-grid-layout {
        max-width: max-content;
        max-height: max-content;
        width: auto;
        display: grid;
        grid-template: auto auto/ auto auto;
        grid-gap: 24px;
    }

    .team-member {
        border-radius: 24px;
        max-width: max-content;
        width: 100%;
        min-width: 0;
    }

    .person1 {
        width: 80%;
    }

    .person2 {
        width: 90%;
    }

    .person3 {
        grid-row: 1/3;
        align-self: center;
        width: 100%;
    }

    @include breakpoint('xs') {
        .section-team-layout {
            flex-direction: column;
        }

        .team-text-layout {
            align-self: flex-start;
        }

        .team-members-grid-layout {
            grid-gap: 9px;
        }
    }

</style>