import React, {Component} from 'react';
import SVG from './svg';
import sheepGif from '../img/smoke-sheep.gif';
// import TextLoop from 'react-text-loop';

class Home extends Component {
  state = {
    professions: ['WEB DESIGNER','FRONT-END DEVELOPER','GUITAR PLAYER','SNOWBOARDER','INTERPRETER'],
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
          <div className="front-page__content">
            <h1>YU LIU</h1>
            <h2>{this.state.profession}</h2>
            <div className="divider"></div>
            <p>
              Hi there, my name is Yu Liu. I’ve been working in Web Industry for 3 years. Designing websites and all assets. I also take part in front-end web development and specialised in HTML, CSS/SASS, JS, NPM, Webpack, GIt, etc. Before I became a web developer I work as a freelance graphic designer, working with logos, flyers, posters, websites, etc.
            </p>
          </div>
          <div className="front-page__image">
            <div className="front-page__image--professions">

            </div>
            <div className="front-page__image--sheep">
                <img src={sheepGif} alt='sheep' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
