import { LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_FAIL } from './actionType';
import axios from 'axios';

export const loginRequest = (payload) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_REQUEST })
        let requestPayload = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: payload
        };
        return axios.post('url', requestPayload)
            .then((response) => {
                if (response && response.status === 200) {
                    dispatch({
                        type: LOGIN_REQUEST_SUCCESS,
                        payload: {
                            user: response.data,
                            formError: null
                        }
                    });
                    return response;
                }
                else {
                    dispatch({
                        type: LOGIN_REQUEST_FAIL,
                        payload: {
                            user: null,
                            formError: response.data.error
                        }
                    });
                    return response;
                }
            }).catch((err) => {
                console.log(err);
                dispatch({
                    type: LOGIN_REQUEST_FAIL,
                    payload: {
                        user: null,
                        formError: 'Something went wrong. Please try again later.'
                    }
                });
            })
    }
}