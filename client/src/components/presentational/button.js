import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = (props) => (
    <div className='button' id={'b'+props.i} onClick={props.onClick}>{props.val}</div>
);

Button.propTypes = {
    i: PropTypes.number.isRequired,
    val: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;