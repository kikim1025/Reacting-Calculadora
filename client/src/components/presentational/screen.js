import React from 'react';
import ScreenString from './ScreenString';
import './Screen.css';
import PropTypes from 'prop-types';

const Screen = (props) => (
    <div id='screen'>
        <ScreenString id='expression' string={props.expression} />
        <ScreenString id='message' string={props.message} />
    </div>
);

Screen.propTypes = {
    expression: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};

export default Screen;