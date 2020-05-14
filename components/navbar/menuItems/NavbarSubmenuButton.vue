<template>
    <div
        v-click-outside="closeSubmenu"
        class="submenu-container"
        @click="toggleSubmenu"
    >
        <div class="menu-item">
            <div class="label">
                {{ label }}
            </div>
            <dropdown-arrow
                class="dropdown-arrow"
                :class="{'inverted': isSubmenuOpened}"
            />
        </div>
        <transition name="bounce">
            <navbar-submenu
                v-if="isSubmenuOpened"
                :items="submenuItems"
                class="submenu"
            />
        </transition>
    </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import NavbarSubmenu from "./NavbarSubmenu";
import DropdownArrow from "../../../assets/img/icons/dropdown-arrow.svg?inline";

export default {
    name: "NavbarSubmenuButton",
    components: {
        NavbarSubmenu,
        DropdownArrow
    },
    directives: {
        ClickOutside
    },
    props: {
        menuItem: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isSubmenuOpened: false,
            label: this.menuItem.primary.label,
            submenuItems: this.menuItem.items
        };
    },
    methods: {
        closeSubmenu() {
            this.isSubmenuOpened = false;
        },
        openSubmenu() {
            this.isSubmenuOpened = true;
        },
        toggleSubmenu() {
            if (this.isSubmenuOpened) {
                this.closeSubmenu();
            } else {
                this.openSubmenu();
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

.submenu-container {
    position: relative;

    .menu-item {
        .label {
            margin-right: 5px;
        }
    }

    .submenu {
        &.bounce-enter-active {
            animation: bounce-in-desktop 0.3s;
        }

        &.bounce-leave-active {
            animation: bounce-in-desktop 0.3s reverse;
        }

        @keyframes bounce-in-desktop {
            0% {
                transform: scale(0);
                transform-origin: top;
                opacity: 0;
            }

            80% {
                transform: scale(1.05);
                opacity: 1;
            }

            100% {
                transform: scale(1);
                transform-origin: top;
            }
        }

        @media only screen and (max-width: $breakpoint-tablet) {
            &.bounce-enter-active {
                animation: bounce-in-tablet 0.3s;
            }

            &.bounce-leave-active {
                animation: bounce-in-tablet 0.3s reverse;
            }

            @keyframes bounce-in-tablet {
                0% {
                    transform: scaleY(0);
                    transform-origin: top;
                    opacity: 0;
                }

                80% {
                    transform: scaleY(1.05);
                    opacity: 1;
                }

                100% {
                    transform: scaleY(1);
                    transform-origin: top;
                }
            }
        }
    }
}
</style>
