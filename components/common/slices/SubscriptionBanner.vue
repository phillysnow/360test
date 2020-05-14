<template>
    <div class="subscription-banner">
        <div class="banner-container">
            <div class="vertical-label">
                {{ verticalLabel }}
            </div>
            <div class="title">
                <div>
                    {{ title.first_line }}
                </div>
                <div v-if="title.second_line">
                    {{ title.second_line }}
                </div>
            </div>
            <div class="quote-bloc">
                <prismic-image :field="authorPicture" class="author" />
                <p class="quote">
                    {{ quote }}
                </p>
                <cta-input
                    :placeholder="input.placeholder"
                    :button-label="input.buttonLabel"
                    class="input-cta"
                />
            </div>
        </div>
    </div>
</template>

<script>
import CtaInput from "../../ctas/CtaInput";
export default {
    name: "SubscriptionBanner",
    components: {
        CtaInput
    },
    props: {
        slice: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            authorPicture: this.slice.primary.config.data.author_thumbnail,
            input: {
                placeholder: this.slice.primary.config.data.input_email_placeholder,
                buttonLabel: this.slice.primary.config.data.button_label
            },
            quote: this.slice.primary.config.data.quote,
            title: {
                first_line: this.slice.primary.config.data.title_1,
                second_line: this.slice.primary.config.data.title_2
            },
            verticalLabel: this.slice.primary.config.data.vertical_label
        };
    }

};
</script>

<style scoped lang="scss">
@import "../../../assets/css/variables";

.subscription-banner {
    box-sizing: border-box;
    width: 100%;
    margin: 96px 0;
    padding: 80px 0;

    color: $color-grey-level-8;

    background-color: $color-azura;

    @media only screen and (max-width: $breakpoint-mobile) {
        padding: 56px 0;
    }

    .banner-container {
        position: relative;

        box-sizing: border-box;

        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 32px 0 64px;

        @media only screen and (max-width: $breakpoint-mobile) {
            display: flex;
            flex-direction: column;
            align-items: center;

            padding: 0 32px;

            text-align: center;
        }

        .vertical-label {
            position: absolute;
            top: 16px;
            left: 0;

            font-weight: 700;
            font-size: 12px;
            letter-spacing: 3px;
            text-transform: uppercase;

            transform: rotate(-90deg) translateX(- 100%) translateY(20px);
            transform-origin: top left;

            @media only screen and (max-width: $breakpoint-mobile) {
                position: static;

                margin-bottom: 24px;

                transform: rotate(0) translate(0);
            }
        }

        .title {
            max-width: 100%;
            margin-bottom: 24px;

            div {
                font-weight: 700;
                font-size: 60px;
                font-family: "Eczar", "Open Sans", serif;
                line-height: 125%;

                @media only screen and (max-width: $breakpoint-mobile) {
                    display: inline;

                    font-size: 40px;
                }

                &:nth-child(2) {
                    padding-left: 24px;

                    @media only screen and (max-width: $breakpoint-mobile) {
                        padding-left: 0;
                    }
                }
            }
        }

        .quote-bloc {
            display: flex;
            align-items: center;

            max-width: 100%;

            @media only screen and (max-width: $breakpoint-mobile) {
                flex-direction: column;
            }

            .author {
                display: block;

                flex-shrink: 0;

                width: 65px;
                height: 65px;

                margin: 0 24px;

                border: 3px solid rgba($color-grey-level-8, 0.2);
                border-radius: 50%;

                @media only screen and (max-width: $breakpoint-mobile) {
                    display: none;
                }
            }

            .quote {
                width: 100%;
                max-width: 500px;

                margin-right: 24px;

                color: $color-grey-level-8;
                font-weight: 300;
                font-size: 28px;
                line-height: normal;

                @media only screen and (max-width: $breakpoint-mobile) {
                    margin-bottom: 35px;

                    font-size: 22px;
                }
            }

            .cta-input {
                flex-shrink: 0.2;
                max-width: 100%;

                background-color: $color-grey-level-8;
            }
        }
    }
}

</style>
