<template>
    <section
        class="image-slice-container"
        :class="{'full-width': isFullWidth , 'grey-bg': hasGreyBg}"
    >
        <div
            class="image-content"
            :class="{'full-width': isFullWidth}"
        >
            <prismic-image
                :field="image"
                class="image"
                :class="{'full-width-image': isFullWidth}"
            />
            <div
                v-if="caption"
                class="caption"
                :class="{ 'on-right': slice.slice_label === 'regular_right_caption' }"
            >
                {{ caption }}
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ImageWithCaptionSlice",
    props: {
        slice: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            caption: this.slice.primary.caption,
            hasGreyBg: this.slice.primary.has_grey_background,
            image: this.slice.primary.image,
            isFullWidth: this.slice.slice_label === "full_width_under_caption"
        };
    }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/variables";

.image-slice-container {
    position: relative;

    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    margin: 20px 0;
    padding: 0 24px;

    &.grey-bg {
        background-color: $color-grey-level-6;
    }

    &.full-width {
        padding: 0;

        background-color: transparent;
    }

    .image-content {
        position: relative;

        box-sizing: border-box;
        width: 100%;
        max-width: 800px;
        margin: 64px auto;

        &.full-width {
            max-width: none;
            margin: 0;
        }

        .image {
            display: block;
            max-width: 100%;

            border-radius: 6px;

            &.full-width-image {
                width: 100%;
                max-height: 660px;

                border-radius: 0;
            }
        }

        .caption {
            margin: 16px 0 -32px;

            color: $color-grey-level-2;
            font-size: 12px;
            line-height: 150%;
            text-align: justify;

            &.on-right {
                position: absolute;
                bottom: 0;
                left: calc(100% + 24px);

                width: 100px;
                margin: 0;
                padding: 0;

                text-align: left;

                @media only screen and (max-width: $breakpoint-tablet) {
                    position: static;

                    width: auto;
                    margin: 16px 0 -32px;

                    text-align: justify;
                }
            }
        }

        .full-width-image + .caption {
            margin: 16px auto 0;
            padding: 0 24px;
        }
    }
}
</style>

