<template>
    <div class="slices">
        <section
            v-for="(slice, index) in slices"
            :key="`slice-${slice.slice_type}-${index}`"
        >
            <!-- Article's rich text slice -->
            <template v-if="slice.slice_type === 'text'">
                <rich-text-slice :slice="slice" />
            </template>
            <!-- Article's quote slice -->
            <template v-else-if="slice.slice_type === 'quote'">
                <quote-slice :slice="slice" />
            </template>
            <!-- Article's Image with caption slice -->
            <template v-else-if="slice.slice_type === 'image'">
                <image-with-caption-slice :slice="slice" />
            </template>
        </section>
    </div>
</template>

<script>
import RichTextSlice from "./slices/RichTextSlice";
import QuoteSlice from "./slices/QuoteSlice";
import ImageWithCaptionSlice from "./slices/ImageWithCaptionSlice";

export default {
    name: "SlicesBlock",
    components: {
        ImageWithCaptionSlice,
        RichTextSlice,
        QuoteSlice
    },
    props: {
        "slices": {
            type: Array,
            required: true
        }
    }
};
</script>
<style lang="scss" scoped>
.slices {
    min-width: 320px;
    max-width: 100%;
    margin: 0 auto;
}
</style>
