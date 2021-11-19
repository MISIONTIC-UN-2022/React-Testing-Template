import React from 'react';

const DropdownItem = ({ onClick, children }) => (
	<li onClick={onClick}>
		<div className='dropdown-item'>{children}</div>
	</li>
);

export default DropdownItem;
