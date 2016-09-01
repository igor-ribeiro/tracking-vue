import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import * as trackingMutations from '../mutations/tracking-mutations';

const state = {
    code: '',
    information: [],
    error: '',
    isLoading: false,
};

const mutations = {
    [trackingMutations.REQUEST_TRACKING_INFORMATION](state, payload) {
        state.isLoading = true;
        state.code = payload.code;
        state.information = [];
        state.error = '';
    },

    [trackingMutations.RECEIVE_TRACKING_INFORMATION](state, payload) {
        state.isLoading = false;
        state.information = payload.information;
        state.error = '';
    },

    [trackingMutations.RECEIVE_TRACKING_ERROR](state, payload) {
        state.isLoading = false;
        state.error = payload.error;
        state.information = [];
    },

    [trackingMutations.UPDATE_TRACKING_CODE](state, payload) {
        state.code = payload.code;
    },
};

export default new Vuex.Store({ state, mutations });
