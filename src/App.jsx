import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import List from './List';
import Form from './Form';
import { Button } from '@chakra-ui/react';

function App() {
	return (
		<React.Fragment>
			<Routes>
				<Route path='/' element={<List />} />
				<Route path='Form' element={<Form />} />
			</Routes>
		</React.Fragment>
	);
}

export default App;
