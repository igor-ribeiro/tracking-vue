<template>
    <div>
        <app-title>Tracking - VueJs</app-title>
        <app-separator></app-separator>

        <tracking-search :code="code"></tracking-search>
        <app-separator></app-separator>

        <router-view keep-alive></router-view>
    </div>
</template>

<script>
import trackingStore from './stores/tracking-store';

import AppLoader from './components/app/AppLoader';
import AppTitle from './components/app/AppTitle';
import AppSeparator from './components/app/AppSeparator';

import TrackingSearch from './components/tracking/TrackingSearch';

export default {
    store: trackingStore,

    vuex: {
        getters: {
            code: state => state.code,
        },
    },

    components: {
        AppTitle,
        AppLoader,
        AppSeparator,

        TrackingSearch,
    },
};
</script>

<style>
html {
    height: 100%;
}

body {
    display: flex;
    height: 100%;
    justify-content: center;
    margin: 0;
    padding: 0;
}

#app {
    color: #2c3e50;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    background-color: #fff;
    padding: 20px;
    width: 40vw;
}

#app a {
    color: #42b983;
    text-decoration: none;
}
</style>
