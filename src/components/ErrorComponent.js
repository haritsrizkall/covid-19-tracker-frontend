import React from 'react'

class ErrorComponent extends React.Component {
    render(){
        const errorMessage = this.props.error
        return (
            <p>{errorMessage}</p>
        )
    }
}
export default ErrorComponent