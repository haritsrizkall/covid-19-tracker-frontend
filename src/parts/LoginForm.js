import axios from 'axios';
import React from 'react'
import ErrorComponent from '../components/ErrorComponent';

class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value})
    }
    handleSubmit(e){
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/users/auth_check', {
            email: this.state.email,
            password: this.state.password
        }).then((response) => {
            console.log(response.data);
        }, (error) => {
            this.setState({error : error.response.data.errors})
            console.log(this.state.error)
        });
        
    }
    errorMessage(){
        
    }
    render(){
        const isError = this.state.error
        let errorMessage
        if (isError) {
            errorMessage = <ErrorComponent error={isError}/>
        }
        return(
            <form onSubmit={this.handleSubmit}>
            <div className="login-form">
                {errorMessage}
                <div className="form-group email">
                    <input type="text" name="email" id="email" placeholder="email..." autoComplete="off" onChange={this.handleChange}></input>
                </div>
                <div className="form-group password">
                    <input type="password" name="password" id="password" placeholder="Password..." autoComplete="off" onChange={this.handleChange}></input>
                </div>
                <div className="button-submit">
                    <input type="submit" value="Submit"/>
                </div>
            </div>
        </form>
        )
    }
}

export default LoginForm