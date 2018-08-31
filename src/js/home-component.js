import React, {Component} from 'react';
import SVG from './svg';
import sheepGif from '../img/smoke-sheep.gif';
import ChangingText from './changing-text-component';
// import TextLoop from 'react-text-loop';

class Home extends Component {
  state = {
    professionIcons:[],
  }




  showProfessionIcons = () => {
    const icons = this.state.professionIcons.map((icon,key) =>{
      return <li key={key}><SVG name={icon} className="icon-profession"/></li>
    })
    return icons;
  }

  componentDidMount(){

      let ary = ['hint','pencup','guitar','snowboard','chat']

      let offset = 0;
      ary.forEach((element) =>{

        setTimeout(() => {
          console.log(element)
            this.setState({
              professionIcons: this.state.professionIcons.concat(element)
            });
        }, 2000 + offset)
        offset+= 1000
      });

  }


  render(){
    return(
      <div className="front-page">
        <div className="container">
          <div className="front-page__content">
            <h1>YU LIU</h1>
            <ChangingText />
            <div className="divider"></div>
            <p>
              Hi there, my name is Yu Liu. I’ve been working in Web Industry for 3 years. Designing websites and all assets. I also take part in front-end web development and specialised in HTML, CSS/SASS, JS, NPM, Webpack, GIt, etc. Before I became a web developer I work as a freelance graphic designer, working with logos, flyers, posters, websites, etc.
            </p>
            <ul>
              {this.showProfessionIcons()}
            </ul>
          </div>
          <div className="front-page__image">
                <img src={sheepGif} alt='sheep' />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
