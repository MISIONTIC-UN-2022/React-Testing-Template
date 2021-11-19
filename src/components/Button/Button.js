import React from 'react';

const Button = ({
	onClick = () => {},
	isDropdown = false,
	children,
	...rest
}) => {
	const extraClasses = isDropdown && 'dropdown-toggle';
	const extraProps = isDropdown && {
		'data-bs-toggle': 'dropdown',
		'aria-expanded': 'false',
	};

	return (
		<button
			className={`btn btn-outline-secondary ${extraClasses}`}
			type='button'
			onClick={onClick}
			id='button-addon2'
			{...extraProps}
			{...rest}>
			{children}
		</button>
	);
};

export default Button;
