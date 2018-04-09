import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/HomePage';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar />
          <Route exact path = "/" component = {Home}/>
          <Route  path = "/about" component = {About}/>
          <Route  path = "/news" component = {News}/>

        </div>
      </Router>

    );
  }
}

export default App;
