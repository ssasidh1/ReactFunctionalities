import {legacy_createStore as createStore,combineReducers} from 'redux'
import cakeReducer  from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer';
const rootReducers = combineReducers({cake:cakeReducer,ice:iceCreamReducer})
const store = createStore(rootReducers)
export default store;

