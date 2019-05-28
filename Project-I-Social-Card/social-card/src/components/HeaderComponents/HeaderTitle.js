import React from 'react';
import './Header.scss';

const HeaderTitle = () => {
	return (
		<div className="header-title">
			<h1 className="school-name">Lambda School</h1>
			<a
				className="handle"
				href="https://twitter.com/LambdaSchool"
			>
				@LambdaSchool{' '}
				<span className="bullet"> &#8226; </span>{' '}
				<span className="date"> 28 May</span>
			</a>
		</div>
	);
};

export default HeaderTitle;
