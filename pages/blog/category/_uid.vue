<template>
    <div class="test">
        {{ categoryName }}
    </div>
</template>

<script>
export default {
    name: "CategoryPage",
    async asyncData({ $prismic, params, error }) {
        try {
            const category = await $prismic.api.getByUID("category", params.uid);

            return {
                categoryName: category.data.name
            };
        } catch (e) {
            error({ statusCode: 404, message: e.message });
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/css/variables";

.test {
    height: 100vh;
    padding-top: $size-menu-height-desktop;

    text-align: center;
}
</style>
