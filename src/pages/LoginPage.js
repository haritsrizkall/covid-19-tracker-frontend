import React from 'react'
import { Redirect } from 'react-router'
import LoginForm from '../parts/LoginForm'
// import React, { Component } from 'react'

class LoginPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            redirectToDashboard : false
        }
    }
    // componentDidMount(){
    //     var token = localStorage.getItem('token')
    //     console.log(token)
    //     if (token === null) {
    //         this.setState({redirectToDashboard : true})
    //     }
    // }
    render(){
        var token = sessionStorage.getItem('token')
        if (token) {
            return <Redirect to="/dashboard"/>
        }
        return (
            <div id="loginPage" style={{backgroundImage : "url(/img/bg-login.png)"}}>
                <div id="login">
                    <div className="login-title">
                        <h1>COVID 19 TRACKER</h1>
                    </div>
                <LoginForm/>
                 </div>
            </div>
            
        )
    }
}

export default LoginPage