import React, { Component } from 'react';
import SVG from './svg';
import Hamburger from 'react-hamburger-menu';

class Header extends Component{

  state = {
    hamburgerOpen: false,
    headerClass: 'header',
  }

  handleClick = () => {
    let classname = this.state.headerOpen ? 'header animate-moveup':'header animate-movedown';
    switch(this.state.headerClass) {
    case 'header':
        classname = 'header animate-moveup'
        break;
    case 'header animate-movedown':
        classname = 'header animate-moveup'
        break;
    case 'header animate-moveup':
            classname = 'header animate-movedown'
            break;
    default:
        return
}

    this.setState({
        hamburgerOpen: !this.state.hamburgerOpen,
        headerClass: classname,
    });
  }

  componentDidMount(){

    window.addEventListener('resize', () => {
        var intViewportWidth = window.innerWidth
        if(intViewportWidth>767){
          this.setState({
              headerClass: 'header',
              hamburgerOpen: false,
          });
        }
    })
  }

   render(){

     return(
       <div className='header-wrapper'>
       <div className='hamburger'>
         <Hamburger
            isOpen={this.state.hamburgerOpen}
            menuClicked={this.handleClick}
            width={25}
            height={18}
            strokeWidth={2}
            rotate={0}
            color='#555'
            borderRadius={5}
            animationDuration={0.5}
            />
       </div>
       <header className={this.state.headerClass}>
         <div className="container">
           <div className="header__logo">
               <span>Yu Liu</span>
           </div>
           <div className="header__menu">
               <ul>
                 <li>Home</li>
                 <li>About</li>
                 <li>Skillset</li>
                 <li>Portfolio</li>
                 <li>Contact</li>
               </ul>
           </div>
           <div className="header__social-icons">
             <ul>
               <li><SVG name="facebook" className="icon-facebook"/></li>
               <li><SVG name="linkedin" className="icon-linkedin"/></li>
               <li><SVG name="github" className="icon-github"/></li>
             </ul>
           </div>
         </div>
       </header>
       </div>
     )
   }
}

export default Header;
