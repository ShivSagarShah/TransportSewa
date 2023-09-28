import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import vehicleReducer from './reducer';
//combine all the reducers
const rootReducer = combineReducers({
  vehicleReducer,
});

//creating a store witht the help of middleware thunk
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));