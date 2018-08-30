import React, {Component} from 'react';
import SVG from './svg';
// import TextLoop from 'react-text-loop';

class Home extends Component {
  state = {
    professions: ['GRAPHIC DESIGNER','WEB DESIGNER','FRONT-END DEVELOPER','WEB DEVELOPER'],
    profession: 'DIGITAL DESIGNER',
    proCount: 0,
  }

  changePorfession = (count) => {
    let professions = this.state.professions;
    if(count > 3) count = 0;
    console.log(count);
    this.setState({
      profession: professions[count],
      proCount: count + 1,
    })
  }

  componentDidMount(){
     this.updateProfession = setInterval( ()=> this.changePorfession(this.state.proCount), 3000)
  }

  componentWillUnmount(){
    clearInterval(this.updateProfession)
  }

  render(){
    return(
      <div className="front-page">
        <div className="container">
          <h1>YU LIU</h1>
          <h2>{this.state.profession}</h2>
        </div>
      </div>
    );
  }
}

export default Home;
