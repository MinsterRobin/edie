<template>
    <form class="cta-layout">
        <label>Want us to contact you?</label>
        <div class="cta-inputs">
            <input class="input-email" type="text" placeholder="Email" required>
            <input class="input-submit" type="submit" value="Join">
        </div>
    </form>
</template>

<script>
    export default {
        name: "Cta"
    }
</script>

<style lang="scss" scoped>
    @import "../styles/breakpoints";
    @import "../styles/variables";

    .cta-layout {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    label {
        font-family: $font-family-primary;
        color: $color-gray-3;

        @include breakpoint('xs') {
            font-size: $font-size-xx-small;
        }
    }

    .cta-inputs {
        display: flex;
        justify-content: space-between;
        max-width: 350px;
        border-radius: 12px;
        background-color: $color-gray-6;
        padding: 4px 4px 4px 20px;
    }

    .input-email, .input-submit {
        font-family: $font-family-primary;
        font-size: $font-size-medium;
        font-weight: 500;
        border: none;
        border-radius: 12px;

        @include breakpoint('xs') {
            font-size: $font-size-small;
        }
    }

    .input-email {
        width: 350px;
        background-color: $color-gray-6;
        color: $color-gray-1;
    }

    .input-submit {
        background-color: $color-blue;
        color: $color-gray-6;
        padding: 11px 25px;
    }

    ::placeholder {
        color: $color-gray-4;
    }
</style>