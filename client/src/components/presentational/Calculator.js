import React from 'react';
import Screen from './Screen';
import ButtonList from './ButtonList';
import './Calculator.css';
import PropTypes from 'prop-types';

const Calculator = (props) => (
    <div id='calculator'>
        <Screen expression={props.expression} message={props.message} />
        <ButtonList BUTTON_LIST={props.BUTTON_LIST} expression={props.expression} addExpression={props.addExpression} />
    </div>
);

Calculator.propTypes = {
    expression: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    BUTTON_LIST: PropTypes.arrayOf(PropTypes.string).isRequired,
    addExpression: PropTypes.func.isRequired
};

export default Calculator;