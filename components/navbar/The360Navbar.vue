<template>
    <nav
        class="navbar"
        :class="{'white': isPageScrolled}"
    >
        <div
            class="navbar-container"
            :class="{'side-panel-opened': showSidePanel}"
        >
            <a
                href="https://360learning.com"
                class="logo-wrapper"
            >
                <img
                    :src="companyLogo"
                    alt="360Learning"
                    class="logo-img"
                />
            </a>
            <div class="spacer" />
            <div
                v-click-outside="closeSidePanel"
                class="menu-content"
                :class="{'side-panel-opened': showSidePanel}"
            >
                <menu-items
                    :items="menuItems"
                    :class="{'white-text': ! isPageScrolled}"
                />
                <div class="email-subscription">
                    <cta-input
                        :button-label="cta.buttonLabel"
                        :placeholder="cta.inputPlaceholder"
                        :class="{'white-text': ! isPageScrolled}"
                    />
                </div>
                <div
                    class="menu-toggle-button"
                    :class="{'dark': isPageScrolled}"
                    @click.stop="toggleSidePanel"
                    v-html="menuToggleButtonIcon"
                />
            </div>
        </div>
    </nav>
</template>

<script>
import ClickOutside from "vue-click-outside";
import burgerMenu from "../../assets/img/icons/burger-menu.svg?raw";
import cross from "../../assets/img/icons/cross.svg?raw";
import companyLogoHorizontal from "../../assets/img/logos/company-logo-horizontal.svg";
import companyLogoHorizontalWhite from "../../assets/img/logos/company-logo-horizontal-white.svg";
import CtaInput from "../ctas/CtaInput";
import MenuItems from "./MenuItems";

export default {
    name: "The360Navbar",
    components: {
        CtaInput,
        MenuItems
    },
    directives: {
        ClickOutside
    },
    data() {
        const navbarData = this.$store.state.navbar;

        return {
            cta: {
                inputPlaceholder: navbarData.input_placeholder,
                buttonLabel: navbarData.button_label
            },
            isPageScrolled: false,
            menuItems: navbarData.body,
            showSidePanel: false
        };
    },
    computed: {
        menuToggleButtonIcon() {
            if (this.showSidePanel) {
                return cross;
            }

            return burgerMenu;
        },
        companyLogo() {
            if (this.isPageScrolled) {
                return companyLogoHorizontal;
            }

            return companyLogoHorizontalWhite;
        }
    },
    mounted() {
        const self = this;

        self.isPageScrolled = isPageScrolled();
        window.onscroll = () => {
            self.isPageScrolled = isPageScrolled();
        };

        function isPageScrolled() {
            const scrollDistance = window.pageYOffset ||
                (document.documentElement || document.body.parentNode || document.body).scrollTop;
            return scrollDistance > 5;
        }
    },
    methods: {
        closeSidePanel() {
            this.showSidePanel = false;
        },
        toggleSidePanel() {
            this.showSidePanel = ! this.showSidePanel;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables";

$size-side-panel-width: 320px;
$size-menu-toggle-button: $size-menu-height-mobile;

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    width: 100%;
    height: $size-menu-height-desktop;

    border-bottom: 1px solid rgba(255, 255, 255, 0.16);

    transition: background-color 0.3s;

    &.white {
        background-color: $color-grey-level-8;
    }

    @media only screen and (max-width: $breakpoint-tablet) {
        height: $size-menu-height-mobile;
    }

    .navbar-container {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        box-sizing: border-box;
        width: 100%;
        max-width: 1441px;
        height: 100%;
        margin: 0 auto;
        padding: 0 20px;

        @media only screen and (max-width: $breakpoint-tablet) {
            margin: 0;

            transition: width 0.3s ease-in-out;

            &.side-panel-opened {
                width: calc(100% - #{$size-menu-toggle-button + $size-side-panel-width});
            }
        }

        .logo-wrapper {
            display: block;
            flex-shrink: 0;
            width: 181px;
            height: 46px;

            @media only screen and (max-width: $breakpoint-tablet) {
                width: 157px;
                height: 40px;
            }

            .logo-img {
                display: block;
                width: auto;
                max-width: 100%;
                height: auto;
                max-height: 100%;
            }
        }

        .spacer {
            flex: 1 0 $size-menu-toggle-button;
        }

        .menu-content {
            display: flex;
            align-items: center;

            @media only screen and (max-width: $breakpoint-tablet) {
                position: absolute;
                top: 0;
                right: 0;

                flex-direction: column;
                align-items: flex-start;
                justify-items: center;

                width: 0;
                min-height: 100vh;

                background-color: $color-grey-level-8;

                transition: width 0.3s ease-in-out;

                &.side-panel-opened {
                    width: $size-side-panel-width;
                    max-width: calc(100% - #{$size-menu-height-mobile});
                }
            }

            .email-subscription {
                @media only screen and (max-width: $breakpoint-tablet) {
                    box-sizing: border-box;
                    width: 100%;
                    padding: 8px;
                }
            }

            .menu-toggle-button {
                display: none;

                @media only screen and (max-width: $breakpoint-tablet) {
                    position: absolute;

                    top: 0;
                    left: -$size-menu-height-mobile;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    width: $size-menu-toggle-button;
                    height: $size-menu-toggle-button;

                    cursor: pointer;

                    fill: $color-grey-level-8;

                    &.dark {
                        fill: $color-lynch;
                    }
                }
            }
        }
    }
}
</style>
