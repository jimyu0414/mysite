import React, { Component } from 'react';
import Header from './header-component'
import Home from './home-component'
import '../App.css';


class App extends Component {

  render() {
    return (
      <div className="myApp">
        <Home />
        <Header headerOpen={false}/>
      </div>
    );
  }
}

export default App;
