import CONFIGURATION from './config.json';

const HEADERS = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
};

const getURL = (operation = null) => {
	if (!Boolean(operation)) throw new Error('resource not valid');

	return new URL(
		`${CONFIGURATION.PROTOCOL}://${CONFIGURATION.HOST}/calc/${operation}`
	);
};

export const fetchOperation = async ({ a, b, operation }) => {
	try {
		const resource = getURL(operation);

		const response = await fetch(resource, {
			method: 'POST',
			headers: HEADERS,
			body: JSON.stringify({ a, b }),
		});

		const asJson = await response.json();

		if (!response.ok) throw new Error(asJson.error);

		return asJson;
	} catch (error) {
		throw error;
	}
};
