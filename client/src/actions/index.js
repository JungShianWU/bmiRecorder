import health from '../api/health';
import history from '../history';

import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_HEALTH,
    FETCH_HEALTHS,
    FETCH_HEALTH,
    DELETE_HEALTH,
    EDIT_HEALTH
} from './type';


export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};





export const createHealth = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const res = await health.post('/health', { ...formValues, userId });

    dispatch({ type: CREATE_HEALTH, payload: res.data })
    history.push("/")


}

export const fetchHealths = () => async dispatch => {
    const res = await health.get('/health');
    dispatch({ type: FETCH_HEALTHS, payload: res.data })
}


export const fetchHealth = (id) => async dispatch => {
    const res = await health.get(`/health/${id}`);
    dispatch({ type: FETCH_HEALTH, payload: res.data })
}

export const editHealth = (id, formValues) => async dispatch => {
    const res = await health.patch(`/health/${id}`, formValues)
    dispatch({ type: EDIT_HEALTH, payload: res.data })
    history.push("/")
}

export const deleteHealth = (id) => async dispatch => {
    await health.delete(`/health/${id}`);
    dispatch({ type: DELETE_HEALTH, payload: id });
    history.push("/");
};