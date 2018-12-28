import React from 'react';
import SVG from './svg';
import MyGoogleMap from './google-map-component';

import LOGOJUST from '../img/logo-justgroup.gif';
import LOGOLADOO from '../img/logo-ladoo.png';
import LOGOCENTRORA from '../img/logo-centrora.png';
import LGOGOFLY from '../img/logo-fly.png';

class HomePageTwo extends React.Component{

  state = {
    justGroupActive: false,
    ladooActive: true,
    centroraActive: true,
    flyActive:true,
    refJustGroup : 'frontSecondPageContent__companyReference--company',
    refLadoo: 'frontSecondPageContent__companyReference--company displayNone',
    refCentrora: 'frontSecondPageContent__companyReference--company displayNone',
    refFly: 'frontSecondPageContent__companyReference--company displayNone',
  }

toggleJustGroup = () => {
  const current = this.state.justGroupActive;
  this.setState({
    justGroupActive: !current,
    refJustGroup : 'frontSecondPageContent__companyReference--company',
    refLadoo: 'frontSecondPageContent__companyReference--company displayNone',
    refCentrora: 'frontSecondPageContent__companyReference--company displayNone',
    refFly: 'frontSecondPageContent__companyReference--company displayNone',
  })
}

toggleLadoo = () => {
  const current = this.state.ladooActive;
  this.setState({
    ladooActive: !current,
    refJustGroup : 'frontSecondPageContent__companyReference--company displayNone',
    refLadoo: 'frontSecondPageContent__companyReference--company',
    refCentrora: 'frontSecondPageContent__companyReference--company displayNone',
    refFly: 'frontSecondPageContent__companyReference--company displayNone',
  })
}

toggleCentrora = () => {
  const current = this.state.centroraActive;
  this.setState({
    centroraActive: !current,
    refJustGroup : 'frontSecondPageContent__companyReference--company displayNone',
    refLadoo: 'frontSecondPageContent__companyReference--company displayNone',
    refCentrora: 'frontSecondPageContent__companyReference--company',
    refFly: 'frontSecondPageContent__companyReference--company displayNone',
  })
}

toggleFlyIT = () => {
  const current = this.state.flyActive;
  this.setState({
    flyActive: !current,
    refJustGroup : 'frontSecondPageContent__companyReference--company displayNone',
    refLadoo: 'frontSecondPageContent__companyReference--company displayNone',
    refCentrora: 'frontSecondPageContent__companyReference--company displayNone',
    refFly: 'frontSecondPageContent__companyReference--company',
  })
}

render(){

  const justlogostyle ={
    marginTop: '1rem',
  }

    return(
      <div className="front-page front-page-about front-page-scroll-enable">
        <div className="container">
          <div className="frontSecondPageContent">

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
              <div className="frontSecondPageContent__timeline__positionWrapper" onClick={this.toggleJustGroup}>
                <span className="timeline-icon"><SVG name='briefcase' className='icon-briefcase'/></span>
                <div className="frontSecondPageContent__timeline--worktitle">THE JUST GROUP PTY LTD<span>Web Designer & Developer</span></div>
                <span className="frontSecondPageContent__timeline--years">
                  Sep 2017 - <b>Now</b>
                </span>
              </div>

              <div className={this.state.justGroupActive ? 'frontSecondPageContent__timeline__detailWrapper workdropdownreverse displayNone' : 'frontSecondPageContent__timeline__detailWrapper workdropdown'}>
                <div className='connect-line'></div>
                <div className='marker-what-i-do'>What I do</div>
                  <table>
                  <tbody>
                    <tr>
                    <td></td>
                    <td>Building Brand new responsive website design for Just Jeans, Peteralexander, Smiggle, Dotti and Portmans websites.</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Migrating the new responsive design into the old website, while adding new interactions and functions.</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Cross browser and device testing</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Technique used: Responsive design(AI,PS), HTML5, CSS3,SASS,BEM, Javascript, jQuery,React Git</td>
                  </tr>
                </tbody>
                  </table>
              </div>

              <div className="frontSecondPageContent__timeline__positionWrapper" onClick={this.toggleLadoo}>
                <span className="timeline-icon"><SVG name='briefcase' className='icon-briefcase'/></span>
                <div className="frontSecondPageContent__timeline--worktitle">Ladoo PTY LTD<span>Front-end developer</span></div>
                <span className="frontSecondPageContent__timeline--years">
                  Sep 2016 – May 2017
                </span>
              </div>

              <div className={this.state.ladooActive ? 'frontSecondPageContent__timeline__detailWrapper workdropdownreverse displayNone' : 'frontSecondPageContent__timeline__detailWrapper workdropdown'}>
                <div className='connect-line'></div>
                <div className='marker-what-i-do'>Things I do</div>
                  <table>
                  <tbody>
                    <tr>
                    <td></td>
                    <td>Write standards responsive compliant HTML code and Sass with Company UI frame works.</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Write custom JavaScript code with knowledge of JavaScript and jQuery.</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Implementing solutions using the Content Management System (Squiz Matrix).</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Handle accessibility and usability with knowledge of cross browser compatibility and testing</td>
                  </tr>
                </tbody>
                  </table>
              </div>


              <div className="frontSecondPageContent__timeline__positionWrapper" onClick={this.toggleCentrora}>
                <span className="timeline-icon"><SVG name='briefcase' className='icon-briefcase'/></span>
                <div className="frontSecondPageContent__timeline--worktitle">Centrora Security (Luxur Group)<span>Front-end developer</span></div>
                <span className="frontSecondPageContent__timeline--years">
                    Dec 2015 – Sep 2016
                </span>
              </div>

              <div className={this.state.centroraActive ? 'frontSecondPageContent__timeline__detailWrapper workdropdownreverse displayNone' : 'frontSecondPageContent__timeline__detailWrapper workdropdown'}>
                <div className='connect-line'></div>
                <div className='marker-what-i-do'>Things I do</div>
                  <table>
                  <tbody>
                    <tr>
                    <td></td>
                    <td>Applying PHP and CSS language in improving front-end layouts of web security system.</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Using Photoshop and Illustrator to create mockups for the front-end layout of Centrora System (updating versions).</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Improve the UI of Centrora new control panel</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Testing the software in different browsers to ensure the front-end UI is user friendly and working properly.</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Using PHP, HTML, CSS to implement the design provided by Centrora marketing group for the new website.</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Maintain Centrora website with CMS (Wordpress).</td>
                  </tr>
                </tbody>
                  </table>
              </div>



                  <div className="frontSecondPageContent__timeline__positionWrapper" onClick={this.toggleFlyIT}>
                              <span className="timeline-icon"><SVG name='briefcase' className='icon-briefcase'/></span>
                              <div className="frontSecondPageContent__timeline--worktitle">FLY ON IT<span>iOS Developer</span></div>
                              <span className="frontSecondPageContent__timeline--years">
                                  Dec 2015 – Sep 2016
                              </span>
                            </div>

                            <div className={this.state.flyActive ? 'frontSecondPageContent__timeline__detailWrapper workdropdownreverse displayNone' : 'frontSecondPageContent__timeline__detailWrapper workdropdown'}>
                              <div className='connect-line'></div>
                              <div className='marker-what-i-do'>Things I do</div>
                                <table>
                                <tbody>
                                  <tr>
                                  <td></td>
                                  <td><h4>Business Analysis</h4>Gather and document project requirements
<br/>Create project plan
</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td><h4>Interface Design & Development</h4>UI / UX design<br/>
Mock up user interface of applications (with documented UIKit)<br/>
Graphic content Support
</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>
                                    <h4>Software Development</h4>
                                    OO design<br/>
                                    iOS SDK, Xcode, Objective-c, Interface Builder etc.
                                  </td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td><h4>Unit Testing.</h4></td>
                                </tr>
                              </tbody>
                                </table>
                            </div>

            </div>

            <div className='frontSecondPageContent__companyReference'>

              <div className={this.state.refJustGroup}>
              <img style={{margin:'1.5rem 0 1rem 0',}} src={LOGOJUST}/>
                <h4>Company Reference:</h4>
                <a target="_blank" href="http://www.justgroup.com.au/">http://www.justgroup.com.au/</a>
                <h4>Project Reference:</h4>
                <ul>
                  <li>
                    <p>Peteralexander</p>
                    <a target="_blank" href="https://www.peteralexander.com.au">
                    https://www.peteralexander.com.au</a>
                  </li>
                  <li>
                    <p>Smiggle</p>
                    <a target="_blank" href="https://www.smiggle.com.au/">
                    https://www.smiggle.com.au</a>
                  </li>
                  <li>
                    <p>Portmans</p>
                    <a target="_blank" href="https://www.portmans.com.au">
                    https://www.portmans.com.au</a>
                  </li>
                  <li>
                    <p>Dotti</p>
                    <a target="_blank" href="https://www.dotti.com.au">
                    https://www.dotti.com.au</a>
                  </li>
                  <li>
                    <p>Jacquie</p>
                    <a target="_blank" href="https://www.jacquie.com.au">
                    https://www.jacquie.com.au</a>
                  </li>
                  <li>
                    <p>Just Jeans</p>
                    <a target="_blank" href="https://www.justjeans.com.au">
                    https://www.justjeans.com.au</a>
                  </li>
                  <li>
                    <p>Jayjays</p>
                    <a target="_blank" href="https://www.jayjays.com.au">
                    https://www.jayjays.com.au</a>
                  </li>
                </ul>
              </div>

              <div className={this.state.refLadoo}>
                <img src={LOGOLADOO}/>
                <h4>Company Reference:</h4>
                <a target="_blank" href="https://ladoo.com.au/">https://ladoo.com.au/</a>
                <h4>Project Reference:</h4>
                <ul>
                  <li>
                    <p>DELWP</p>
                    <a target="_blank" href="https://www.environment.vic.gov.au/">
                    https://www.environment.vic.gov.au</a>
                  </li>
                  <li>
                    <p>Urban Design Guidelines</p>
                    <a target="_blank" href="http://www.urban-design-guidelines.planning.vic.gov.au">
                    http://www.urban-design-guidelines.planning.vic.gov.au</a>
                  </li>
                  <li>
                    <p>Cags</p>
                    <a target="_blank" href="http://www.cagsinfo.net/">
                    http://www.cagsinfo.net</a>
                  </li>
                  <li>
                    <p>Plan Melbourne</p>
                    <a target="_blank" href="https://www.planning.vic.gov.au/">
                    https://www.planning.vic.gov.au/</a>
                  </li>
                </ul>
              </div>

              <div className={this.state.refCentrora}>
                <img src={LOGOCENTRORA}/>
                <h4>Company Reference:</h4>
                <a target="_blank" href="https://www.centrora.com/">https://www.centrora.com/</a>
                <h4>Project Reference:</h4>
              </div>

              <div className={this.state.refFly}>
                <img src={LGOGOFLY}/>
                <h4>Company Reference:</h4>
                <a target="_blank" href="https://www.flyonit.com.au/">https://www.flyonit.com.au/</a>
                <h4>Project Reference:</h4>
              </div>

            </div>

          </div>



        </div>

      </div>
    );
  }
}

export default HomePageTwo;
