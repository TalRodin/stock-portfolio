import {combineReducers} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
import authReducer from './authReducer'
import symbolReducer from './symbolReducer'
export default combineReducers({
    auth: authReducer,
    symbols: symbolReducer,
    firebase: firebaseReducer,
})