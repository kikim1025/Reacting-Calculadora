import { ADD_EXPRESSION, INVALID_BUTTON, CALCULATE_EXPRESSION, RESET_EXPRESSION } from '../constants/constants';

const initState = {};

export default  reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_EXPRESSION:
            return Object.assign({}, state, { 
                expresson: action.expression + action.payload,
                message: ''
            });
        case INVALID_BUTTON:
            return Object.assign({}, state, { 
                message: 'Invalid command: ' + action.payload
            });
        case CALCULATE_EXPRESSION: //need to check if after cal done goes wrong
            return Object.assign({}, state, { 
                message: action.payload
            });
        case RESET_EXPRESSION:
            return Object.assign({}, state, { 
                expresson: '',
                message: ''
            });
        default: 
            return state;
    };
};