import React from 'react';
import Button from '../presentational/Button';
import './ButtonList.css';
import PropTypes from 'prop-types';

const ButtonList = (props) => (
    <div id='buttonList'>
        {
            props.BUTTON_LIST.map((b, i) => (
                <Button val={b} key={i} i={i} onClick={() => props.addExpression(b, props.expression)}/>
            ))
        }
    </div>
);

ButtonList.propTypes = {
    BUTTON_LIST: PropTypes.arrayOf(PropTypes.string).isRequired,
    addExpression: PropTypes.func.isRequired,
    expression: PropTypes.string.isRequired
};

export default ButtonList;