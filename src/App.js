import './App.css';
import LoginForm from './components/LoginForm';
import {BrowserRouter as Switch,Redirect,Route,useLocation} from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import { AnimatePresence } from 'framer-motion';
import {useState} from 'react';


function App() {
  const location =useLocation();

  return (
    <div className="App">
          <AnimatePresence exitBeforeEnter >
            <Switch location={location} key={location.key}>  
              <Route exact path="/" component={LoginForm}/>
              <Route exact path="/register" component={RegisterForm}/>
              <Route exact path ="/homepage"/>
            </Switch>
          </AnimatePresence>

    </div>
  );
}

export default App;
