import React from 'react'
import { Redirect } from 'react-router'

class DashboardPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            redirectToLogin : false
        }   
    }
    // componentDidMount(){
    //     var token = localStorage.getItem('token')
    //     if (token === null) {
    //         this.setState({redirectToLogin : true})
    //     }
    // }
    render(){
        var token = sessionStorage.getItem('token')
        if (!token) {
            return <Redirect to="/"/>
        }
        return (
            <h1>Selamat datang di dashboard, Covid-19 tracker</h1>
        )
    }
}

export default DashboardPage