import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import Reducer from '../redux/reducers/reducer'

// Store Configuration
const store = createStore(Reducer,applyMiddleware(logger));

export default store;