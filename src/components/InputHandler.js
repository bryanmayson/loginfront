import React from 'react'; 
import './InputHandler.css';

// Input fields
class InputHandler extends React.Component{

    render(){
        return(
            <div className="input-bar">
                <input type= {this.props.type} onChange={(e)=>{this.props.action(e.target.value)}} placeholder={this.props.children}></input>
            </div>
        )
    }
}

export default InputHandler;