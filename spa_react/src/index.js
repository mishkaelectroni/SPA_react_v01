import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import Team from './team';
import Service from './service';
import Contact from './contact';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
			<div>
				<Route extact path="/" component={App} />
				<Route path="/team" component={Team} />
				<Route path="/service" component={Service} />
				<Route path="/contact" component={Contact} />
			</div>	
	</Router>, 
	document.getElementById('main'));
registerServiceWorker();
