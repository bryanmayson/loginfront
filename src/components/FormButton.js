import React, { useState } from 'react';
import './FormButton.css';

// Input fields
class FormButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="input-button">
                <input type="button" value={this.props.value} onClick={this.props.action}  ></input>
            </div>
        )
    }
}

export default FormButton;