import React from 'react';

import Button from '../Button';
import DropdownMenu from './DropdownMenu';

const Dropdown = ({ options, onSelect, children }) => (
	<>
		<Button isDropdown>{children}</Button>
		<DropdownMenu options={options} onSelect={onSelect} />
	</>
);

export default Dropdown;
