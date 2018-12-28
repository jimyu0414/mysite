import React, { Component } from 'react';
import Header from './header-component';
import Home from './home-component';
import {Route} from 'react-router-dom';
import '../App.css';


class App extends Component {

  render() {
    return (
      <div className="myApp">
        <Home />
        {/* <Route path='/home' component={Home} /> */}
        <Header headerOpen={false}/>
      </div>
    );
  }
}

export default App;
