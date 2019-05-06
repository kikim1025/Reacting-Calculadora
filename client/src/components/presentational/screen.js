import React from 'react';
import ScreenString from './ScreenString';

export default (props) => (
    <div id='screen'>
        <ScreenString id='expression' string={props.expression} />
        <ScreenString id='message' string={props.message} />
    </div>
);