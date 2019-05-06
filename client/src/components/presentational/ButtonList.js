import React from 'react';
import Button from '../presentational/Button';

export default (props) => (
    <div id='buttonList'>
        {
            props.BUTTON_LIST.map((b, i) => (
                <Button val={b} key={i} onClick={() => props.addExpression(b, props.expression)}/>
            ))
        }
    </div>
);