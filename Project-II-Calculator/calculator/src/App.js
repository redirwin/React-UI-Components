import React from 'react';
import './App.scss';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
	let numberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Clear'];
	let numButtonStyle = 'num-button';
	let actionButtons = ['÷', 'x', '+', '-'];
	let actionButtonStyle = 'action-button';
	return (
		<div className="app">
			<CalculatorDisplay />

			{numberButtons.map(number => {
				return (
					<NumberButton
						buttonStyle={numButtonStyle}
						text={number}
					/>
				);
			})}

			{actionButtons.map(symbol => {
				return (
					<ActionButton
						buttonStyle={actionButtonStyle}
						text={symbol}
					/>
				);
			})}
		</div>
	);
};

export default App;
