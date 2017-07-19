import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Service extends Component {
	
	render() {
				
		return (
			<div className="service"> 
				<div className="serviceMain">
					<div className="serviceOne">
						<ul> 
							<li>
								<h3>Basic</h3>	
							</li>
							<li>
								<h5>$5.01/Month</h5>
							</li>
							<li>
								Lorem ipsum
							</li>
							<li>
								Dolor sit amet, consect
							</li>
							<li>
								Adipiscing elit
							</li>
							<li>
								Proin commodo turpis
							</li>
							<li>
								lacus pulvinarvel
							</li>
							<li>
								Prnare nisi pretium
							</li>
							<li>
								<button>Buy now</button>
							</li>
						</ul>
					</div>

					<div className="serviceTwo">
						<ul> 
							<li>
								<h3>Pro</h3>	
							</li>
							<li>
								<h5>$10.01/Month</h5>
							</li>
							<li>
								Lorem ipsum
							</li>
							<li>
								Dolor sit amet, consect
							</li>
							<li>
								Adipiscing elit
							</li>
							<li>
								Proin commodo turpis
							</li>
							<li>
								lacus pulvinarvel
							</li>
							<li>
								Prnare nisi pretium
							</li>
							<li>
								<button>Buy now</button>
							</li>
						</ul>
					</div>

					<div className="serviceThree">
						<ul> 
							<li>
								<h3>Premium</h3>	
							</li>
							<li>
								<h5>$20.01/Month</h5>
							</li>
							<li>
								Lorem ipsum
							</li>
							<li>
								Dolor sit amet, consect
							</li>
							<li>
								Adipiscing elit
							</li>
							<li>
								Proin commodo turpis
							</li>
							<li>
								lacus pulvinarvel
							</li>
							<li>
								Prnare nisi pretium
							</li>
							<li>
								<button>Buy now</button>
							</li>
						</ul>
					</div>
				</div>	
			 </div>
		);
	}
}
export default Service;