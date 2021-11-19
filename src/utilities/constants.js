const OPERATION_LIST = [
	{ id: 'NO_OP', value: 'Seleccione su opción...' },
	{ id: 'ADD', value: 'Sumar' },
	{ id: 'SUB', value: 'Restar' },
	{ id: 'MUL', value: 'Multiplicar' },
	{ id: 'DIV', value: 'Dividir' },
];

const OPERATION_MAP = {
	NO_OP: 'Seleccione su opción...',
	ADD: 'Sumar',
	SUB: 'Restar',
	MUL: 'Multiplicar',
	DIV: 'Dividir',
};

const OPERATION_SYMBOLS = {
	NO_OP: '',
	ADD: ' + ',
	SUB: ' - ',
	MUL: ' • ',
	DIV: ' / ',
};

const OPERATION_RESOURCE = {
	NO_OP: '',
	ADD: 'add',
	SUB: 'sub',
	MUL: 'mul',
	DIV: 'div',
};

export const DIVISION_BY_ZERO_NOT_ALLOWED = 'No se permite división por cero';

export const OPERATION = {
	LIST: OPERATION_LIST,
	MAP: OPERATION_MAP,
	SYMBOL: OPERATION_SYMBOLS,
	RESOURCE: OPERATION_RESOURCE,
};
