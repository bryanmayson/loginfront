import React from 'react'; 
import Form from './Form';
import FormButton from './FormButton';
import InputHandler from './InputHandler';
import './LoginForm.css';

class LoginForm extends React.Component{
    render(){
        return(
            <div className="form-container">
                <div className="login-form">
                    <h1>Login</h1>
                    <Form>
                        <InputHandler type ="text">Username</InputHandler>
                        <InputHandler type="password">Password</InputHandler>
                        <FormButton value="Login"></FormButton>
                    </Form>

                </div>
            </div>
        )
    }
}

export default LoginForm;