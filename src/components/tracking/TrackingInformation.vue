<template>
    <div class="tracking-information">
        <app-loader :is-loading="isLoading"></app-loader>

        <tracking-table :information="information"></tracking-table>
        <tracking-error :error="error"></tracking-error>
    </div>
</template>

<script>
import trackingStore from '../../stores/tracking-store';
import { requestTrackingInformation } from '../../actions/tracking-actions';

import AppLoader from '../app/AppLoader';

import TrackingTable from './TrackingTable';
import TrackingError from './TrackingError';

export default {
    store: trackingStore,

    components: {
        AppLoader,

        TrackingTable,
        TrackingError,
    },

    vuex: {
        getters: {
            information: state => state.information,
            error: state => state.error,
            isLoading: state => state.isLoading,
        },

        actions: {
            requestTrackingInformation,
        },
    },

    route: {
        data: function () {
            const trackingCode = this.$route.params.trackingCode;

            this.requestTrackingInformation(trackingCode);
        },
    },
};
</script>
