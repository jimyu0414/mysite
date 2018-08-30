import React, {Component} from 'react';
import SVG from './svg';

class Home extends Component {
  render(){
    let profession = 'GRAPHIC DESIGNER';
    return(
      <div className="front-page">
        <div className="container">
          <h1>YU LIU</h1>
          <h2>{profession}</h2>
        </div>
      </div>
    );
  }
}

export default Home;
