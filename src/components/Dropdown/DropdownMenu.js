import React from 'react';

import DropdownItem from './DropdownItem';

const DropdownMenu = ({ options, onSelect }) => {
	const renderOptions = () =>
		options.map(({ id, value }) => (
			<DropdownItem key={`option-${id}`} onClick={() => onSelect(id)}>
				{value}
			</DropdownItem>
		));

	return <ul className='dropdown-menu'>{renderOptions()}</ul>;
};

export default DropdownMenu;
