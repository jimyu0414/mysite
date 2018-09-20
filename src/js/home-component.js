import React, {Component} from 'react';
import ReactPageScroller from "react-page-scroller";
import HomePageOne from './home-component-page-1';
import HomePageTwo from './home-component-page-2';
import PropTypes from 'prop-types';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

class Home extends Component {

  static propTypes = {
    scrollUnavailable: PropTypes.func,
  }

  constructor(props) {
      super(props);
      this.state = {currentPage: 1};
      this._pageScroller = null;
  }

  goToPage = (eventKey) => {
      this._pageScroller.goToPage(eventKey);
  };

  pageOnChange = (number) => {
    if(number === 1){
      this.refs.pageone.appear();
    }
    if(number === 2){
      this.refs.pageone.disappear();
    }

  };



  stopScroll = () => {

  }

  render(){
    return(
      <ReactPageScroller scrollUnavailable={this.stopScroll} animationTimer={600} pageOnChange={this.pageOnChange} ref={c => this.reactPageScroller = c}>
        <HomePageOne ref='pageone'/>
        <HomePageTwo />
      </ReactPageScroller>

    );
  }
}

export default Home;
