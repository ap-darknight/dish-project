import AdminReducer from './Reducers/AdminReducer';
import SearchReducer from './Reducers/SearchReducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'; 
import FOOD from '../assets/data/indian_food';
import thunk from 'redux-thunk';

// const AllReducers = combineReducers({
//     search: SearchReducer,
//     admin: AdminReducer
// })

const initialState = FOOD;
const store = createStore(AdminReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;