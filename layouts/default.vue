<template>
    <div>
        <the360-navbar />
        <nuxt />
        <footer-prismic />
    </div>
</template>

<script>
import The360Navbar from "../components/navbar/The360Navbar";
import FooterPrismic from "~/components/FooterPrismic.vue";

export default {
    components: {
        The360Navbar,
        FooterPrismic
    },
    // Called before rendering the layout (even for error page)
    async middleware({ store, $prismic }) {
        await store.dispatch("fetchNavbar", $prismic);
    }
};
</script>
