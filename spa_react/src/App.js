import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import './menuHeader.css';
import MenuHeader from './menuHeader';
import Team from './team';
import './team.css';
import Service from './service';
import './service.css';
import Contact from './contact';
import './contact.css'

class App extends Component {
  render()
  
   {
    return (
      <div className="App">
        <div className="App-header">
            <MenuHeader />         
        </div>
        <div className="slider">
          <div className="headertext">
              <h1>This is main heading</h1>
              <h5>Lorem ipsum is simply dummy text</h5>
              <h5>of the printing</h5>
              <button>Learn More</button>
          </div>
          <img src={require('./img/header1.png')} alt="foto" />
        </div> 
      
          <Team />       
       
          <Service />
      
          <Contact />
     
      </div>
    );
  }
}

export default App;
