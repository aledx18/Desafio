import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import List from './List';
import Form from './Form';
import { Button } from '@chakra-ui/react';

function App() {
	return (
		<React.Fragment>
			<Route exact path='/' component={List} />
			<Route path='/form' component={Form} />
		</React.Fragment>
	);
}

export default App;
