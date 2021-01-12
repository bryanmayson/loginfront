import './App.css';
import LoginForm from './components/LoginForm';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import RegisterForm from './components/RegisterForm';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LoginForm}/>
        <Route path="/register" component={RegisterForm}/>
      </Router>
      <div className="login-image"></div>
    </div>
  );
}

export default App;
