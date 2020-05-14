<template>
    <div class="page-body">
        <slices-block :slices="slices" />
    </div>
</template>

<script>
import SlicesBlock from "../../../components/BlogArticle/SlicesBlock";
export default {
    name: "BlogArticle",
    components: {
        SlicesBlock
    },
    async asyncData({ $prismic, params, error }) {
        try {
            const article = (await $prismic.api.getByUID("blog_article", params.uid)).data;
            return {
                pageTitle: article.title,
                slices: article.body
            };
        } catch (e) {
            error({ statusCode: 404, message: "Page not found" });
        }
    },
    head() {
        return {
            title: this.$prismic.asText(this.pageTitle)
        };
    }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/css/variables";

.page-body {
    padding-top: $size-menu-height-desktop;
}
</style>
