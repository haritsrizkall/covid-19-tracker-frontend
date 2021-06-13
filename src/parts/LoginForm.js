import axios from 'axios';
import React from 'react'
import { Redirect } from 'react-router';
import ErrorComponent from '../components/ErrorComponent';
import InputComponent from '../components/InputComponents';


class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : "",
            redirectToReferrer: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value})
    }
    handleSubmit(e){
        this.setState({errorEmail : ""})
        this.setState({errorAuth : ""})
        this.setState({errorPassword : ""})
        axios.post('https://covid19.smartsoft.co.id/api/users/auth_check', {
            email: this.state.email,
            password: this.state.password
        }).then((response) => {
            sessionStorage.setItem('token',response.data.token)
            this.setState({redirectToReferrer : true})
        }, (error) => {
            // for (const val of error.response.data.errors) {
            //     this.setState({error : val})
            // }
            if (error.response.data.errors.email) {
                this.setState({errorEmail : error.response.data.errors.email[0]})
            }
            if (error.response.data.errors.password) {
                this.setState({errorPassword : error.response.data.errors.password[0]})
            }
            if (error.response.data.errors.auth) {  
                this.setState({errorAuth : error.response.data.errors.auth[0]})
            }   
        });
        
        e.preventDefault()
    }
    errorMessage(){
        
    }
    render(){
        if (this.state.redirectToReferrer) {
            return <Redirect to="/dashboard"/>
        }
        const isError = this.state.error
        let errorAuth = this.state.errorAuth ? <ErrorComponent error={this.state.errorAuth}/> : ""
        

        return(
            <form onSubmit={this.handleSubmit}>
            <div className="login-form">
                {errorAuth}
                <InputComponent type="text" className="email" name="email" id="email" placeholder="Email..." handleChange={this.handleChange} errorMessage={`${this.state.errorEmail}`}/> 
                <InputComponent type="password" className="password" name="password" id="password" placeholder="Password..." handleChange={this.handleChange} errorMessage={`${this.state.errorPassword}`}/> 
                <div className="button-submit">
                    <input type="submit" value="Login"/>
                </div>
            </div>
        </form>
        )
    }
}

export default LoginForm