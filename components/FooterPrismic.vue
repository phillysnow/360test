<template>
    <footer class="footer">
        <a
            href="https://prismic.io"
            target="_blank"
            rel="noopener"
        >
            <img
                class="logo"
                src="../assets/img/prismic-logo.svg"
                alt="Prismic"
            >
        </a>
    </footer>
</template>

<script>
export default {
    name: "FooterPrismic"
};
</script>

<style lang="scss" scoped>
.footer {
    margin: 0 auto;
    padding: 40px 0;

    text-align: center;

    border-top: 1px solid #dadada;
}

.logo {
    width: 100px;
}
</style>
