import axios from 'axios'
import React from 'react'
import { Redirect } from 'react-router'
import InputComponent from '../components/InputComponents'

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
        axios.get('http://127.0.0.1:8000/api/persons/', {
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
        axios.get('http://127.0.0.1:8000/api/search/' + query, {
        }).then((response) => {
           this.setState({persons: response.data.data})
           console.log(this.state.persons)
        }, (error) => {
            
        });  
    }
    render(){
        let personList = this.state.persons.map((person, index) => <tr><td>{index+1}</td><td>{person.id}</td><td>{person.name}</td><td>{person.gender}</td><td>{person.age}</td><td>{person.person_condition}</td><td>""</td></tr>)
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
                    <div className="button-submit">
                        <input type="submit" value="Submit"/>
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