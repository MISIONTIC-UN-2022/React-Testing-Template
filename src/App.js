import React from 'react';

import Calculator from './components/Calculator';

function App() {
	return (
		<div className='container p-4'>
			<div className='row'>
				<div className='col-12'>
					<div className='row'>
						<h1>Misi&oacute;n Tic - Calculadora</h1>
					</div>
					<Calculator />
				</div>
			</div>
		</div>
	);
}

export default App;
