import {
    DASHBOARD_REQUEST,
    DASHBOARD_REQUEST_SUCCESS,
    DASHBOARD_REQUEST_FAIL
} from './actionType';

const INITIAL_STATE = {
    isLoading: false,
    dashboard: null,
    formError: null
}

export default (state = INITIAL_STATE, action) => {
    //debugger;
    switch (action.type) {
        case DASHBOARD_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case DASHBOARD_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                dashboard: action.payload.data,
                formError: action.payload.formError
            }
        case DASHBOARD_REQUEST_FAIL:
            return {
                ...state,
                isLoading: false,
                dashboard: null,
                formError: action.payload.formError
            }

        default:
            return state;
    }
    return state;
}