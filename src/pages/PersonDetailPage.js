import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router';

class PersonDetailPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {person : {}}
    }
    componentDidMount(){
        let personId = this.props.match.params.personId
        axios.get('http://127.0.0.1:8000/api/detail/' + personId, {
        }).then((response) => {
            this.setState({person : response.data.data})
        }, (error) => {
           console.log(error)
        });
    }
    render(){
        return(
            <div className="detail">
                <div className="person-profile">
                    <div className="person-profile-data">
                        <p className="label">Name  :</p>
                        <p>{this.state.person.name}</p>
                    </div>
                    <div className="person-profile-data">
                        <p className="label">Age  :</p>
                        <p>{this.state.person.age}</p>
                    </div>
                    <div className="person-profile-data">
                        <p className="label">Gender  :</p>
                        <p>{this.state.person.gender}</p>
                    </div>
                    <div className="person-profile-data">
                        <p className="label">Condition  :</p>
                        <p>{this.state.person.person_condition}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonDetailPage