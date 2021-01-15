import './App.css';
import LoginForm from './components/LoginForm';
import {BrowserRouter as Switch,Redirect,Route,useLocation} from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import { AnimatePresence } from 'framer-motion';
import auth from "./components/Auth";
import HomePage from './components/HomePage';
import {ProtectedRoute} from "./components/ProtectedRoute";
import {UnprotectedRoute} from "./components/UnprotectedRoute";

function App() {
  const location =useLocation();

  return (
    <div className="App">
          <AnimatePresence exitBeforeEnter >
            <Switch location={location} key={location.key}>  
              <UnprotectedRoute exact path="/" component={LoginForm}/>
              <UnprotectedRoute exact path="/register" component={RegisterForm}/>
              <ProtectedRoute exact path ="/homepage" component={HomePage}/>
            </Switch>
          </AnimatePresence>

    </div>
  );
}

export default App;
