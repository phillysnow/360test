<template>
    <div class="menu-items-container">
        <div
            v-for="(item, index) in items"
            :key="`${item.slice_type}-${index}`"
            class="menu-item-wrapper"
        >
            <navbar-link
                v-if="item.slice_type === 'link'"
                :menu-item="item"
            />
            <navbar-submenu-button
                v-else-if="item.slice_type === 'submenu'"
                :menu-item="item"
            />
        </div>
    </div>
</template>

<script>
import NavbarLink from "./menuItems/NavbarLink";
import NavbarSubmenuButton from "./menuItems/NavbarSubmenuButton";

export default {
    name: "MenuItems",
    components: {
        NavbarLink,
        NavbarSubmenuButton
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
@import "../../assets/css/variables";

.menu-items-container {
    display: flex;
    align-items: center;
    margin: 0 20px;

    @media only screen and (max-width: $breakpoint-tablet) {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        margin: 0;
    }

    .menu-item-wrapper {
        @media only screen and (max-width: $breakpoint-tablet) {
            width: 100%;
        }

        /deep/ .menu-item {
            display: flex;
            align-items: center;

            box-sizing: border-box;
            height: $size-menu-height-desktop;
            padding: 0 16px;

            color: $color-lynch;
            font-weight: 600;

            cursor: pointer;

            transition: color 0.3s;

            @media only screen and (max-width: $breakpoint-tablet) {
                justify-content: space-between;

                min-width: 100%;
                height: auto;
                padding: 20px;
            }

            &:hover {
                color: $color-lynch-light;
            }

            .dropdown-arrow {
                width: 8px;

                transition: all 0.3s;

                fill: $color-lynch;

                &.inverted {
                    transform: rotate(180deg);
                }
            }
        }
    }

    &.white-text .menu-item-wrapper /deep/ .menu-item {
        color: $color-grey-level-8;

        .dropdown-arrow {
            fill: $color-grey-level-8;
        }

        @media only screen and (max-width: $breakpoint-tablet) {
            color: $color-lynch;

            .dropdown-arrow {
                fill: $color-lynch;
            }
        }
    }
}
</style>
