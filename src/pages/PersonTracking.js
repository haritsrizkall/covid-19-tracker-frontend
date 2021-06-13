import axios from 'axios'
import React from 'react'
import MapContainer from '../components/MapContainer'


class PersonTracking extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            person : [],
            position : [],
        }
    }

    componentDidMount(){
        let personId = this.props.match.params.personId
        axios.get('https://covid19.smartsoft.co.id/api/detail/' + personId, {
        }).then((response) => {
            this.setState({person : response.data.data})
            this.setState({position : response.data.data.position})
            console.log(this.state.position)
        }, (error) => {
           console.log(error)
        });
    }
    
    render(){
        return(
            <div className="map-tracking" id="map">
                <MapContainer positions={this.state.position}/>
            </div>
        )
    }
}

export default PersonTracking