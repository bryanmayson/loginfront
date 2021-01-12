import './App.css';
import LoginForm from './components/LoginForm';
import {BrowserRouter as Switch,Route,useLocation} from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import { AnimatePresence } from 'framer-motion';


function App() {
  const location =useLocation();

  return (
    <div className="App">
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>  
              <Route exact path="/">
                <LoginForm></LoginForm>
              </Route>
              <Route path="/register">
                <RegisterForm></RegisterForm>
              </Route>
            </Switch>
          </AnimatePresence>
      <div className="login-image"></div>
    </div>
  );
}

export default App;
