import React from 'react'; 
import Form from './Form';
import FormButton from './FormButton';
import InputHandler from './InputHandler';
import {Link} from 'react-router-dom';
import{motion} from "framer-motion";
import axios from 'axios';


const transitionStyle = {
    visible:{
        y:0,
        opacity:1,
        transition:{ duration:0.5}
    },
    hidden:{
        y:-300,
        opacity:0
    }

}

class RegisterForm extends React.Component{

    constructor(props){
        super(props)
        this.state= {
            username: "",
            password:""
        };
        
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.register = this.register.bind(this);
    }


    // Updates the state values of username and password on change event
    updateUsername(user_input){
        this.setState({username:user_input,password:this.state.password});
    }

    updatePassword(user_input){
        this.setState({username:this.state.username,password:user_input});
    }

 

    register(){

        const data  = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post("http://localhost:3001/register",data)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        return(
            <motion.div className="form-container" initial="hidden" animate="visible" variants={transitionStyle}>
                <div className="login-form">    
                    <h1>Create a new account</h1>
                    <Form>
                        <InputHandler type ="text" action={this.updateUsername}>Username</InputHandler>
                        <InputHandler type="text" action={this.updatePassword}>Password</InputHandler>
                        <FormButton value="Create" action={this.register}></FormButton>
                    </Form>

                    <p>Already have an account? <Link to="/"> Login Here</Link></p>
                </div>
            </motion.div>
        )
    }
}

export default RegisterForm;