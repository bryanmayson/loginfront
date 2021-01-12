import React from 'react';
import './FormButton.css';
import {motion} from "framer-motion";

const hoverEffect={
    scale:1.1,
    backgroundColor:"#000000",
    color:"#FFFFFF",
    transition:{duration:0.1}
}

const tapEffect={
    scale:0.9,
    backgroundColor:"#000000",
    color:"#FFFFFF",
    transition:{duration:0.1}
}

//Form Button
class FormButton extends React.Component {


    render() {
        return (
            <div className="input-button">
                <motion.input   whileHover={hoverEffect} whileTap={tapEffect} type="button" value={this.props.value} onClick={this.props.action}  ></motion.input>
            </div>
        )
    }
}

export default FormButton;