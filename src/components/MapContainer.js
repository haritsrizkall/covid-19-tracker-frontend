import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';

const mapStyles = {
  width: '80%',
  heigh: '80%'
};


console.log(process.env.REACT_APP_GOOGLE_API_KEY)

class MapContainer extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    console.log(process.env.REACT_APP_GOOGLE_API_KEY)
    const positions = this.props.positions
    let longlat = []
    positions.map((position,index) => {
      longlat.push({lat: position.latitude, lng: position.longitude})
    })
    let marker = longlat.map((pos,index) => <Marker
    position={pos} />)
    return (
        <Map
        google={this.props.google}
        zoom={2}
        style={mapStyles}
        initialCenter={{ lat: 0, lng: 0}}
      >
        {marker}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
  })(MapContainer);;