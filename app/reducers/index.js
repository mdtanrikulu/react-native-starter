import { combineReducers } from 'redux'
import appData from './dataReducer'
import authData from './authReducer'

const rootReducer = combineReducers({
    appData,
    authData
})
export default rootReducer
