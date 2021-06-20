import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

class PersonDetailPage extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            person : [],
            position : [],
            personId : this.props.match.params.personId,
        }
        
    // let personId = this.props.match.params.personId
    }
    componentDidMount(){
        axios.get('https://covid19.smartsoft.co.id/api/persons/' + this.state.personId +'/detail', {
        }).then((response) => {
            this.setState({person : response.data.data})
            this.setState({position : response.data.data.position})
        }, (error) => {
           console.log(error)
        });
    }
    render(){
        let positionList = this.state.position.map((position, index)=> <tr><td>{index+1}</td><td>{position.longitude}</td><td>{position.latitude}</td>{position.date_time}</tr>)
        return(
            <div id="detail">
                <div className="person-profile">
                    <div className="person-profile-data">
                        <p className="label">Name  :</p>
                        <p className="text">{this.state.person.name}</p>
                    </div>
                    <div className="person-profile-data">
                        <p className="label">Age  :</p>
                        <p className="text">{this.state.person.age}</p>
                    </div>
                    <div className="person-profile-data">
                        <p className="label">Gender  :</p>
                        <p className="text">{this.state.person.gender}</p>
                    </div>
                    <div className="person-profile-data">
                        <p className="label">Condition  :</p>
                        <p className="text">{this.state.person.person_condition}</p>
                    </div>
                </div>
                <div className="person-position">
                    <table>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>
                                Longitude
                            </th>
                            <th>
                                Latitude
                            </th>
                            <th>
                                Date time
                            </th>
                        </tr>
                        {positionList}
                    </table>
                </div>
                <Link to={`/dashboard`} className="back">Back</Link>
                <Link to={`/person/`+ this.state.personId + `/tracking`}>Tracking</Link>
            </div>
        )
    }
}

export default PersonDetailPage