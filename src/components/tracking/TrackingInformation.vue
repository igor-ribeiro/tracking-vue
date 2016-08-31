<template>
    <div class="tracking-information">
        <app-loader :is-loading="$loadingRouteData"></app-loader>

        <tracking-table :tracking-info="trackingInfo"></tracking-table>
        <tracking-error :tracking-error="trackingError"></tracking-error>
    </div>
</template>

<script>
import trackingApi from '../../../mocks/tracking-api.js';

import AppLoader from '../app/AppLoader';

import TrackingTable from './TrackingTable';
import TrackingError from './TrackingError';

export default {
    components: {
        AppLoader,

        TrackingTable,
        TrackingError,
    },

    data() {
        return {
            trackingInfo  : [],
            trackingError : '',
        };
    },

    route: {
        data: function () {
            const trackingCode = this.$route.params.trackingCode;
            const trackingInfo = trackingApi[trackingCode];

            this.trackingInfo = [];
            this.trackingError = '';

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (! trackingInfo) {
                        reject(`No tracking information found for "${trackingCode}" code.`);
                    }

                    resolve(trackingInfo);
                }, 2000);
            })
            .then((info) => this.trackingInfo = info)
            .catch((error) => this.trackingError = error);
        },
    },
};
</script>
