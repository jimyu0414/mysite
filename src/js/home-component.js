import React, {Component} from 'react';
import SVG from './svg';
import sheepGif from '../img/smoke-sheep.gif';
import DownArrow from '../img/arrow-down-2.gif'
import ChangingText from './changing-text-component';
// import TextLoop from 'react-text-loop';

class Home extends Component {


  state = {
    professionIcons:[

    ],
    count: 0,
  }




  showProfessionIcons = () => {
    const icons = this.state.professionIcons.map((icon,key) =>{
      return <li key={key}><SVG name={icon.name} className={icon.class} /></li>
    })
    return icons;
  }


  hightLightIcons = (count) => {
    let iconArray = [];
    let index =  count;
        if(index > 4){
          index = 0;
        }

    this.state.professionIcons.forEach((element, i) => {

      element.class = "icon-profession animate-popout icon-profession-inactive";
      if(i === index){
        element.class = "icon-profession animate-popout icon-profession-active";
      }
      iconArray.push(element);
    })

    this.setState({
      count:  index + 1,
      professionIcons: iconArray,
    })
  }


  setTimingToLoad = (time, icon) =>{

    setTimeout(() => {
        this.setState({
          professionIcons: this.state.professionIcons.concat(icon)
        });
    }, time)

  }

  componentDidMount(){
      //icon animation on page load
      let iconArray = [
        {
          name: "hint",
          class: "icon-profession animate-popout icon-profession-inactive",
        },
        {
          name: "pencup",
          class: "icon-profession animate-popout icon-profession-inactive",
        },
        {
          name: "guitar",
          class: "icon-profession animate-popout icon-profession-inactive",
        },
        {
          name: "snowboard",
          class: "icon-profession animate-popout icon-profession-inactive",
        },
        {
          name: "chat",
          class: "icon-profession animate-popout icon-profession-inactive",
        }
      ];

      this.setTimingToLoad(1000, iconArray[0])
      this.setTimingToLoad(1200, iconArray[1])
      this.setTimingToLoad(1400, iconArray[2])
      this.setTimingToLoad(1600, iconArray[3])
      this.setTimingToLoad(1800, iconArray[4])



      // high light icon after page load
      setTimeout(() => {
        this.hightLightingIcons = setInterval(() =>
          this.hightLightIcons(this.state.count), 2000
        )
      }, 0 )

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
            <img className="arrow-down" src={DownArrow} alt='arrow_down'/>
          <div className="front-page__image">
                <img src={sheepGif} alt='sheep' />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
