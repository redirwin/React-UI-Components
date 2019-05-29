import React from 'react';
import './Card.scss';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
	return (
		<a href="https://www.reactjs.org">
			<div>
				<CardBanner />
				<CardContent />
			</div>
		</a>
	);
};

export default CardContainer;
