<template>
    <div class="submenu-items">
        <div
            v-for="(item, index) in items"
            :key="`submenu-item-${index}`"
            class="submenu-item"
        >
            <prismic-link :field="item.link">
                <div class="title-container">
                    <div class="title">
                        {{ item.title }}
                    </div>
                    <rigth-arrow class="right-arrow" />
                </div>
                <div v-if="item.subtitle" class="subtitle">
                    {{ item.subtitle }}
                </div>
            </prismic-link>
        </div>
    </div>
</template>

<script>
import RigthArrow from "../../../assets/img/icons/right-arrow.svg?inline";

export default {
    name: "NavbarSubmenu",
    components: {
        RigthArrow
    },
    props: {
        items: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

$desktop-sub-menu-width: 340px;

.submenu-items {
    position: absolute;
    left: calc(50% - #{$desktop-sub-menu-width} / 2);

    box-sizing: border-box;
    width: $desktop-sub-menu-width;
    padding: 32px;

    color: $color-grey-level-0;

    background-color: $color-grey-level-7;
    border-radius: 8px;
    box-shadow: 0 3px 5px rgba($color-grey-level-1, 0.1);

    @media only screen and (max-width: $breakpoint-tablet) {
        position: static;

        width: 100%;
        padding: 0;

        background-color: $color-grey-level-7;
        border-radius: 0;
        box-shadow: none;
    }

    .submenu-item {
        margin-bottom: 16px;

        .title-container {
            display: inline-flex;
            align-items: center;

            border-bottom: 2px solid transparent;

            transition: border-bottom-color 0.3s;

            .title {
                margin-right: 5px;

                font-weight: 600;
                font-size: 20px;
                line-height: 30px;

                @media only screen and (max-width: $breakpoint-tablet) {
                    font-size: 16px;
                }
            }

            .right-arrow {
                display: none;

                width: 12px;
                height: 10px;

                transition: all 0.3s;

                fill: $color-grey-level-0;
            }
        }

        .subtitle {
            margin-top: 4px;

            font-weight: 300;
            font-size: 16px;
            line-height: 24px;

            @media only screen and (max-width: $breakpoint-tablet) {
                display: none;
            }
        }

        &:last-child {
            margin-bottom: 0;
        }

        &:hover {
            color: $color-azura;

            .title-container {
                border-bottom-color: $color-azura;

                .right-arrow {
                    display: block;

                    fill: $color-azura;
                }
            }
        }

        @media only screen and (max-width: $breakpoint-tablet) {
            margin-bottom: 0;
            padding: 10px 20px;
        }
    }

    &::before {
        position: absolute;
        top: -8px;
        left: calc(50% - 8px);

        width: 16px;
        height: 16px;

        background-color: $color-grey-level-7;
        border-top-right-radius: 4px;

        transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);

        content: "";

        @media only screen and (max-width: $breakpoint-tablet) {
            display: none;
        }
    }
}
</style>
