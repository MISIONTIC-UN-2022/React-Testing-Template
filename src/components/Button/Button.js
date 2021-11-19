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
	const dataTestId = isDropdown ? 'dropdown-button' : 'button';

	return (
		<button
			className={`btn btn-outline-secondary ${extraClasses}`}
			type='button'
			onClick={onClick}
			data-testid={dataTestId}
			{...extraProps}
			{...rest}>
			{children}
		</button>
	);
};

export default Button;
