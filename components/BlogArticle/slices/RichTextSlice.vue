<template>
    <section class="text-container">
        <prismic-rich-text
            class="article-text"
            :class="{'grey-bg': slice.slice_label === 'grey_background'}"
            :field="richText"
        />
    </section>
</template>

<script>
export default {
    name: "TextSlice",
    props: {
        slice: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            richText: this.slice.primary.text
        };
    }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/variables";

.text-container {
    box-sizing: border-box;
    width: 100%;
    max-width: 800px;
    margin: 40px auto;

    padding: 0 24px;

    .article-text {
        box-sizing: border-box;
        width: 100%;

        &.grey-bg {
            padding: 48px;

            background-color: $color-grey-level-5;
            border-radius: 4px;
        }

        & > /deep/ * {
            width: 100%;
            margin-bottom: 40px;

            &:last-child {
                margin-bottom: 0;
            }
        }

        & > /deep/ h1,
        & > /deep/ h2,
        & > /deep/ h3 {
            margin-bottom: 16px;
        }

        /deep/ img {
            width: 100%;

            border-radius: 6px;
        }

        /deep/ a:hover {
            text-decoration: underline;
        }

        /deep/ div[data-oembed] {
            display: flex;
            justify-content: center;
        }
    }
}
</style>

