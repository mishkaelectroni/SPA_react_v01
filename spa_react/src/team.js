import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Team extends Component {
	
	render() {
				
		return (
			<div className="team"> 
				<h2>The Team</h2>
				<div className="teamFoto">
					<ul>
						<li>
							<img src={require('./img/team-foto.png')} alt="fototeam" />
							<h5>Adrian Thomas</h5>
							<p>CEO & Fouder</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
						</li>
						<li>
							<img src={require('./img/team-foto2.png')} alt="fototeam" />
							<h5>Adrian Thomas</h5>
							<p>CEO & Fouder</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
						</li>
						<li>
							<img src={require('./img/team-foto.png')} alt="fototeam" />
							<h5>Adrian Thomas</h5>
							<p>CEO & Fouder</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
						</li>
						<li>
							<img src={require('./img/team-foto.png')} alt="fototeam" />
							<h5>Adrian Thomas</h5>
							<p>CEO & Fouder</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
						</li>
					</ul>
				</div>
			 </div>
		);
	}
}
export default Team;