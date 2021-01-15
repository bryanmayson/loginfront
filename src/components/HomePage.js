import { motion } from "framer-motion";
import FormButton from "./FormButton";

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

function HomePage(){
    const data = JSON.parse(localStorage.getItem("user"));
    
    function logout() {
        localStorage.removeItem("user");
        window.location.reload();
    }
    
    return(
        <motion.div className="form-container" initial="hidden" animate="visible"variants={transitionStyle}>
            <div className="login-form">
                <h1>You are logged in</h1>
                <h1>User: {data.username}</h1>
                <FormButton value="Logout" action={logout}></FormButton>
            </div>
        </motion.div>
    );
}

export default HomePage;