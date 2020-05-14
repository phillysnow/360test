<template>
    <prismic-link
        :field="link"
        class="menu-item"
    >
        {{ label }}
    </prismic-link>
</template>

<script>
export default {
    name: "NavbarLink",
    props: {
        menuItem: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            label: this.menuItem.primary.label,
            link: this.menuItem.primary.link
        };
    }
};
</script>
