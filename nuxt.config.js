export default {
    mode: "universal",

    /*
    ** Headers of the page
    */
    head: {
        title: "Blog | 360Learning",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "360Learning's blog" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,900" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;600;700&display=swap" }
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: "#fff" },

    /*
    ** Global CSS
    */
    css: [
        "@/assets/css/resetr.css",
        "@/assets/css/general.scss",
        "@/assets/css/buttons.scss"
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // modules for full static before `nuxt export` (coming in v2.12)
        "@/modules/static",
        "@/modules/crawler",
        // https://prismic-nuxt.js.org/
        "@nuxtjs/prismic",
        "@nuxtjs/svg"
    ],

    prismic: {
        endpoint: "https://360Learning-phil.cdn.prismic.io/api/v2",
        linkResolver: "@/plugins/link-resolver",
        htmlSerializer: "@/plugins/html-serializer"
    },

    /*
    ** Build configuration
    */
    build: {
        extend(config, ctx) {
            // to transform link with <nuxt-link> for the htmlSerializer
            config.resolve.alias.vue = "vue/dist/vue.common";
        }
    },

    generate: {
        fallback: "404.html" // Netlify reads a 404.html, Nuxt will load as an SPA
    }
};
