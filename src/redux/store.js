import {
    createStore
} from "redux";
import Reducer from '../redux/reducers/reducer'

// Store Configuration
const store = createStore(Reducer);

export default store;