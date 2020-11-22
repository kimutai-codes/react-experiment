import React from 'react';
import Name from './greet';
import Arr from './array';
const App = (props) => {
	return (
		<div style={{ textAlign: 'center' }}>
			<Name name="Pauline" />

			<Arr />
		</div>
	);
};
export default App;
