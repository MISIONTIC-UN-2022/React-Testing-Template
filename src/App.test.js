import { render, screen } from '@testing-library/react';
import App from './App';

test('Tiene título', () => {
	render(<App />);
	const title = screen.getByText(/Misión Tic - Calculadora/i);
	expect(title).toBeInTheDocument();
});
