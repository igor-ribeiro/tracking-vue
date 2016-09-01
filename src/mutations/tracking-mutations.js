export const REQUEST_TRACKING_INFORMATION = 'REQUEST_TRACKING_INFORMATION';
export const RECEIVE_TRACKING_INFORMATION = 'RECEIVE_TRACKING_INFORMATION';
export const RECEIVE_TRACKING_ERROR = 'RECEIVE_TRACKING_ERROR';
export const UPDATE_TRACKING_CODE = 'UPDATE_TRACKING_CODE';

export function requestTrackingInformation (code) {
    return { type: REQUEST_TRACKING_INFORMATION, code };
};

export function receiveTrackingInformation (information) {
    return { type: RECEIVE_TRACKING_INFORMATION, information };
};

export function receiveTrackingError (error) {
    return { type: RECEIVE_TRACKING_ERROR, error };
};

export function updateTrackingCode (code) {
    return { type: UPDATE_TRACKING_CODE, code };
};
