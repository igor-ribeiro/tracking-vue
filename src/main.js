import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';

Vue.use(Router);
Vue.use(Vuex);

import App from './App';
import TrackingInformation from './components/tracking/TrackingInformation';

const router = new Router({
    hashbang: false,
});

router.map({
    ':trackingCode': {
        name: 'trackingInformation',
        component: TrackingInformation,
    },
});

const app = Vue.extend(App);

router.start(app, '#app');

