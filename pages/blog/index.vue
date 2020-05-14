<template>
    <section class="blog-home">
        <slices-block :slices="slices"></slices-block>
    </section>
</template>

<script>
import SlicesBlock from "../../components/BlogHome/SlicesBlock";
export default {
    name: "BlogHomepage",
    components: {
        SlicesBlock
    },
    async asyncData({ $prismic, error }) {
        try {
            const blogHome = (await $prismic.api.getSingle("blog_home", {
                fetchLinks: [
                    "subscription_banner.title_1",
                    "subscription_banner.title_2",
                    "subscription_banner.quote",
                    "subscription_banner.vertical_label",
                    "subscription_banner.author_thumbnail",
                    "subscription_banner.input_email_placeholder",
                    "subscription_banner.button_label"
                ]
            })).data;

            return {
                slices: blogHome.body
            };
        } catch (e) {
            error({ statusCode: 404, message: "There is no blog_home document" });
        }
    },
    head() {
        return {
            title: "360Learning | Blog"
        };
    }
};
</script>
