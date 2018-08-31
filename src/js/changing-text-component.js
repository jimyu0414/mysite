import React, {Component} from 'react';

class ChangingText extends Component{
  state = {
    textArray: ['WEB DESIGNER','FRONT-END DEVELOPER','GUITAR PLAYER','SNOWBOARDER','INTERPRETER'],
    text: 'DIGITAL DESIGNER',
    textCount: 0,
  }

  changeText = (count) => {
    const textArray = this.state.textArray;
    if(count > 4) count = 0;
    this.setState({
      text: textArray[count],
      textCount: count + 1,
    })
  }

  componentDidMount(){
     this.updateProfession = setInterval( ()=> this.changeText(this.state.textCount), 3000)
  }

  componentWillUnmount(){
    clearInterval(this.updateProfession)
  }

  render(){
    return (<h2>{this.state.text}</h2>)
  }

}

export default ChangingText;
