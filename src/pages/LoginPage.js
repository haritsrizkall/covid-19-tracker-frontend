import React from 'react'
import LoginForm from '../parts/LoginForm'
// import React, { Component } from 'react'

class LoginPage extends React.Component {
    render(){
        return (
            <div id="login">
                <div className="login-title">
                    <h1>Covid 19 Tracker</h1>
                </div>
                <LoginForm/>
            </div>
        )
    }
}

export default LoginPage