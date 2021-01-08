import React from 'react'; 
import './Form.css';
class Form extends React.Component{
    render(){
        return(
            <div className="input-form">
                {this.props.children}
            </div>
        )
    }
}

export default Form;