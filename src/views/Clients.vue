<template>
    <div id="Clients" class="section-clients-layout">
        <p class="client-quote">“Fast and outstanding resutls. Edie understands their customer’s needs.They have a young and talented team.”</p>
        <div class="client-infos-layout">
            <img class="client-photo" v-bind:src="require('@/assets/person4.png')" alt="Client photo">
            <div class="client-infos-container">
                <p class="client-info-name">Carlos Tran</p>
                <p class="client-info-title">The Decorate Gatsby</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Clients"
    }
</script>

<style lang="scss" scoped>
    @import "../styles/breakpoints";
    @import "../styles/variables";

    .section-clients-layout {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .client-quote {
        font-family: $font-family-primary;
        font-size: $font-size-very-large;
        font-weight: 500;
        color: $color-gray-1;

        @include breakpoint('xs') {
            font-size: $font-size-large;
        }
    }

    .client-photo {
        border-radius: 12px;
        max-width: 82px;
        height: 82px;
        width: 100%;
    }

    .client-infos-layout {
        display: flex;
        gap: 30px;
    }

    .client-infos-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .client-info-name {
        font-family: $font-family-primary;
        font-size: $font-size-large;
        font-weight: 500;
        color: $color-gray-1;
    }

    .client-info-title {
        font-family: $font-family-primary;
        font-size: $font-size-medium;
        font-weight: 500;
        color: $color-gray-3;
    }

</style>