import React from 'react';
import './App.scss';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
	return (
		<div className="calculator-container">
			<ActionButton />
			<NumberButton />
			<CalculatorDisplay />
		</div>
	);
};

export default App;
