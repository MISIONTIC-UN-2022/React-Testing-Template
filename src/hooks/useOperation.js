import { useCallback, useState } from 'react';
import { CalculatorController } from '../api';

/**
 * Método para realizar una operación.
 */
export const useOperation = () => {
	const [payload, setPayload] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetch = useCallback(async (a, b, operation) => {
		try {
			setLoading(true);
			setError(null);
			const res = await CalculatorController.fetchOperation({
				a,
				b,
				operation,
			});
			setLoading(false);
			setPayload(res);
		} catch (error) {
			setError(error);
			setPayload(null);
		} finally {
			setLoading(false);
		}
	}, []);

	return { loading, error, payload, fetch };
};
