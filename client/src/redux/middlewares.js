import { INVALID_BUTTON, CALCULATE_EXPRESSION, RESET_EXPRESSION } from '../constants/constants';

// middlewares contain all logical operations

// middleware to check if current expression is still valid if clicked button is to be added
// triggers after each button click by user
// valid button will add to expression but = button, which will terminate expression and dispatch calculation
export default checkUserInput = ({ dispatch }) => {
    return (next) => {
        return (action) => {
            if (action.payload === 'reset') { // reset button
                return dispatch({ type: RESET_EXPRESSION });
            } else if (action.payload.match(/[\+\-*/%]/)) { 
                if (action.expression.length === 0 || action.expression[action.expression.length - 1].match(/[\s\.-]/)) {
                    return dispatch({ type: INVALID_BUTTON });
                };
            } else if (action.payload === ' -') { // negative sign
                if (action.expression.length !== 0 && action.expression[action.expression.length - 1].match(/[\d\.]/) ) {
                    return dispatch({ type: INVALID_BUTTON });
                };
            } else if (action.payload === '=') { // = button clicked to initiate calculation
                if (action.expression.length !== 0 && action.expression[action.expression.length - 1].match(/\d/)) {
                    return dispatch({ type: CALCULATE_EXPRESSION, payload: eval(action.expression) }); // \d/0 => infinity
                } else {
                    return dispatch({ type: INVALID_BUTTON });
                };
            };
            return next(action); // simply proceed to ADD_EXPRESSION if any number or . button is clicked
        };
    };
};