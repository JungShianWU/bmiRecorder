import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import healthsReducer from './healthReducer';



export default combineReducers({
    auth: authReducer,
    form: formReducer,
    healths: healthsReducer
});