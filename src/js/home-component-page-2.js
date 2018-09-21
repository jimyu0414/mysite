import React from 'react';
import SVG from './svg';
import MyGoogleMap from './google-map-component';
import GoogleMaps from 'simple-react-google-maps';
import sheepGif from '../img/smoke-sheep.gif';
class HomePageTwo extends React.Component{

render(){

    return(
      <div className="front-page front-page-about front-page-scroll-enable">
        <div className="container">
          <div className="front-page__content frontSecondPageContent">

            <div className="frontSecondPageContent__contact">
              <div className="frontSecondPageContent__contact--avatar">
                <div className="my-avatar"></div>
                <h3>Yu Liu</h3>
                <p>[ Web  Developer ]</p>
                <div>
                  <span className='svg-icon'><SVG name='phone' className='icon-phone'/></span>
                  <span className='svg-icon'><SVG name='email' className='icon-email'/></span>
                </div>
              </div>
              <div className="frontSecondPageContent__contact--info">
                  <table>
                    <tbody>
                    <tr>
                      <td><SVG name='company'/></td>
                      <td>: &nbsp; Just Group</td>
                    </tr>
                      <tr>
                        <td><SVG name='profession' /></td>
                        <td>: &nbsp; Web Developer</td>
                      </tr>
                      <tr>
                        <td><SVG name='mobile' /></td>
                        <td>: &nbsp; 0410470100</td>
                      </tr>
                      <tr>
                        <td><SVG name='location' /></td>
                        <td>: &nbsp; Melbourne, Vic</td>
                      </tr>
                    </tbody>
                  </table>
              </div>
              {/* <div className="frontSecondPageContent__contact--map">
                  <MyGoogleMap />
              </div> */}
            </div>

            <div className="frontSecondPageContent__timeline">
            </div>

          </div>


          {/* <div className="front-page__image">
                <img src={sheepGif} alt='sheep' />
          </div> */}

        </div>
      </div>
    );
  }
}

export default HomePageTwo;
