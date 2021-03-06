import React from 'react'; 
import Form from './Form';
import FormButton from './FormButton';
import InputHandler from './InputHandler';
import auth from './Auth';
import './LoginForm.css';
import {Link} from 'react-router-dom';
import {motion} from "framer-motion";
import axios from 'axios';

const transitionStyle = {
    visible:{
        y:0,
        opacity:1,
        transition:{ duration:0.5}
    },
    hidden:{
        y:300,
        opacity:0
    }

}

class LoginForm extends React.Component{

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
        const data  = {
            username: this.state.username,
            password: this.state.password
        }


        if (data.username.length > 0){

            axios.post("http://localhost:3001/login",data)
            .then((res)=>{
                if (res.data.status === "valid"){
                    auth.login(()=>{
                        // Stores the user info into the local storage
                        localStorage.setItem("user",JSON.stringify(res.data.info[0]))
                        // Go to the homepage
                        this.props.history.push("/homepage");
                    })
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        }

    }

    render(){
        return(
            <motion.div className="form-container" initial="hidden" animate="visible"variants={transitionStyle}>
                    <div className="login-form">    
                        <h1>Login</h1>
                        <Form>
                            <InputHandler type ="text" action={this.updateUsername}>Username</InputHandler>
                            <InputHandler type="password" action={this.updatePassword}>Password</InputHandler>
                            <FormButton value="Login" action={this.logInUser}></FormButton>
                        </Form>

                        <p>Don't have an account? <Link to="/register"> Register Here</Link></p>
                        <p>Forgot your password? Click Here</p>
                    </div>
            </motion.div>
        )
    }
}

export default LoginForm;