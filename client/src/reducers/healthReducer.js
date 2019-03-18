import _ from 'lodash';

import {
    CREATE_HEALTH,
    FETCH_HEALTHS,
    FETCH_HEALTH,
    DELETE_HEALTH,
    EDIT_HEALTH
} from '../actions/type'




export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_HEALTHS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case FETCH_HEALTH:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_HEALTH:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_HEALTH:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_HEALTH:
            return _.omit(state, action.payload)
        default:
            return state;
    }
}