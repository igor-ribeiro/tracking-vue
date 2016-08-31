<template>
    <div v-show="trackingError" class="tracking-error">{{ trackingError }}</div>
</template>

<script>
export default {
    props: [
        'trackingError',
    ],
};
</script>

<style scoped></style>
