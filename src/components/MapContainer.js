import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import React, { Component } from 'react';

const mapStyles = {
  width: '80%',
  heigh: '80%'
};



class MapContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
    this.onMarkerClick = this.onMarkerClick.bind(this)
  }

  onMarkerClick(props,marker,e){
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
    console.log(this.state.selectedPlace)
  }

  onMapClick(props,marker,e){
    if (this.state.showingInfoWindow) {
      this.setState()
    }
  }
  render() {
    const positions = this.props.positions
    let longlat = []
    console.log(positions)
    positions.map((position,index) => {
      longlat.push({
        date_time: {date_time: position.date_time},
        pos :{lat: position.latitude, lng: position.longitude},
      })
      
    })
    
    let marker = longlat.map((pos,index) => <Marker
    position={pos.pos} onClick={this.onMarkerClick} name={pos.date_time.date_time}/>)
    return (
        <Map
        google={this.props.google}
        zoom={2}
        style={mapStyles}
        initialCenter={{ lat: 0, lng: 0}}
      >
        {marker}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
         
      </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
  })(MapContainer);;