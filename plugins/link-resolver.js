/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

export default function (doc) {
    if (doc.isBroken) {
        return "/not-found";
    }

    if (doc.type === "blog_home") {
        return "/blog/";
    }

    if (doc.type === "homepage") {
        return "/";
    }

    if (doc.type === "blog_article") {
        return `/blog/article/${doc.uid}`;
    }

    if (doc.type === "page") {
        return `/page/${doc.uid}`;
    }

    if (doc.type === "category") {
        return `/blog/category/${doc.uid}`;
    }

    if (doc.type === "author") {
        return `/blog/author/${doc.uid}`;
    }

    return "/not-found";
}
