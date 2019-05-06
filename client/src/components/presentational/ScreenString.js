import React from 'react';
import './ScreenString.css';

export default (props) => (
    <div className='screenString' id={props.id}>{props.string}</div>
);