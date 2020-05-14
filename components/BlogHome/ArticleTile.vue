<template>
    <div class="article-tile">
        <prismic-link
            :field="category"
            class="category-label"
        >
            {{ category.data.name }}
        </prismic-link>
        <nuxt-link
            :to="articleLink"
            class="article"
        >
            <prismic-image
                :field="thumbnail"
                class="thumbnail"
                :class="articleType"
            />
            <h3 class="article-title">
                {{ title }}
            </h3>
            <p v-if="description" class="article-description">
                {{ description }}
            </p>
        </nuxt-link>
        <prismic-link :field="article.data.author" class="author">
            <prismic-image :field="author.portrait" class="portrait" />
            <div class="author-info">
                <div class="author-name">
                    {{ author.name }}
                </div>
                <div>{{ author.job }}</div>
            </div>
        </prismic-link>
    </div>
</template>

<script>
import linkResolver from "../../plugins/link-resolver";
export default {
    name: "ArticleTile",
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            articleLink: linkResolver(this.article),
            articleType: this.article.data.article_type,
            author: {
                portrait: this.article.data.author.data.portrait.tile,
                name: this.article.data.author.data.name,
                job: this.article.data.author.data.job
            },
            category: this.article.data.category,
            description: this.$prismic.asText(this.article.data.description),
            thumbnail: this.article.data.thumbnail.tile,
            title: this.$prismic.asText(this.article.data.title)
        };
    }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables";

.article-tile {
    display: block;
    width: 375px;
    max-width: 100%;

    font-family: 'Open Sans', serif;

    .category-label {
        display: inline-block;

        margin-bottom: 16px;

        color: $color-azura;
        font-weight: 700;
        font-size: 12px;
        text-transform: uppercase;

        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }

    & > *:not(.category-label) {
        width: 100%;
        max-width: 100%;
    }

    .article {
        display: block;

        cursor: pointer;

        .thumbnail {
            display: block;
            max-width: 100%;

            margin-bottom: 24px;

            border-radius: 4px;

            transition: transform 0.3s;
        }

        .article-title {
            display: inline-block;
            margin-bottom: 16px;

            color: $color-grey-level-0;
            font-weight: 600;
            font-size: 20px;
            font-family: "Eczar", "Open Sans", serif;
            line-height: 26px;

            transition: color 0.3s;
        }

        .article-description {
            margin-bottom: 16px;

            color: $color-lynch;
            font-size: 16px;
            line-height: 24px;
            text-align: left;
        }

        &:hover {
            .thumbnail {
                transform: scale(1.02);
            }

            .article-title {
                color: $color-azura;
            }
        }
    }

    .author {
        display: flex;
        width: 100%;
        height: 36px;

        cursor: pointer;

        .portrait {
            width: 36px;
            height: 36px;
            margin-right: 8px;

            border-radius: 18px;
        }

        .author-info {
            color: $color-lynch;
            font-size: 12px;
            font-style: normal;
            line-height: 18px;

            .author-name {
                font-weight: 600;
            }
        }

        &:hover .author-name {
            text-decoration: underline;
        }
    }
}

</style>

