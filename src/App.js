import './App.css';
import { LoginForm } from './components/LoginForm';
import { Title } from './components/Title';

function App() {
  return (
    <div className="App background max-height"> 
        <Title title="Dashboard"/>
        <LoginForm />
    </div>
  );
}

export default App;
