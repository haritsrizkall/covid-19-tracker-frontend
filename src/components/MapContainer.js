import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';

const mapStyles = {
  width: '80%',
  heigh: '80%'
};


class MapContainer extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    const positions = this.props.positions
    console.log(positions)
    let longlat = []
    positions.map((position,index) => {
      longlat.push({lat: position.latitude, lng: position.longitude})
    })
    console.log(longlat)
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
    apiKey: 'AIzaSyDg0DegZ5TH9hb5MdXFCfGxm1ldbV-yGLk'
  })(MapContainer);;