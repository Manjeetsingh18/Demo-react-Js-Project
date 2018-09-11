import { LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_FAIL } from './actionType';

const INITIAL_STATE = {
    isLoading: false,
    user: null,
    formError: null
}

export default (state = INITIAL_STATE, action) => {
    //debugger;
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload.data,
                formError: action.payload.formError
            }
        case LOGIN_REQUEST_FAIL:
            return {
                ...state,
                isLoading: false,
                user: null,
                formError: action.payload.formError
            }

        default:
            return state;
    }
    return state;
}