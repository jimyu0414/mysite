import React from 'react';
import HomePageOne from './home-component-page-1';
import HomePageTwo from './home-component-page-2';

const data: any[]= [
  {
    title: 'haru',
    section: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },

]



class Container extends React.Component<any, any> {
  render() {
    const item: any = this.props.item;
    return (
        <div className="inner-container">
            <div className="sliding-block">

            </div>
            <div className={this.props.pausing ? "static-block pausing" : "static-block"}>
                <div className="section">
                    <h2 className="title">
                    {item.title}
                    </h2>
                    <p>{item.section}</p>
                </div>
            </div>
        </div>
    )
  }
}

class Slider extends React.Component<any, any> {
     containers: any[] = [];
     posMap: any[] = [];

    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            currentIndex: undefined,
            pauseIndex: undefined,
            imageOnload: false
        }
    }

    componentDidMount() {
       this.setPosMap();
        window.addEventListener('resize', this.setPosMap.bind(this));
        window.addEventListener('scroll', this.onScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll.bind(this))
    }

  render() {
    const data = [
      {
        title: 'haru',
        section: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        album: 4
      },
    ]

    const imageSrc = {
        large: 'https://unsplash.it/1200/700/?image=252',
        placeholder: 'https://unsplash.it/24/14/?image=252'
    }

    return (
      <div className="slider">
        <div className="land-page" >
            <HomePageOne />
        </div>
        {data.map((item: any, index: number) => (
            <div className={index == this.state.currentIndex ? `slider-container index-${index} current` : `slider-container index-${index}`}
                ref={(component: any) => this.containers[index] = component}>

                <div class="inner-container"><div class="static-block pausing"><HomePageTwo /></div></div>


            </div>
        ))}
      </div>
    )
  }



   setPosMap = () =>{
     this.containers.map((item: HTMLElement, index: number) => {
       this.posMap[index] = {
         from: item.offsetTop,
         to: item.offsetTop + item.scrollHeight
       }
     })
  }

   onScroll=()=> {
    const windowScrollY: any = window.scrollY;
    const pausingRange: any = window.scrollY + window.innerHeight;

    this.posMap.map((item: any, index: number) => {
        if(windowScrollY < this.posMap[0].from) {
            this.state.currentIndex = 0;
        }else if(windowScrollY > item.from && windowScrollY < item.to) {
            this.state.currentIndex = index + 1;
        }

        if(pausingRange > item.from && pausingRange < item.to) {
            this.state.pauseIndex = index;
        }

    })
    this.setState(this.state);
  }

}

// ReactDOM.render(<Slider data={data} />,document.getElementById('root'));
export default Slider;
