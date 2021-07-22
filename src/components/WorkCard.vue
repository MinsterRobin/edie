<template>
    <div class="work-card-layout">
        <img class="work-image" v-bind:src="require('@/assets/' + picture)" alt="Work image">
        <p class="work-type">{{type}}</p>
        <p class="work-title">{{title}}</p>
    </div>
</template>

<script>
    export default {
        name: "WorkCard",
        props: {
            type: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            picture: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/breakpoints";
    @import "../styles/variables";

    .work-card-layout {
        display: flex;
        flex-direction: column;
        min-width: 250px;
        width: 100%;
    }

    .work-image {
        min-width: 250px;
        width: 100%;
        height: auto;
        border-radius: 12px;
    }

    .work-type {
        font-family: $font-family-primary;
        font-weight: 300;
        font-size: $font-size-small;
        color: $color-gray-3;
        margin-top: 1rem;

        @include breakpoint('xs') {
            font-size: $font-size-very-small;
            margin-top: 0.5rem;
        }
    }

    .work-title {
        font-family: $font-family-primary;
        font-weight: 500;
        font-size: $font-size-large;
        color: $color-gray-1;

        @include breakpoint('xs') {
            font-size: $font-size-medium;
        }
    }

</style>