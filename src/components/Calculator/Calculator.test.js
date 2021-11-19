import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import {
	DIVISION_BY_ZERO_NOT_ALLOWED,
	OPERATION,
} from '../../utilities/constants';
import Calculator from './Calculator';

afterEach(cleanup);

describe('Pruebas de calculadora', () => {
	describe('Pruebas unitarias', () => {
		test('Verificar estado inicial', () => {
			const { getByTestId, getByPlaceholderText } = render(
				<Calculator />
			);

			const span = getByTestId('calculator-operation');
			const button = getByTestId('calculator-submit');
			const aInput = getByPlaceholderText('Inserte el valor de a');
			const bInput = getByPlaceholderText('Inserte el valor de b');
			const dropdown = getByTestId('dropdown-button');

			expect(span.textContent).toBe(OPERATION.SYMBOL.NO_OP);
			expect(aInput).toHaveValue(0);
			expect(bInput).toHaveValue(0);
			expect(button).toBeDisabled();
			expect(dropdown.textContent).toBe(OPERATION.MAP.NO_OP);
		});

		test('Verificar cambio de operación', async () => {
			const { getByTestId, getByText } = render(<Calculator />);

			const dropdown = getByTestId('dropdown-button');
			fireEvent.click(dropdown);

			const sumOption = await waitFor(() => getByText(OPERATION.MAP.ADD));
			fireEvent.click(sumOption);

			const span = getByTestId('calculator-operation');
			const button = getByTestId('calculator-submit');

			expect(span.textContent).toBe(OPERATION.SYMBOL.ADD);
			expect(button).not.toBeDisabled();
		});
	});

	describe('Pruebas de integración', () => {
		for (const operation of Object.values(OPERATION.MAP).slice(1)) {
			const operationListElement = OPERATION.LIST.find(
				el => el.value === operation
			);

			const symbol = OPERATION.SYMBOL[operationListElement.id].trim();
			test(`Verificar envío de '${operation}' 0 ${symbol} 0`, async () => {
				const { getByTestId, getByText } = render(<Calculator />);

				const dropdown = getByTestId('dropdown-button');
				fireEvent.click(dropdown);

				const sumOption = await waitFor(() => getByText(operation));
				fireEvent.click(sumOption);

				const submit = getByTestId('calculator-submit');
				fireEvent.click(submit);

				const result = await waitFor(() =>
					getByTestId('calculator-result')
				);

				const toBeContained =
					operation === OPERATION.MAP.DIV
						? DIVISION_BY_ZERO_NOT_ALLOWED
						: 'Resultado: 0';

				expect(result.textContent).toContain(toBeContained);
			});
		}

		test(`Verificar envío de 'Dividir' 2/1`, async () => {
			const { getByTestId, getByText, getByPlaceholderText } = render(
				<Calculator />
			);

			const dropdown = getByTestId('dropdown-button');
			fireEvent.click(dropdown);

			const sumOption = await waitFor(() => getByText(OPERATION.MAP.DIV));
			fireEvent.click(sumOption);

			const aInput = getByPlaceholderText('Inserte el valor de a');
			const bInput = getByPlaceholderText('Inserte el valor de b');

			fireEvent.change(aInput, { target: { value: 2 } });
			fireEvent.change(bInput, { target: { value: 1 } });

			const button = getByTestId('calculator-submit');
			fireEvent.click(button);

			const result = await waitFor(() =>
				getByTestId('calculator-result')
			);

			expect(result.textContent).toContain('Resultado: 2');
		});
	});
});
