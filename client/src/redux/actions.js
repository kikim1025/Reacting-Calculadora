import { ADD_EXPRESSION } from '../constants/constants';

export const addExpression = (payload, expression) => {
    return {
        type: ADD_EXPRESSION,
        payload,
        expression
    };
};