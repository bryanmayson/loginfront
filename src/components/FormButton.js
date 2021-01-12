import React from 'react';
import './FormButton.css';
import {motion} from "framer-motion";
import { withRouter } from 'react-router-dom';

const hoverEffect={
    scale:1.1,
    backgroundColor: "black",
    color:"white"
}

const tapEffect={
    scale:0.9,
    backgroundColor: "black",
    color:"white",
}

//Form Button
class FormButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="input-button">
                <motion.input   whileHover={hoverEffect} whileTap={tapEffect} type="button" value={this.props.value} onClick={this.props.action}  ></motion.input>
            </div>
        )
    }
}

export default FormButton;