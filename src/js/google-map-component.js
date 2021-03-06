import React, {Component} from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class MyGoogleMap extends Component{

  render(){

    const defaultMapOptions = {
       fullscreenControl: false,
       disableDefaultUI: true,
    };

  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: -37.810481, lng: 144.960655 }}
    defaultOptions={defaultMapOptions}
  >
    {props.isMarkerShown && <Marker position={{ lat: -37.814455, lng: 144.963315 }} />}
  </GoogleMap>
))


    return(
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=&?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `140px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}

export default MyGoogleMap;
