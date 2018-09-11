import {
    DASHBOARD_REQUEST,
    DASHBOARD_REQUEST_SUCCESS,
    DASHBOARD_REQUEST_FAIL
} from './actionType';

import axios from 'axios';


export const dashboardRequest = (payload) => {
    return (dispatch) => {
        dispatch({ type: DASHBOARD_REQUEST })
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
                        type: DASHBOARD_REQUEST_SUCCESS,
                        payload: {
                            data: response.data,
                            formError: null
                        }
                    });
                    return response;
                }
                else {
                    dispatch({
                        type: DASHBOARD_REQUEST_FAIL,
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
                    type: DASHBOARD_REQUEST_FAIL,
                    payload: {
                        dashboard: null,
                        formError: 'Something went wrong. Please try again later.'
                    }
                });
            })
    }
}