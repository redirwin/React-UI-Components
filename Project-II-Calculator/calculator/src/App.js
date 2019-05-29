import React from 'react';
import './App.scss';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
	let numberButtons = [9, 8, 7, 6, 5, 4, 3, 2, 1];
	let numButtonStyle = 'num-button';
	let actionButtons = ['÷', 'x', '+', '-', '='];
	let actionButtonStyle = 'action-button';
	return (
		<div className="app">
			<CalculatorDisplay />

			<div className="button-container">
				<div className="number-buttons-container">
					<div className="clear">clear</div>
					{numberButtons.map(number => {
						return (
							<NumberButton
								buttonStyle={
									numButtonStyle
								}
								text={number}
							/>
						);
					})}
					<div className="zero">0</div>
				</div>

				<div className="action-buttons-container">
					{actionButtons.map(symbol => {
						return (
							<ActionButton
								buttonStyle={
									actionButtonStyle
								}
								text={symbol}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default App;
