import React, { useState } from 'react';

import Button from '../Button';
import Dropdown from '../Dropdown';
import { OPERATION } from '../../utilities/constants';
import { useOperation } from '../../hooks/useOperation';

const Calculator = () => {
	const [a, setA] = useState('0');
	const [b, setB] = useState('0');
	const [operation, setOperation] = useState(OPERATION.LIST[0].id);
	const { loading, error, payload, fetch: fetchOperation } = useOperation();

	const isSubmitDisbaled = operation === OPERATION.LIST[0].id;
	const resultExists = typeof payload?.result === 'number';
	const hasError = Boolean(error);

	const onAChangeHandler = event => setA(event.target.value);
	const onBChangeHandler = event => setB(event.target.value);
	const formSubmitHandler = event => {
		event.preventDefault();
		fetchOperation(+a, +b, OPERATION.RESOURCE[operation]);
	};

	return (
		<>
			<div className='row py-3'>
				<form className='input-group mb-3' onSubmit={formSubmitHandler}>
					<Dropdown options={OPERATION.LIST} onSelect={setOperation}>
						{OPERATION.MAP[operation]}
					</Dropdown>
					<input
						type='number'
						className='form-control text-center'
						aria-label='Text input with dropdown button'
						placeholder='Inserte el valor de a'
						value={a}
						onChange={onAChangeHandler}
					/>
					<span
						data-testid='calculator-operation'
						className='input-group-text d-inline-flex justify-content-center'
						style={{ width: 40 }}>
						{OPERATION.SYMBOL[operation]}
					</span>
					<input
						type='number'
						className='form-control text-center'
						aria-label='Text input with dropdown button'
						placeholder='Inserte el valor de b'
						value={b}
						onChange={onBChangeHandler}
					/>
					<Button
						data-testid='calculator-submit'
						type='submit'
						disabled={isSubmitDisbaled || loading}>
						Calcular
					</Button>
				</form>
			</div>
			{resultExists && (
				<p className='text-success' data-testid='calculator-result'>
					Resultado: {payload.result}
				</p>
			)}
			{hasError && (
				<p className='text-danger' data-testid='calculator-result'>
					{error.message}
				</p>
			)}
		</>
	);
};

export default Calculator;
