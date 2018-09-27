import React, {Component} from 'react';
import PropTypes from 'prop-types';
class SVG extends Component{

  static propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    fillColor: PropTypes.string,
  };

  render(){
    let svg;
    switch(this.props.name){
      case "linkedin":{
          svg = <svg className={this.props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"/></svg>
        break;
      }
      case "facebook":{
        svg = <svg className={this.props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512"><path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"/></svg>
        break;
      }
      case "github":{
        svg = <svg className={this.props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
        </svg>
        break;
      }

      case "chat":{
        svg = <svg className={this.props.className} xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 400.8 400.8">
              <g>
              	<g>
              		<path d="M241.44,15.96c-84.96,0-154.32,53.2-158.8,120C33.04,151.96,0,190.52,0,233.4c0.946,31.575,17.215,60.71,43.6,78.08v67.36
              			c0,3.314,2.686,6,5.999,6.001c1.513,0,2.971-0.572,4.081-1.601l51.36-47.04c8.833,1.447,17.769,2.17,26.72,2.16
              			c56,0,105.28-27.84,124-69.6c6.24-0.48,12.48-1.12,18.72-2.16l63.04,57.68c2.43,2.253,6.226,2.11,8.479-0.319
              			c1.029-1.11,1.601-2.567,1.601-4.081v-82.72c33.84-24,53.2-58.32,53.2-94.48C400.72,72.84,329.28,15.96,241.44,15.96z
              			 M131.76,326.36c-9.23,0.011-18.441-0.82-27.52-2.48c-1.838-0.344-3.731,0.188-5.12,1.44l-43.44,40v-57.04
              			c-0.004-1.989-0.992-3.846-2.64-4.96C26.8,285.64,12,259.88,12,233.32c0-36.48,27.92-69.68,70.24-84.72
              			c0.411,5.4,1.294,10.754,2.64,16c5.902,24.347,19.375,46.195,38.48,62.4c1.12,1.04,41.76,41.04,118.96,42
              			C223.68,303.8,180.64,326.36,131.76,326.36z M338.16,229.08c-1.648,1.114-2.636,2.971-2.64,4.96v72l-55.2-50.48
              			c-1.11-1.029-2.567-1.6-4.08-1.6h-1.12c-10.554,1.961-21.265,2.951-32,2.96c-58.08,0-93.2-22.56-110.4-37.04
              			c-17.531-15.183-30.262-35.142-36.64-57.44c-1.551-6.582-2.356-13.318-2.4-20.08c0.48-62.88,66.56-114.48,147.76-114.48
              			S388.72,79.32,388.72,142.6C388.72,175.72,370.32,207.24,338.16,229.08z"/>
              	</g>
              </g>
              </svg>
        break;
      }

      case "hint":{
        svg = <svg className={this.props.className} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 512.001 512.001">
<g>
	<g>
		<path d="M354.675,180.814h-22.714c-1.387-4.402-3.151-8.664-5.28-12.753L342.741,152c2.007-2.007,3.112-4.676,3.112-7.515
			c0-2.84-1.105-5.509-3.112-7.516l-18.901-18.902c-4.144-4.141-10.886-4.143-15.031,0.001l-16.061,16.061
			c-4.089-2.129-8.352-3.894-12.753-5.28v-22.715c-0.001-5.86-4.769-10.629-10.63-10.629h-26.731
			c-5.86,0-10.628,4.768-10.628,10.629v22.715c-4.402,1.387-8.664,3.151-12.754,5.28l-16.062-16.062
			c-4.144-4.142-10.886-4.141-15.03,0.001l-18.9,18.9c-2.008,2.007-3.114,4.676-3.114,7.516c0,2.839,1.106,5.508,3.113,7.515
			l16.061,16.061c-2.129,4.089-3.894,8.352-5.28,12.753h-22.715c-5.86,0-10.628,4.768-10.628,10.629v26.731
			c0,5.86,4.768,10.628,10.628,10.628h22.715c1.387,4.401,3.151,8.665,5.28,12.753l-16.061,16.061
			c-4.144,4.144-4.144,10.887,0,15.031l18.901,18.901c4.144,4.145,10.888,4.144,15.031,0l16.061-16.061
			c4.089,2.129,8.353,3.894,12.754,5.28v22.715c0,5.86,4.768,10.628,10.628,10.628h26.731c5.86,0,10.629-4.768,10.629-10.628
			v-22.715c4.4-1.386,8.664-3.151,12.753-5.28l16.061,16.061c4.145,4.145,10.888,4.144,15.032,0l18.9-18.901
			c2.007-2.007,3.112-4.676,3.112-7.515c0-2.839-1.105-5.508-3.112-7.516l-16.061-16.061c2.129-4.089,3.894-8.352,5.28-12.753
			h22.715c5.86,0,10.629-4.768,10.629-10.628v-26.731C365.304,185.582,360.535,180.814,354.675,180.814z M350.305,213.801h-24.059
			c-3.484,0-6.509,2.399-7.303,5.792c-1.599,6.835-4.283,13.318-7.978,19.267c-1.839,2.96-1.396,6.796,1.067,9.261l17.011,17.011
			l-12.718,12.718l-17.011-17.011c-2.464-2.464-6.3-2.908-9.262-1.068c-5.95,3.695-12.433,6.379-19.266,7.979
			c-3.393,0.793-5.792,3.818-5.792,7.303v24.06h-17.985v-24.06c0-3.484-2.399-6.509-5.792-7.303
			c-6.833-1.598-13.316-4.282-19.267-7.979c-2.959-1.836-6.796-1.396-9.261,1.068l-17.011,17.011l-12.718-12.718l17.011-17.011
			c2.464-2.464,2.906-6.3,1.068-9.261c-3.695-5.95-6.379-12.433-7.978-19.267c-0.793-3.393-3.819-5.792-7.303-5.792h-24.059v-17.985
			h24.059c3.484,0,6.509-2.399,7.303-5.792c1.599-6.834,4.283-13.317,7.978-19.267c1.838-2.96,1.396-6.796-1.068-9.261
			l-17.011-17.011l12.718-12.718l17.011,17.011c2.462,2.464,6.3,2.907,9.261,1.068c5.949-3.695,12.432-6.379,19.267-7.978
			c3.393-0.793,5.792-3.818,5.792-7.303v-24.06h17.985v24.06c0,3.484,2.399,6.509,5.792,7.303
			c6.834,1.599,13.316,4.283,19.267,7.978c2.958,1.837,6.796,1.394,9.261-1.068l17.011-17.011l12.718,12.718l-17.011,17.011
			c-2.464,2.464-2.906,6.3-1.067,9.261c3.694,5.948,6.378,12.431,7.978,19.267c0.794,3.393,3.818,5.792,7.303,5.792h24.059V213.801z
			"/>
	</g>
</g>
<g>
	<g>
		<path d="M256,164.628c-22.156,0-40.18,18.025-40.18,40.18s18.025,40.18,40.18,40.18s40.18-18.025,40.18-40.18
			C296.18,182.653,278.156,164.628,256,164.628z M256,229.988c-13.884,0-25.18-11.296-25.18-25.18s11.296-25.18,25.18-25.18
			c13.884,0,25.18,11.296,25.18,25.18S269.884,229.988,256,229.988z"/>
	</g>
</g>
<g>
	<g>
		<path d="M83.574,197.308H58.692c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h24.882c4.142,0,7.5-3.358,7.5-7.5
			S87.716,197.308,83.574,197.308z"/>
	</g>
</g>
<g>
	<g>
		<path d="M453.309,197.308h-24.882c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h24.882c4.143,0,7.5-3.358,7.5-7.5
			S457.451,197.308,453.309,197.308z"/>
	</g>
</g>
<g>
	<g>
		<path d="M139.379,321.429c-2.928-2.929-7.677-2.929-10.607,0l-17.594,17.594c-2.929,2.929-2.929,7.678,0,10.607
			c2.929,2.929,7.678,2.929,10.607,0l17.594-17.594C142.308,329.107,142.308,324.358,139.379,321.429z"/>
	</g>
</g>
<g>
	<g>
		<path d="M400.822,59.988c-2.93-2.929-7.678-2.929-10.608,0L372.62,77.582c-2.929,2.929-2.929,7.678,0,10.607
			c2.93,2.929,7.678,2.928,10.608,0l17.594-17.594C403.751,67.665,403.751,62.916,400.822,59.988z"/>
	</g>
</g>
<g>
	<g>
		<path d="M256.001,0c-4.143,0-7.5,3.358-7.5,7.5v24.882c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5V7.5
			C263.501,3.358,260.144,0,256.001,0z"/>
	</g>
</g>
<g>
	<g>
		<path d="M400.822,339.023l-17.594-17.594c-2.93-2.929-7.678-2.929-10.608,0c-2.929,2.929-2.929,7.679,0,10.607l17.594,17.594
			c2.93,2.929,7.678,2.929,10.608,0C403.751,346.701,403.751,341.952,400.822,339.023z"/>
	</g>
</g>
<g>
	<g>
		<path d="M139.379,77.582l-17.594-17.594c-2.929-2.929-7.678-2.929-10.607,0c-2.929,2.929-2.929,7.678,0,10.607l17.594,17.594
			c2.929,2.929,7.678,2.929,10.607,0C142.308,85.259,142.308,80.51,139.379,77.582z"/>
	</g>
</g>
<g>
	<g>
		<path d="M405.629,186.435c-8.071-68.875-62.668-123.477-131.22-131.833c-4.105-0.505-7.852,2.426-8.354,6.537
			c-0.501,4.112,2.426,7.852,6.538,8.354c62.257,7.588,110.837,56.395,118.136,118.688c0.447,3.817,3.688,6.627,7.439,6.627
			c0.292,0,0.586-0.017,0.883-0.051C403.167,194.276,406.111,190.55,405.629,186.435z"/>
	</g>
</g>
<g>
	<g>
		<path d="M398.963,214.868c-4.116-0.524-7.863,2.389-8.383,6.499c-5.113,40.388-27.909,76.025-62.543,97.77
			c-14.931,9.375-23.844,25.419-23.844,42.917v30.867h-96.383v-31.55c0-16.944-8.855-32.952-23.108-41.775
			c-40.306-24.95-64.37-68.107-64.371-115.446c0-68.352,51.198-126.238,119.091-134.648c4.111-0.509,7.03-4.255,6.521-8.366
			c-0.509-4.11-4.253-7.037-8.366-6.521c-75.015,9.293-132.25,73.803-132.249,149.535c0,26.133,6.797,51.881,19.658,74.461
			c12.467,21.89,30.386,40.472,51.818,53.739c9.871,6.11,16.002,17.23,16.002,29.02v32.643c-7.626,2.65-13.125,9.892-13.125,18.409
			v10.692c0,4.527,1.564,8.688,4.161,12.001c-2.598,3.313-4.161,7.473-4.161,12.001v10.691c0,10.753,8.749,19.501,19.501,19.501
			h23.58v16.955c0,9.781,7.957,17.738,17.737,17.738h30.997c9.781,0,17.737-7.957,17.737-17.738v-16.955h23.58
			c10.753,0,19.501-8.749,19.501-19.501v-10.691c0-4.527-1.564-8.688-4.162-12.001c2.598-3.313,4.162-7.473,4.162-12.001v-10.692
			c0-8.518-5.498-15.759-13.125-18.409v-31.96c0-12.305,6.287-23.599,16.82-30.212c38.454-24.144,63.768-63.724,69.447-108.59
			C405.981,219.141,403.072,215.388,398.963,214.868z M274.235,494.262c0,1.483-1.253,2.737-2.736,2.737h-30.997
			c-1.483,0-2.736-1.253-2.736-2.737v-16.955h36.469V494.262z M317.317,457.806c0,2.439-2.061,4.5-4.5,4.5
			c-13.24,0-101.138,0-113.632,0c-2.439,0-4.5-2.061-4.5-4.5v-10.691c0-2.439,2.061-4.5,4.5-4.5h113.632c2.439,0,4.5,2.061,4.5,4.5
			V457.806z M317.317,423.113c0,2.439-2.061,4.5-4.5,4.5H199.185c-2.439,0-4.5-2.061-4.5-4.5v-10.692c0-2.439,2.061-4.5,4.5-4.5
			h113.632c2.439,0,4.5,2.061,4.5,4.5V423.113z"/>
	</g>
</g>
</svg>
        break;
      }

      case "pencup":{
        svg = <svg  className={this.props.className} viewBox="-46 0 512 512"  xmlns="http://www.w3.org/2000/svg"><path d="m230 260c5.519531 0 10-4.480469 10-10s-4.480469-10-10-10-10 4.480469-10 10 4.480469 10 10 10zm0 0"/><path d="m90 512h160c46.246094 0 84.449219-35.0625 89.441406-80h30.558594c27.570312 0 50-22.429688 50-50v-92c0-27.570312-22.429688-50-50-50h-30c0-8.535156 0-221.570312 0-230 0-5.523438-4.476562-10-10-10h-80c-5.523438 0-10 4.476562-10 10v190h-40v-70.019531c12.460938-9.371094 20-24.183594 20-39.980469 0-24.746094-9.304688-37.660156-29.285156-67.144531-3.65625-5.394531-7.800782-11.507813-12.394532-18.402344-1.851562-2.78125-4.976562-4.453125-8.320312-4.453125s-6.464844 1.671875-8.320312 4.453125c-4.566407 6.851563-8.691407 12.933594-12.332032 18.304687-21.355468 31.5-29.347656 43.289063-29.347656 67.242188 0 15.800781 7.539062 30.613281 20 39.980469v70.019531h-40v-110c0-1.566406-.417969-3.199219-1.054688-4.472656l-40-80c-1.695312-3.386719-5.15625-5.527344-8.945312-5.527344s-7.25 2.140625-8.945312 5.527344l-40 80c-.644532 1.289062-1.054688 2.933594-1.054688 4.472656v332c0 49.625 40.375 90 90 90zm280-252c16.542969 0 30 13.457031 30 30v92c0 16.542969-13.457031 30-30 30h-30v-152zm-110-80h20c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-20v-20h20c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-20v-20h20c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-20v-20h20c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-20v-20h60v180h-60zm-94.097656-146.019531c1.304687-1.925781 2.667968-3.941407 4.09375-6.050781 1.453125 2.148437 2.839844 4.191406 4.164062 6.148437 20.558594 30.332031 25.839844 38.277344 25.839844 55.921875 0 10.730469-5.792969 20.714844-15.117188 26.050781v.003907c-4.511718 2.582031-9.65625 3.945312-14.882812 3.945312-16.816406 0-30-13.722656-30-30 0-17.8125 5.488281-25.90625 25.902344-56.019531zm-5.902344 105c3.28125.667969 6.628906 1.019531 10 1.019531s6.71875-.351562 10-1.019531v61.019531h-20zm-100 61.019531v-100h20v100zm-40 0v-100h20v100zm30-167.640625 23.820312 47.640625h-47.640624zm-30 187.640625h300v202c0 38.597656-31.402344 70-70 70h-160c-38.597656 0-70-31.402344-70-70zm0 0"/><path d="m110 260h80c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-80c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10zm0 0"/>
        </svg>
        break;
      }

      case "guitar": {
        svg = <svg className={this.props.className} xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 465.072 465.072">
          <g>
          	<path d="M85.266,308.804c-2.929-2.927-7.677-2.929-10.607,0c-2.929,2.93-2.929,7.678,0,10.607l70.997,70.998
          		c1.465,1.464,3.384,2.196,5.304,2.196c1.919,0,3.839-0.732,5.304-2.196c2.929-2.93,2.929-7.678,0-10.607L85.266,308.804z"/>
          	<path d="M464.423,53.43c0.201-0.866,4.711-21.407-13.333-39.452C433.045-4.066,412.505,0.441,411.638,0.645
          		c-1.366,0.316-2.616,1.011-3.608,2.002l-2.88,2.88l-1.768-1.768c-2.93-2.928-7.677-2.929-10.606,0.001
          		c-2.929,2.929-2.929,7.678,0.001,10.606l1.767,1.767l-7.986,7.986l-1.768-1.768c-2.93-2.928-7.677-2.929-10.606,0.001
          		c-2.929,2.929-2.929,7.678,0.001,10.606l1.767,1.767l-7.986,7.986l-1.768-1.768c-2.93-2.928-7.678-2.928-10.607,0
          		c-2.929,2.93-2.929,7.678,0,10.607l3.249,3.249l-11.219,22.438l-80.766,77.747c-16.543-12.764-49.225-31.294-83.268-13.071
          		c-22.692,12.115-28.734,27.553-34.064,41.173c-4.247,10.853-7.915,20.225-19.394,28.731c-5.339,3.952-15.196,5.917-26.61,8.192
          		c-28.515,5.684-67.567,13.468-93.229,60.904c-30.572,56.524,14.76,111.313,35.693,132.269l5.939,5.929
          		c15.912,15.911,51.405,45.96,92.376,45.96c12.89-0.001,26.323-2.976,39.858-10.3c47.438-25.661,55.223-64.704,60.906-93.212
          		c2.275-11.411,4.24-21.266,8.191-26.603c8.504-11.482,17.878-15.152,28.732-19.401c13.623-5.333,29.064-11.378,41.169-34.063
          		c18.224-34.048-0.311-66.731-13.078-83.274l77.735-80.754l22.461-11.231l3.244,3.243c1.465,1.464,3.384,2.196,5.303,2.196
          		s3.839-0.732,5.304-2.197c2.929-2.929,2.929-7.678-0.001-10.606l-1.767-1.767l7.986-7.986l1.767,1.767
          		c1.465,1.464,3.385,2.196,5.304,2.196s3.839-0.732,5.304-2.196c2.929-2.93,2.929-7.678,0-10.607l-1.767-1.767l7.985-7.985
          		l1.767,1.767c1.465,1.464,3.385,2.196,5.304,2.196s3.839-0.732,5.304-2.196c2.929-2.93,2.929-7.678,0-10.607l-1.767-1.767
          		l2.879-2.879C463.412,56.046,464.107,54.796,464.423,53.43z M309.925,274.423c-9.501,17.807-20.58,22.145-33.407,27.166
          		c-11.365,4.449-24.246,9.492-35.32,24.443c-5.949,8.037-8.219,19.417-10.846,32.596c-5.387,27.018-12.091,60.642-53.334,82.952
          		c-47.683,25.804-95.949-14.535-114.479-33.064l-5.968-5.957c-18.535-18.555-58.861-66.855-33.089-114.507
          		c22.31-41.24,55.942-47.943,82.968-53.331c13.181-2.627,24.564-4.896,32.605-10.849c14.947-11.077,19.987-23.956,24.435-35.318
          		c5.019-12.825,9.354-23.9,27.167-33.411c25.473-13.636,51.046-0.133,65.255,10.375l-48.613,46.795
          		c-0.711-0.031-1.424-0.052-2.14-0.052c-12.778,0-24.779,4.965-33.788,13.973c-9.008,8.989-13.968,20.968-13.965,33.729
          		c0.002,12.761,4.967,24.738,13.968,33.713c8.998,9.011,20.983,13.974,33.749,13.974s24.746-4.964,33.716-13.959
          		c9.001-8.963,13.967-20.926,13.982-33.687c0.001-0.753-0.019-1.504-0.052-2.251l46.775-48.592
          		C310.054,223.369,323.562,248.944,309.925,274.423z M209.293,227.527c7.171,0.894,13.793,4.096,18.959,9.252
          		c5.177,5.181,8.393,11.807,9.297,18.982c0.008,0.076,0.018,0.152,0.028,0.228c0.157,1.316,0.245,2.649,0.243,3.997
          		c-0.011,8.748-3.408,16.942-9.585,23.094c-6.153,6.171-14.362,9.569-23.113,9.569c-8.755,0-16.971-3.399-23.146-9.584
          		c-6.17-6.152-9.569-14.358-9.57-23.105c-0.002-8.747,3.394-16.954,9.565-23.113c6.182-6.181,14.416-9.585,23.188-9.585
          		c1.318,0,2.621,0.086,3.909,0.238C209.142,227.509,209.217,227.519,209.293,227.527z M248.66,240.392
          		c-2.344-5.231-5.634-10.049-9.805-14.223c-4.16-4.151-8.964-7.426-14.181-9.76L353.647,92.256l19.152,19.175L248.66,240.392z
          		 M450.041,48.204l-6.391,6.391c-0.007,0.007-0.014,0.012-0.02,0.018c-0.007,0.007-0.012,0.014-0.018,0.02l-18.554,18.554
          		c-0.007,0.007-0.014,0.012-0.02,0.018c-0.007,0.007-0.012,0.014-0.018,0.02l-17.73,17.73l-22.502,11.251l-21.913-21.938
          		l11.254-22.508l42.729-42.729c4.118-0.302,14.189,0.116,23.625,9.553C449.943,34.045,450.341,44.143,450.041,48.204z"/>
          </g>
          </svg>
        break;
      }

      case "snowboard":{
        svg = <svg  className={this.props.className} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 188.737 188.737" ><path d="M29.54,188.737c-7.471,0-14.941-2.844-20.628-8.531l-0.381-0.381c-11.374-11.375-11.374-29.883,0-41.257L138.568,8.531
    	c11.373-11.375,29.883-11.375,41.256,0l0.383,0.384c11.373,11.372,11.373,29.88-0.002,41.254L50.168,180.206
    	C44.481,185.894,37.011,188.737,29.54,188.737z M159.196,4.987c-6.457,0-12.527,2.514-17.093,7.079L12.066,142.104
    	c-9.425,9.425-9.425,24.761,0,34.187l0.381,0.381c4.565,4.565,10.636,7.08,17.093,7.08s12.527-2.515,17.093-7.08L176.67,46.634
    	c4.565-4.565,7.08-10.636,7.08-17.093s-2.515-12.527-7.08-17.093l-0.384-0.384C171.724,7.501,165.653,4.987,159.196,4.987z
    	 M181.883,178.114h-69.18c-1.321,0-2.415-1.028-2.495-2.348c-0.031-0.508-0.674-12.511,6.985-18.259
    	c3.478-2.608,8.025-3.354,12.423-4.075c4.408-0.723,8.947-1.467,12.455-4.055c0.021-0.016,0.042-0.031,0.063-0.047
    	c0.461-0.345,0.904-0.722,1.327-1.135c1.31-1.281,2.574-3.373,3.739-5.832c0.005-0.011,0.01-0.021,0.015-0.031
    	c0.015-0.034,0.031-0.068,0.048-0.102c1.346-2.861,2.558-6.205,3.556-9.344c0.015-0.057,0.032-0.112,0.052-0.169
    	c0.004-0.011,0.008-0.021,0.012-0.033c1.135-3.595,1.985-6.899,2.426-8.877c0.153-0.686,0.588-1.276,1.197-1.625
    	c0.611-0.349,1.339-0.425,2.008-0.211l26.134,8.396c1.034,0.332,1.735,1.294,1.735,2.38v42.865
    	C184.383,176.995,183.264,178.114,181.883,178.114z M115.241,173.114h64.142v-2.112h-63.918
    	C115.352,171.773,115.283,172.49,115.241,173.114z M116.826,166.002h62.557v-31.431l-21.832-7.014
    	c-0.306,1.204-0.71,2.722-1.206,4.418l4.827,1.678c1.304,0.453,1.993,1.878,1.54,3.183c-0.453,1.304-1.875,1.994-3.183,1.54
    	l-4.693-1.632c-0.607,1.775-1.289,3.604-2.039,5.375l4.43,2.01c1.258,0.57,1.814,2.052,1.244,3.31
    	c-0.569,1.256-2.049,1.815-3.309,1.243l-4.524-2.052c-1.08,1.972-2.259,3.704-3.524,4.986l2.809,3.248
    	c0.902,1.044,0.788,2.623-0.257,3.526c-1.045,0.902-2.622,0.788-3.526-0.257l-3.012-3.484c-1.859,1.06-3.829,1.789-5.817,2.334
    	l0.795,2.657c0.396,1.322-0.354,2.716-1.678,3.111c-1.326,0.398-2.716-0.355-3.111-1.678l-0.91-3.038
    	c-0.668,0.115-1.329,0.224-1.979,0.331c-3.979,0.651-7.735,1.268-10.231,3.141C118.643,162.672,117.568,164.285,116.826,166.002z
    	 M81.024,131.191c-2.788,0-5.409-1.086-7.381-3.058l-13.04-13.041c-1.972-1.971-3.058-4.592-3.058-7.381
    	c0-2.788,1.086-5.409,3.058-7.381l0.113-0.113c4.067-4.069,10.69-4.07,14.762,0l13.041,13.041c4.069,4.069,4.069,10.691,0,14.762
    	l-0.119,0.118C86.43,130.107,83.811,131.191,81.024,131.191z M68.098,102.163c-1.393,0-2.785,0.53-3.846,1.59l-0.113,0.113
    	c-1.027,1.027-1.593,2.394-1.593,3.846c0,1.453,0.565,2.818,1.593,3.846l13.04,13.041c1.027,1.027,2.394,1.593,3.846,1.593
    	c1.453,0,2.818-0.565,3.846-1.593c0.002-0.003,0.005-0.005,0.008-0.008l0.114-0.113c2.112-2.113,2.112-5.563-0.008-7.684
    	l-13.041-13.041C70.883,102.693,69.49,102.163,68.098,102.163z M120.639,91.577c-2.788,0-5.409-1.086-7.381-3.058l-13.041-13.041
    	c-4.069-4.069-4.069-10.691,0-14.762l0.122-0.121c4.06-4.062,10.683-4.063,14.754,0.008l13.04,13.041
    	c4.07,4.069,4.07,10.692,0,14.762l-0.113,0.113C126.049,90.491,123.427,91.577,120.639,91.577z M107.712,62.549
    	c-1.393,0-2.785,0.53-3.846,1.59l-0.122,0.121c-2.112,2.113-2.112,5.563,0.008,7.684l13.041,13.041
    	c1.027,1.027,2.394,1.593,3.846,1.593c1.453,0,2.818-0.565,3.846-1.593l0,0l0.113-0.113c2.12-2.12,2.12-5.571,0-7.691l-13.04-13.041
    	C110.497,63.079,109.104,62.549,107.712,62.549z"/>
    </svg>
        break;
      }

      case "phone":{
        svg = <svg className={this.props.className}  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 512.076 512.076">
<g>
			<path d="M499.639,396.039l-103.646-69.12c-13.153-8.701-30.784-5.838-40.508,6.579l-30.191,38.818
				c-3.88,5.116-10.933,6.6-16.546,3.482l-5.743-3.166c-19.038-10.377-42.726-23.296-90.453-71.04s-60.672-71.45-71.049-90.453
				l-3.149-5.743c-3.161-5.612-1.705-12.695,3.413-16.606l38.792-30.182c12.412-9.725,15.279-27.351,6.588-40.508l-69.12-103.646
				C109.12,1.056,91.25-2.966,77.461,5.323L34.12,31.358C20.502,39.364,10.511,52.33,6.242,67.539
				c-15.607,56.866-3.866,155.008,140.706,299.597c115.004,114.995,200.619,145.92,259.465,145.92
				c13.543,0.058,27.033-1.704,40.107-5.239c15.212-4.264,28.18-14.256,36.181-27.878l26.061-43.315
				C517.063,422.832,513.043,404.951,499.639,396.039z M494.058,427.868l-26.001,43.341c-5.745,9.832-15.072,17.061-26.027,20.173
				c-52.497,14.413-144.213,2.475-283.008-136.32S8.29,124.559,22.703,72.054c3.116-10.968,10.354-20.307,20.198-26.061
				l43.341-26.001c5.983-3.6,13.739-1.855,17.604,3.959l37.547,56.371l31.514,47.266c3.774,5.707,2.534,13.356-2.85,17.579
				l-38.801,30.182c-11.808,9.029-15.18,25.366-7.91,38.332l3.081,5.598c10.906,20.002,24.465,44.885,73.967,94.379
				c49.502,49.493,74.377,63.053,94.37,73.958l5.606,3.089c12.965,7.269,29.303,3.898,38.332-7.91l30.182-38.801
				c4.224-5.381,11.87-6.62,17.579-2.85l103.637,69.12C495.918,414.126,497.663,421.886,494.058,427.868z"/>
			<path d="M291.161,86.39c80.081,0.089,144.977,64.986,145.067,145.067c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533
				c-0.099-89.503-72.63-162.035-162.133-162.133c-4.713,0-8.533,3.82-8.533,8.533S286.448,86.39,291.161,86.39z"/>
			<path d="M291.161,137.59c51.816,0.061,93.806,42.051,93.867,93.867c0,4.713,3.821,8.533,8.533,8.533
				c4.713,0,8.533-3.82,8.533-8.533c-0.071-61.238-49.696-110.863-110.933-110.933c-4.713,0-8.533,3.82-8.533,8.533
				S286.448,137.59,291.161,137.59z"/>
			<path d="M291.161,188.79c23.552,0.028,42.638,19.114,42.667,42.667c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533
				c-0.038-32.974-26.759-59.696-59.733-59.733c-4.713,0-8.533,3.82-8.533,8.533S286.448,188.79,291.161,188.79z"/>
</g>
</svg>
        break;
      }

      case "email":{
          svg = <svg className={this.props.className} xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 512 512" >
<g>
			<path d="M486.4,59.733H25.6c-14.138,0-25.6,11.461-25.6,25.6v341.333c0,14.138,11.461,25.6,25.6,25.6h460.8
				c14.138,0,25.6-11.461,25.6-25.6V85.333C512,71.195,500.539,59.733,486.4,59.733z M494.933,426.667
				c0,4.713-3.82,8.533-8.533,8.533H25.6c-4.713,0-8.533-3.82-8.533-8.533V85.333c0-4.713,3.82-8.533,8.533-8.533h460.8
				c4.713,0,8.533,3.82,8.533,8.533V426.667z"/>
			<path d="M470.076,93.898c-2.255-0.197-4.496,0.51-6.229,1.966L266.982,261.239c-6.349,5.337-15.616,5.337-21.965,0L48.154,95.863
				c-2.335-1.96-5.539-2.526-8.404-1.484c-2.865,1.042-4.957,3.534-5.487,6.537s0.582,6.06,2.917,8.02l196.864,165.367
				c12.688,10.683,31.224,10.683,43.913,0L474.82,108.937c1.734-1.455,2.818-3.539,3.015-5.794c0.197-2.255-0.51-4.496-1.966-6.229
				C474.415,95.179,472.331,94.095,470.076,93.898z"/>
			<path d="M164.124,273.13c-3.021-0.674-6.169,0.34-8.229,2.65l-119.467,128c-2.162,2.214-2.956,5.426-2.074,8.392
				c0.882,2.967,3.301,5.223,6.321,5.897c3.021,0.674,6.169-0.34,8.229-2.65l119.467-128c2.162-2.214,2.956-5.426,2.074-8.392
				C169.563,276.061,167.145,273.804,164.124,273.13z"/>
			<path d="M356.105,275.78c-2.059-2.31-5.208-3.324-8.229-2.65c-3.021,0.674-5.439,2.931-6.321,5.897
				c-0.882,2.967-0.088,6.178,2.074,8.392l119.467,128c3.24,3.318,8.536,3.442,11.927,0.278c3.391-3.164,3.635-8.456,0.549-11.918
				L356.105,275.78z"/>
	</g>
</svg>
        break;
      }

      case 'company': {
        svg = <svg className={this.props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 -61 1707.5 1707">
<g id="surface1">
<path d="M 640.3125 91.722656 C 640.3125 74.878906 653.960938 61.230469 670.804688 61.230469 L 1036.695312 61.230469 C 1053.539062 61.230469 1067.1875 74.878906 1067.1875 91.722656 L 1067.1875 244.179688 L 1128.167969 244.179688 L 1128.167969 91.722656 C 1128.167969 41.21875 1087.203125 0.25 1036.695312 0.25 L 670.804688 0.25 C 620.296875 0.25 579.332031 41.21875 579.332031 91.722656 L 579.332031 244.179688 L 640.3125 244.179688 Z M 640.3125 91.722656 "  />
<path d="M 1006.207031 1189.402344 C 1006.207031 1273.597656 937.945312 1341.855469 853.75 1341.855469 C 769.554688 1341.855469 701.292969 1273.597656 701.292969 1189.402344 L 701.292969 1087.339844 L 0 778.78125 L 0 1494.3125 C 0 1544.816406 40.96875 1585.785156 91.472656 1585.785156 L 1616.027344 1585.785156 C 1666.53125 1585.785156 1707.5 1544.816406 1707.5 1494.3125 L 1707.5 778.78125 L 1006.207031 1087.339844 Z M 1006.207031 1189.402344 "  />
<path d="M 762.277344 975.964844 L 945.222656 975.964844 L 945.222656 1036.945312 L 762.277344 1036.945312 Z M 762.277344 975.964844 "  />
<path d="M 762.277344 1189.402344 C 762.277344 1239.90625 803.246094 1280.875 853.75 1280.875 C 904.253906 1280.875 945.222656 1239.90625 945.222656 1189.402344 L 945.222656 1097.929688 L 762.277344 1097.929688 Z M 823.257812 1158.910156 L 884.242188 1158.910156 L 884.242188 1219.894531 L 823.257812 1219.894531 Z M 823.257812 1158.910156 "  />
<path d="M 1616.027344 305.160156 L 91.472656 305.160156 C 40.96875 305.160156 0 346.128906 0 396.632812 L 0 712.15625 L 701.292969 1020.691406 L 701.292969 945.472656 C 701.292969 928.628906 714.941406 914.980469 731.785156 914.980469 L 975.714844 914.980469 C 992.558594 914.980469 1006.207031 928.628906 1006.207031 945.472656 L 1006.207031 1020.691406 L 1707.5 712.15625 L 1707.5 396.632812 C 1707.5 346.128906 1666.53125 305.160156 1616.027344 305.160156 Z M 1616.027344 305.160156 "  />
</g>
</svg>
        break;
      }

      case 'profession' : {
        svg = <svg className={this.props.className} xmlns="http://www.w3.org/2000/svg"  viewBox="-247 0 1707 1707.5" >
<g id="surface1">
<path d="M 297.835938 792.769531 L 361.484375 792.769531 L 175.667969 166.269531 L 117.183594 183.617188 Z M 297.835938 792.769531 "  />
<path d="M 1058.101562 128.0625 C 1068.199219 96.441406 1051.132812 62.582031 1019.734375 51.828125 C 988.34375 41.089844 954.128906 57.441406 942.730469 88.605469 L 932.847656 117.449219 L 1048.230469 157.089844 Z M 1058.101562 128.0625 " />
<path d="M 616.847656 731.785156 L 494.882812 731.785156 L 494.882812 670.804688 L 616.847656 670.804688 L 616.847656 609.820312 L 555.867188 609.820312 L 555.867188 548.839844 L 616.847656 548.839844 L 616.847656 487.855469 L 494.882812 487.855469 L 494.882812 426.875 L 616.847656 426.875 L 616.847656 365.894531 L 555.867188 365.894531 L 555.867188 304.910156 L 616.847656 304.910156 L 616.847656 243.929688 L 494.882812 243.929688 L 494.882812 182.945312 L 616.847656 182.945312 L 616.847656 121.964844 L 555.867188 121.964844 L 555.867188 60.980469 L 616.847656 60.980469 L 616.847656 0 L 433.902344 0 L 433.902344 792.769531 L 616.847656 792.769531 Z M 616.847656 731.785156 " />
<path d="M 765.082031 607.921875 L 913.089844 175.152344 L 1028.476562 214.628906 L 880.441406 647.386719 Z M 765.082031 607.921875 "  />
<path d="M 860.679688 705.085938 L 745.300781 665.621094 L 701.78125 792.769531 L 830.667969 792.769531 Z M 860.679688 705.085938 " />
<path d="M 49.796875 63.695312 L 14.519531 150.441406 L 126.695312 117.175781 Z M 49.796875 63.695312 " />
<path d="M 98.5 853.75 L 952.25 853.75 L 952.25 1707.5 L 98.5 1707.5 Z M 98.5 853.75 "/>
<path d="M 234.269531 792.769531 L 58.730469 200.933594 L 0.25 218.304688 L 170.628906 792.769531 Z M 234.269531 792.769531 " />
<path d="M 1210 221.730469 C 1206.445312 214.488281 1200.132812 208.9375 1192.488281 206.339844 L 1109.179688 177.824219 L 1089.460938 235.542969 L 1143.902344 254.144531 L 985.953125 715.757812 L 1043.722656 735.503906 L 1211.425781 245.0625 C 1214.035156 237.402344 1213.523438 229.019531 1210 221.730469 Z M 1210 221.730469 " />
</g>
</svg>
        break;
      }

      case 'mobile': {
        svg = <svg version="1.1" className={this.props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" >
<g>
	<path d="M25.302,0H9.698c-1.3,0-2.364,1.063-2.364,2.364v30.271C7.334,33.936,8.398,35,9.698,35h15.604
		c1.3,0,2.364-1.062,2.364-2.364V2.364C27.666,1.063,26.602,0,25.302,0z M15.004,1.704h4.992c0.158,0,0.286,0.128,0.286,0.287
		c0,0.158-0.128,0.286-0.286,0.286h-4.992c-0.158,0-0.286-0.128-0.286-0.286C14.718,1.832,14.846,1.704,15.004,1.704z M17.5,33.818
		c-0.653,0-1.182-0.529-1.182-1.183s0.529-1.182,1.182-1.182s1.182,0.528,1.182,1.182S18.153,33.818,17.5,33.818z M26.021,30.625
		H8.979V3.749h17.042V30.625z"/>
</g>
</svg>
        break;
      }

      case 'location': {
        svg = <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.053 512.053" >
<g>
	<g>
		<path d="M365.027,44.5c-30-29.667-66.333-44.5-109-44.5s-79,14.833-109,44.5s-45,65.5-45,107.5
			c0,25.333,12.833,67.667,38.5,127c25.667,59.334,51.333,113.334,77,162s38.5,72.334,38.5,71c4-7.334,9.5-17.334,16.5-30
			s19.333-36.5,37-71.5s33.167-67.166,46.5-96.5c13.334-29.332,25.667-59.667,37-91s17-55,17-71
			C410.027,110,395.027,74.167,365.027,44.5z M289.027,184c-9.333,9.333-20.5,14-33.5,14c-13,0-24.167-4.667-33.5-14
			s-14-20.5-14-33.5s4.667-24,14-33s20.5-13.5,33.5-13.5c13,0,24.167,4.5,33.5,13.5s14,20,14,33S298.36,174.667,289.027,184z"/>
	</g>
</g>
</svg>

break;
      }

      case 'briefcase': {
        svg = <svg className={this.props.className} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 -61 1707.5 1707" >
    <g>
    <path d="M 640.3125 91.722656 C 640.3125 74.878906 653.960938 61.230469 670.804688 61.230469 L 1036.695312 61.230469 C 1053.539062 61.230469 1067.1875 74.878906 1067.1875 91.722656 L 1067.1875 244.179688 L 1128.167969 244.179688 L 1128.167969 91.722656 C 1128.167969 41.21875 1087.203125 0.25 1036.695312 0.25 L 670.804688 0.25 C 620.296875 0.25 579.332031 41.21875 579.332031 91.722656 L 579.332031 244.179688 L 640.3125 244.179688 Z M 640.3125 91.722656 "  />
    <path d="M 1006.207031 1189.402344 C 1006.207031 1273.597656 937.945312 1341.855469 853.75 1341.855469 C 769.554688 1341.855469 701.292969 1273.597656 701.292969 1189.402344 L 701.292969 1087.339844 L 0 778.78125 L 0 1494.3125 C 0 1544.816406 40.96875 1585.785156 91.472656 1585.785156 L 1616.027344 1585.785156 C 1666.53125 1585.785156 1707.5 1544.816406 1707.5 1494.3125 L 1707.5 778.78125 L 1006.207031 1087.339844 Z M 1006.207031 1189.402344 " />
    <path d="M 762.277344 975.964844 L 945.222656 975.964844 L 945.222656 1036.945312 L 762.277344 1036.945312 Z M 762.277344 975.964844 "  />
    <path d="M 762.277344 1189.402344 C 762.277344 1239.90625 803.246094 1280.875 853.75 1280.875 C 904.253906 1280.875 945.222656 1239.90625 945.222656 1189.402344 L 945.222656 1097.929688 L 762.277344 1097.929688 Z M 823.257812 1158.910156 L 884.242188 1158.910156 L 884.242188 1219.894531 L 823.257812 1219.894531 Z M 823.257812 1158.910156 " />
    <path d="M 1616.027344 305.160156 L 91.472656 305.160156 C 40.96875 305.160156 0 346.128906 0 396.632812 L 0 712.15625 L 701.292969 1020.691406 L 701.292969 945.472656 C 701.292969 928.628906 714.941406 914.980469 731.785156 914.980469 L 975.714844 914.980469 C 992.558594 914.980469 1006.207031 928.628906 1006.207031 945.472656 L 1006.207031 1020.691406 L 1707.5 712.15625 L 1707.5 396.632812 C 1707.5 346.128906 1666.53125 305.160156 1616.027344 305.160156 Z M 1616.027344 305.160156 "  />
    </g>
</svg>
        break;
      }

      default:{
        svg = <svg className={this.props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512"><path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"/></svg>
      }
    }

    return(svg);

  }
}

export default SVG
