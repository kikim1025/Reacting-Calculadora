import { createStore } from 'redux';
import reducer from './reducer';

// create redux store
const store = createStore(reducer);

export default store;