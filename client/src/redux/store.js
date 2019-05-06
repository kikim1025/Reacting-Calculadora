import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { checkUserInput } from './middlewares';

// create redux store
export default createStore(reducer, applyMiddleware(checkUserInput));