import './App.css';
import Form from './components/Form';
import FormButton from './components/FormButton';
import InputHandler from './components/InputHandler';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form>
          <InputHandler type ="text">Username</InputHandler>
          <InputHandler type="password">Password</InputHandler>
          <FormButton value="Login"></FormButton>
        </Form>
      </header>
    </div>
  );
}

export default App;
