import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Contact extends Component {
	
	render() {
				
		return (
			<div className="contact" id="cont">
			<div className="contactFon">
				<h2>Contact Us</h2>
				<div className="contactMain">
					<div className="contactText">
						<h3>Get in touch with us</h3>
						<p>lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry</p>
						<ul>
							<li><img src={require('./img/fb-icon.png')} alt="fb-icon" /></li>
							<li><img src={require('./img/tw-icon.png')} alt="tw-icon" /></li>
							<li><img src={require('./img/g-icon.png')} alt="g-icon" /></li>
						</ul>
						<p>Posted by Dosepel & GanjaParker</p>
						<p>+XX-XXXX-XXXX-XX</p>
						<p>info@mail.com</p>
					</div>

					<div className="contactForm">
						<form>
							<input placeholder="Name"/>
							<input placeholder="Email"/>
							<p><textarea rows="10" placeholder="Message">
							</textarea></p>
							<button>Send</button>
						</form>
					</div>
				</div>
			</div>
			</div>
		);
	}
}
export default Contact;