import axios from 'axios'
import React from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import ButtonComponent from '../components/ButtonComponent'
import InputComponent from '../components/InputComponents'
import ActionButton from '../parts/ActionButton'
import ActionTable from '../parts/ActionButton'

class DashboardPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            redirectToLogin : false,
            persons : [{}]
        }   
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        let persons 
        axios.get('https://covid19.smartsoft.co.id/api/persons', {
        }).then((response) => {
           persons = this.setState({persons: response.data.data})
           console.log(persons)
        }, (error) => {
            
        });
    }
    handleChange(e){
        this.setState({persons: [{}]})
        let persons
        let query = e.target.value
        console.log(query)
        axios.get('https://covid19.smartsoft.co.id/api/search/' + query, {
        }).then((response) => {
           this.setState({persons: response.data.data})
           console.log(this.state.persons)
        }, (error) => {
            
        });  
    }
    render(){
        let personList = this.state.persons.map((person, index) => <tr><td>{index+1}</td><td>{person.id}</td><td>{person.name}</td><td>{person.gender}</td><td>{person.age}</td><td>{person.person_condition}</td><td className="disp-flex"><ActionButton personId={person.id}/><ButtonComponent type="link" text="Tracing" url={`/person/${person.id}/tracing`} className="btn-tracing"/></td></tr>)
        var token = sessionStorage.getItem('token')
        if (!token) {
            return <Redirect to="/"/>
        }
        return (
            <div id="dashboard">
                <div className="search">
                    <div className="input">
                        <InputComponent type="text"     className="input-search" name="search" id="search" placeholder="Search..." handleChange={this.handleChange} />
                    </div>
                </div>
                <div className="trace">
                    <table>
                        <tr>
                            <th>No</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Condition</th>
                            <th>Action</th> 
                        </tr>
                            {personList}
                    </table>
                </div>
            </div>
        )
    }
}

export default DashboardPage