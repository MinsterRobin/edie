<template>
    <div class="service-card-layout">
        <div class="card-icon background-color-icon-blue" v-bind:class="color">
            <img class="hamburger-menu" v-bind:src="require('@/assets/' + icon + '.svg')" alt="Hamburger Menu">
        </div>
        <p class="card-title">UI/UX Design</p>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
        <button>Get started</button>
    </div>
</template>

<script>
    export default {
        name: "ServiceCard",
        props: {
            icon: {
                type: String,
                required: true
            },
            color: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/breakpoints";
    @import "../styles/variables";

    .service-card-layout {
        display: flex;
        flex-direction: column;
        max-width: 341px;
        border-radius: 24px;
        padding: 46px 34px;
        margin: auto;

        transition: all 200ms ease-in-out;

        &:hover {
            box-shadow: 0 10px 30px rgba(51, 51, 51, 0.1);
            transform: scale(1.05);
        }
    }

    .card-icon {
        width: 67px;
        height: 67px;
        border-radius: 16px;

        display: flex;
        justify-content: center;

        margin-bottom: 35px;
    }

    img {
        width: 50%;
    }

    .blue {
        background-color: $color-blue;
    }

    .green {
        background-color: $color-green;
    }

    .red {
        background-color: $color-red;
    }

    .card-title {
        font: {
            family: $font-family-primary;
            size: $font-size-large;
            weight: 700;
        }

        margin-bottom: 24px;
    }

    .card-text {
        font: {
            family: $font-family-primary;
            size: $font-size-regular;
            weight: 400;
        }

        margin-bottom: 30px;
    }

    button {
        font-family: $font-family-primary;
        font-size: $font-size-regular;
        font-weight: 500;

        padding: 9px 13px;
        width: max-content;
        border: none;
        border-radius: 12px;

        transition: all 200ms ease-in-out;

        &:hover {
            background-color: $color-blue;
            color: $color-background;
        }
    }

</style>