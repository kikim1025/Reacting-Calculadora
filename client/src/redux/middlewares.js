import { ADD_EXPRESSION, INVALID_BUTTON, CALCULATE_EXPRESSION, RESET_EXPRESSION, DECIMAL_DIGITS } from '../constants/constants';

// middlewares contain all logical operations

// middleware to check if current expression is still valid if clicked button is to be added
// triggers after each button click by user
// valid button will add to expression but = button, which will terminate expression and dispatch calculation
export const checkUserInput = ({ dispatch }) => {
    return (next) => {
        return (action) => {
            if (action.type === ADD_EXPRESSION) {
                if (action.payload === 'A/C') { // reset button
                    return dispatch({ type: RESET_EXPRESSION });
                } else if (action.payload === '+/-') { // negative sign
                    if (action.expression.length !== 0 && action.expression[action.expression.length - 1].match(/[\d.]/) ) {
                        return dispatch({ type: INVALID_BUTTON, payload: ' ' + action.payload });
                    } else {
                        action.payload = ' -';
                    };
                } else if (action.payload.match(/[+\-*/%]/)) { 
                    if (action.expression.length === 0 || action.expression[action.expression.length - 1].match(/[\s.-]/)) {
                        return dispatch({ type: INVALID_BUTTON, payload: action.payload });
                    };
                } else if (action.payload === '.') {
                    if (action.expression.match(/[.]/)) {
                        return dispatch({ type: INVALID_BUTTON, payload: ' ' + action.payload });
                    };
                } else if (action.payload === '=') { // = button clicked to initiate calculation
                    if (action.expression.length !== 0 && action.expression[action.expression.length - 1].match(/\d/)) {
                        return dispatch({ type: CALCULATE_EXPRESSION, payload: eval(action.expression).toFixed(DECIMAL_DIGITS) }); // \d/0 => infinity is ok
                    } else {
                        return dispatch({ type: INVALID_BUTTON, payload: ' ' + action.payload });
                    };
                };
            };
            return next(action); // simply proceed to ADD_EXPRESSION
        };
    };
};