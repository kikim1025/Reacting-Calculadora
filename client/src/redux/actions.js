import { ADD_EXPRESSION } from '../constants/constants';

export default addExpression = (payload, expression) => {
    return {
        type: ADD_EXPRESSION,
        payload,
        expression
    };
};