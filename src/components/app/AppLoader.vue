<template>
    <div v-show="isLoading" class="app-loader"></div>
</template>

<script>
export default {
    props: [
        'isLoading',
    ],
};
</script>

<style>
@keyframes app-loader-animation {
    from {
        transform: rotateZ(0deg);
    }

    to {
        transform: rotateZ(360deg);
    }
}

.app-loader {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 5px solid #4188bb;
    border-top-color: transparent;
    animation-name: app-loader-animation;
    animation-duration: .5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    margin: 0 auto;
}
</style>
