import {
    HOME_REQUEST,
    HOME_REQUEST_SUCCESS,
    HOME_REQUEST_FAIL
} from './actionType';

const INITIAL_STATE = {
    isLoading: false,
    home: null,
    formError: null
}

export default (state = INITIAL_STATE, action) => {
    //debugger;
    switch (action.type) {
        case HOME_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case HOME_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                home: action.payload.data,
                formError: action.payload.formError
            }
        case HOME_REQUEST_FAIL:
            return {
                ...state,
                isLoading: false,
                home: null,
                formError: action.payload.formError
            }

        default:
            return state;
    }
    return state;
}