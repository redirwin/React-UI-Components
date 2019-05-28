import React from 'react';
import './App.scss';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
	let numberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<div className="app">
			<CalculatorDisplay />
			<ActionButton />
			{numberButtons.map(number => {
				return <NumberButton text={number} />;
			})}
		</div>
	);
};

export default App;
