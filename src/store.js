import {createStore} from 'redux'
import {combineReducers} from 'redux'
import CountReducer from './reducers/CountReducer'
import NavigationReducer from './reducers/NavigationReducer'

const reducer = combineReducers({
    CountReducer,
    NavigationReducer
});

const initialState = {
    CountReducer: {count: 123, wish_value: 12},
    NavigationReducer: {homePage: false, eventPage: false }
};


let store = createStore(reducer, initialState);

export default store;
