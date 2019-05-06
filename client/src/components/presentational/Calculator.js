import React from 'react';
import Screen from './Screen';
import ButtonList from '../presentational/ButtonList';
import './Calculator.css';

export default (props) => (
    <div id='calculator'>
        <Screen expression={props.expression} message={props.message} />
        <ButtonList BUTTON_LIST={props.BUTTON_LIST} addExpression={props.addExpression} expression={props.expression} />
    </div>
);