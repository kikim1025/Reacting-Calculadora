import { ADD_EXPRESSION, INVALID_BUTTON, CALCULATE_EXPRESSION, RESET_EXPRESSION } from '../constants/constants';

const initState = { expression: '', message: '' };

export default (state = initState, action) => {
    switch (action.type) {
        case ADD_EXPRESSION:
            return Object.assign({}, state, { 
                expression: action.expression + action.payload,
                message: action.payload
            });
        case INVALID_BUTTON:
            return Object.assign({}, state, { 
                message: 'Invalid:' + action.payload
            });
        case CALCULATE_EXPRESSION: //need to check if after cal done goes wrong
            return Object.assign({}, state, { 
                expression: action.payload,
                message: action.payload
            });
        case RESET_EXPRESSION:
            return Object.assign({}, state, { 
                expression: '',
                message: ''
            });
        default: 
            return state;
    };
};