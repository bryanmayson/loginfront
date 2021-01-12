import React from 'react'; 
import Form from './Form';
import FormButton from './FormButton';
import InputHandler from './InputHandler';
import {Link} from 'react-router-dom';

class RegisterForm extends React.Component{

    constructor(props){
        super(props)
        this.state= {
            username: "",
            password:""
        };
        
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this)
        this.logInUser = this.logInUser.bind(this)
    }


    // Updates the state values of username and password on change event
    updateUsername(user_input){
        this.setState({username:user_input,password:this.state.password});
    }

    updatePassword(user_input){
        this.setState({username:this.state.username,password:user_input});
    }

    // Handles user login when button press
    logInUser(){
        console.log(this.state)
    }

    render(){
        return(
            <div className="form-container">
                <div className="login-form">    
                    <h1>Create a new account</h1>
                    <Form>
                        <InputHandler type ="text" action={this.updateUsername}>Username</InputHandler>
                        <InputHandler type="password" action={this.updatePassword}>Password</InputHandler>
                        <FormButton value="Create" action={this.logInUser}></FormButton>
                    </Form>

                    <p>Already have an account? <Link to="/"> Login Here</Link></p>
                </div>
            </div>
        )
    }
}

export default RegisterForm;