import {
    HOME_REQUEST,
    HOME_REQUEST_SUCCESS,
    HOME_REQUEST_FAIL
} from './actionType';
import axios from 'axios';

export const homeRequest = (payload) => {
    return (dispatch) => {
        dispatch({ type: HOME_REQUEST })
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
                        type: HOME_REQUEST_SUCCESS,
                        payload: {
                            data: response.data,
                            formError: null
                        }
                    });
                    return response;
                }
                else {
                    dispatch({
                        type: HOME_REQUEST_FAIL,
                        payload: {
                            data: null,
                            formError: response.data.error
                        }
                    });
                    return response;
                }
            }).catch((err) => {
                console.log(err);
                dispatch({
                    type: HOME_REQUEST_FAIL,
                    payload: {
                        data: null,
                        formError: 'Something went wrong. Please try again later.'
                    }
                });
            })
    }
}