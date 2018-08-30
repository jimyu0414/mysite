import React, { Component } from 'react';
import Header from './header-component'
import Home from './home-component'
import '../App.css';

class App extends Component {
  render() {
    return (
      <div class="myApp">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
