<template>
    <div v-show="error" class="tracking-error">{{ error}}</div>
</template>

<script>
export default {
    props: [
        'error',
    ],
};
</script>

<style scoped></style>
