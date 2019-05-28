import React from 'react';
import './Header.css';

const HeaderTitle = () => {
	return (
		<div>
			<div className="school-name">Lambda School</div>
			<a
				className="handle"
				href="https://twitter.com/LambdaSchool"
			>
				@LambdaSchool
			</a>
			<div className="date">28 May</div>
		</div>
	);
};

export default HeaderTitle;
