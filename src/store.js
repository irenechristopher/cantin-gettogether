import {createStore} from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import {combineReducers} from 'redux'
import CountReducer from './reducers/CountReducer'
import NavigationReducer from './reducers/NavigationReducer'

const reducer = combineReducers({
    CountReducer,
    NavigationReducer
});

let store = createStore(reducer, devToolsEnhancer());

export default store;
