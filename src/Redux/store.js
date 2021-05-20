import AdminReducer from './Reducers/AdminReducer';
import { createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'; 
import FOOD from '../assets/data/indian_food';
import thunk from 'redux-thunk';

const initialState = FOOD;
const store = createStore(AdminReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;