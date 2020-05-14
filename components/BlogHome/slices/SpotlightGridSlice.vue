<template>
    <div class="section-container">
        <h2 class="outlined-title">
            {{ title }}
        </h2>
        <div class="tiles-container">
            <article-tile
                v-for="(article, index) in articles"
                :key="`article_${index}`"
                class="article-tile"
                :article="article"
            />
        </div>
    </div>
</template>

<script>
import ArticleTile from "../ArticleTile.vue";
export default {
    name: "SpotlightGridSlice",
    components: {
        ArticleTile
    },
    props: {
        "slice": {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            title: this.$prismic.asText(this.slice.primary.title),
            articles: []
        };
    },
    async created() {
        for (let i = 1; i <= 6; i++) {
            const articleUID = this.slice.primary[`article_${i}`].uid;
            const article = (await this.$prismic.api.getByUID(
                "blog_article",
                articleUID,
                {
                    fetchLinks: [
                        "category.name",
                        "author.name",
                        "author.job",
                        "author.portrait"
                    ]
                }
            ));
            this.articles.push(article);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/variables";

.section-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 80px 0 40px;

    .outlined-title {
        margin-bottom: 80px;

        @media only screen and (max-width: 830px) {
            margin-bottom: 40px;

            font-size: 40px;
        }
    }

    .tiles-container {
        display: flex;

        flex-flow: column wrap;
        align-content: space-around;
        box-sizing: border-box;

        width: 100%;
        max-width: 1280px;
        height: 1600px;
        padding: 0 20px;

        .article-tile {
            margin-bottom: 64px;
        }

        .article-tile:nth-child(3),
        .article-tile:nth-child(4) {
            transform: translateY(-40px);
        }

        .article-tile:nth-child(1),
        .article-tile:nth-child(2),
        .article-tile:nth-child(5),
        .article-tile:nth-child(6) {
            transform: translateY(0);
        }

        @media only screen and (max-width: 1200px) {
            align-content: space-evenly;
            height: 2400px;

            .article-tile:nth-child(1),
            .article-tile:nth-child(2),
            .article-tile:nth-child(3), {
                transform: translateY(0);
            }

            .article-tile:nth-child(4),
            .article-tile:nth-child(5),
            .article-tile:nth-child(6), {
                transform: translateY(-40px);
            }
        }

        @media only screen and (max-width: 830px) {
            align-content: center;
            align-items: center;
            height: auto;

            .article-tile:nth-child(n) {
                max-width: 100%;
                margin: 0 20px 64px;

                transform: translateY(0);

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
}
</style>

