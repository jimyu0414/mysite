import React, { Component } from 'react';
import SVG from './svg';

class Header extends Component{
   render(){
     return(
       <header className="header">
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
     )
   }
}

export default Header;
