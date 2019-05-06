import React from 'react';
import './Button.css';

export default (props) => (
    <div className='button' id={'b'+props.i} onClick={props.onClick}>{props.val}</div>
);