import React from 'react'
import ErrorComponent from './ErrorComponent';

class InputComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {};
    }
    render(){
        // let errorMessage = this.props.errorMessage === undefined ? "" : <ErrorComponent error={this.props.errorMessage}/>
        let errorMessage 
        if (this.props.errorMessage === 'undefined') {
            errorMessage = ""
        }else{
            errorMessage = <ErrorComponent error={this.props.errorMessage} />
        }
        return(
            <div className={`form-group ${this.props.className}`}>
                    <input type={this.props.type} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} autoComplete="off" onChange={this.props.handleChange}></input>
                    {errorMessage}
            </div>
        )
    }
}

export default InputComponent