import React, {Component} from 'react';
import ReactPageScroller from "react-page-scroller";
import HomePageOne from './home-component-page-1';
import HomePageTwo from './home-component-page-2';
// import TextLoop from 'react-text-loop';

class Home extends Component {


  constructor(props) {
      super(props);
      this.state = {currentPage: 1};
      this._pageScroller = null;
  }

  goToPage = (eventKey) => {
      this._pageScroller.goToPage(eventKey);
  };

  pageOnChange = (number) => {
    console.log(number)
    if(number === 1){
      this.refs.pageone.appear();
    }
    if(number === 2){
      this.refs.pageone.disappear();
    }

  };

  render(){
    return(
      <ReactPageScroller animationTimer={600} pageOnChange={this.pageOnChange} ref={c => this.reactPageScroller = c}>
        <HomePageOne ref='pageone'/>
        <HomePageTwo />
      </ReactPageScroller>
    );
  }
}

export default Home;
