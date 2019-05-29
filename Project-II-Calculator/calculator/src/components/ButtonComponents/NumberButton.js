import React from 'react';
import './Button.scss';

const NumberButton = props => {
	return <div className={props.buttonStyle}>{props.text}</div>;
};

export default NumberButton;
