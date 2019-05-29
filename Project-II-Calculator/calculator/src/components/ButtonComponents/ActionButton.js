import React from 'react';
import './Button.scss';

const ActionButton = props => {
	return <div className={props.buttonStyle}>{props.text}</div>;
};

export default ActionButton;
