import React from 'react';
import './ScreenString.css';
import PropTypes from 'prop-types';

const ScreenString = (props) => (
    <div className='screenString' id={props.id}>{props.string}</div>
);

ScreenString.propTypes = {
    id: PropTypes.string.isRequired,
    string: PropTypes.string.isRequired
};

export default ScreenString;