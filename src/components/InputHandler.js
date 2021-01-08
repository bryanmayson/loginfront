import React,{useState} from 'react'; 
import './InputHandler.css';

// Input fields
class InputHandler extends React.Component{
    constructor(props){
        super(props)
        this.state = {data:""};
    }

    changeData(e){
        this.setState({data : e.target.value});
    }
    render(){
        return(
            <div className="input-bar">
                <input type= {this.props.type} onChange={(e)=>{this.changeData(e)}} placeholder={this.props.children}></input>
            </div>
        )
    }
}

export default InputHandler;