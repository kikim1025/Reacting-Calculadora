import React from 'react';

export default (props) => (
    <div className='button' id={props.val} onClick={props.onClick}>{props.val}</div>
);