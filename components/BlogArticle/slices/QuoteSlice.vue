<template>
    <section class="quote-container">
        <prismic-rich-text
            class="quote-text"
            :field="slice.primary.quote_text"
        />
    </section>
</template>

<script>
export default {
    name: "QuoteSlice",
    props: {
        slice: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/variables";

.quote-container {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    max-width: 800px;
    margin: 40px auto;

    padding: 0 24px;

    &::before {
        margin-left: 24px;
        display: block;
        float: left;
        height: auto;
        padding-left: 24px;

        border-left: 6px solid $color-azura;

        content: " ";
    }

    .quote-text {
        display: block;

        /deep/ p {
            color: $color-grey-level-0;
            font-weight: 400;
            font-size: 30px;
            font-family: "Eczar", "Open Sans", serif;
            line-height: 36px;
        }

        /deep/ a {
            color: $color-azura;
            font-weight: 700;
            font-family: "Eczar", "Open Sans", serif;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>
