import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class MenuHeader extends Component {

	render() {
function onclick() { 
	var teamscroll = document.getElementByClassName('team');
		teamscroll.addEventListener('click', function() {
			teamscroll.scrollIntoView(false);
	});
		}
		return (
			
			<div className="menuHeader">
		        <ul>
			     <li><Link to="/">Home</Link></li>
			     <li><Link to="/team">Team</Link></li>
			     <li><Link to="/service">Service</Link></li>
			     <li><Link to="/contact">Contact</Link></li> 
		     </ul>
			</div>
			);
	}
	
}

export default MenuHeader;