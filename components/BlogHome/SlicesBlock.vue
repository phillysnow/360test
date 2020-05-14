<template>
    <div class="slices">
        <!-- Slice section template -->
        <section
            v-for="(slice, index) in slices"
            :key="`slice-${slice.slice_type}-${index}`"
        >
            <!-- Grid of articles slice component-->
            <template v-if="slice.slice_type === 'spotlights'">
                <spotlight-grid-slice :slice="slice" />
            </template>
            <!-- Grid of articles slice component-->
            <template v-if="slice.slice_type === 'subscription_banner'">
                <subscription-banner :slice="slice" />
            </template>
        </section>
    </div>
</template>

<script>

import SpotlightGridSlice from "./slices/SpotlightGridSlice";
import SubscriptionBanner from "../common/slices/SubscriptionBanner.vue";

export default {
    name: "SlicesBlock",
    components: {
        SpotlightGridSlice,
        SubscriptionBanner
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
    display: flex;
    flex-direction: column;
    min-width: 320px;
    max-width: 100%;
    margin: 0 auto;
}
</style>
