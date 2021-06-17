import axios from 'axios'
import React from 'react'
import InputComponent from '../components/InputComponents'
import MapContainer from '../components/MapContainer'


function HelloWorld(params) {
    return "Hello World"
}

class TracingPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            person: [],
            position: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        let personId = this.props.match.params.personId
        axios.get('https://covid19.smartsoft.co.id/api/persons/'+personId+'/tracing', {
        }).then((response) => {
            this.setState({person : response.data.data})
            this.setState({position : response.data.data.position})          
            console.log(this.state.position)
        }, (error) => {
           console.log(error)
        });
        
    }

    handleChange(e){
        let query = e.target.value
        console.log(query)
        axios.get('https://covid19.smartsoft.co.id/api/persons/'+query+'/tracing', {
        }).then((response) => {
            this.setState({person : response.data.data})
            this.setState({position : response.data.data.position})          
        }, (error) => {
            alert('Person by that Id not found')
        });  
    }
    render(){
        const positions = this.state.position
        console.log(positions)
        return (
            <div id="tracingPage">
                <div className="map-tracking" id="map">
                    <div className="search">
                        <div className="input">
                            <InputComponent type="text"     className="input-search" name="search" id="search" placeholder="Id..." handleChange={this.handleChange} />
                        </div>
                    </div>
                    <MapContainer positions={this.state.position}/>
                </div> 
            </div>
        )
    }
}

export default TracingPage