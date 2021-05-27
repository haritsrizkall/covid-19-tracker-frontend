import React from 'react'
import { Link } from 'react-router-dom'


class ButtonComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let myButton
        if (this.props.type == 'link') {
            myButton = <Link to={`${this.props.url}`} className={this.props.className}>{this.props.text}</Link>
        }else{
            myButton = <input type="button" className={this.props.className}>{this.props.text}</input>
        }
        
        return(
          <div className="btn">
              {myButton}
          </div>
        )
    }
}
export default ButtonComponent