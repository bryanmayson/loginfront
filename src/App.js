import './App.css';
import LoginForm from './components/LoginForm';
import {BrowserRouter as Switch,Redirect,Route,useLocation} from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import { AnimatePresence } from 'framer-motion';
import {useState} from 'react';


function App() {
  const location =useLocation();
  const [loggedIn , updateLogin] = useState(false);

  return (
    <div className="App">
          <AnimatePresence exitBeforeEnter >
            <Switch location={location} key={location.key}>  
              <Route exact path="/">
                  {loggedIn?<Redirect to="/homepage"/> : <LoginForm/> }</Route>
              <Route/>
              <Route exact path="/register">
                  {loggedIn?<Redirect to="/homepage"/> : <RegisterForm/> }</Route>
              <Route/>
            </Switch>
          </AnimatePresence>

    </div>
  );
}

export default App;
