<template>
    <div class="cta-input">
        <input
            type="email"
            :placeholder="placeholder"
            class="email-input"
        />
        <div class="btn360 default small">
            {{ buttonLabel }}
        </div>
    </div>
</template>

<script>
export default {
    name: "CtaInput",
    props: {
        buttonLabel: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables";

.cta-input {
    display: flex;
    box-sizing: border-box;
    height: 40px;
    padding: 4px;

    background-color: rgba($color-grey-level-8, 0.08);
    border: 1px solid $color-grey-level-5;
    border-radius: 4px;

    .email-input {
        flex-grow: 1;
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        max-width: 200px;
        height: 100%;
        padding: 0 12px;

        color: $color-grey-level-4;
        font-size: 14px;

        background: none;
        border: none;
        outline: none;
        box-shadow: none;

        &:focus {
            color: $color-lynch;
        }

        &::placeholder {
            color: $color-grey-level-4;
        }
    }

    &.white-text .email-input {
        color: $color-grey-level-8;

        @media only screen and (max-width: $breakpoint-tablet) {
            color: $color-grey-level-4;

            &:focus {
                color: $color-lynch;
            }
        }
    }

    .btn360 {
        flex-shrink: 0;
    }
}
</style>
