import { Loader } from '@googlemaps/js-api-loader'
import React from 'react'


class PersonTracking extends React.Component{
    constructor(props){
        super(props)

    }
    
    render(){
          
        return(
            <div className="map-tracking" id="map">

            </div>
        )
    }
}

export default PersonTracking