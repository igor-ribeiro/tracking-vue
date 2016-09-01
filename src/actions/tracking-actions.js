import * as mutations from '../mutations/tracking-mutations';

import trackingApi from '../mocks/tracking-api';

export function requestTrackingInformation ({ dispatch }, code) {
    dispatch(mutations.requestTrackingInformation(code));

    const information = trackingApi[code];
    const error = `No tracking information found for "${code}" code.`;

    setTimeout(() => {
        if (information) {
            dispatch(mutations.receiveTrackingInformation(information));
        } else {
            dispatch(mutations.receiveTrackingError(error));
        }
    }, 2000);
};

export function receiveTrackingInformation ({ dispatch }, information) {
    dispatch(mutations.receiveTrackingInformation(information));
}

export function receiveTrackingError ({ dispatch }, error) {
    dispatch(mutations.receiveTrackingError(error));
};

export function updateTrackingCode ({ dispatch }, event) {
    dispatch(mutations.updateTrackingCode(event.target.value));
};
