import React from 'react'
import { Link } from 'react-router-dom'

class ActionButton extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Link to={`person/detail/${this.props.personId}`}>Detail</Link>
        )
    }
}

export default ActionButton