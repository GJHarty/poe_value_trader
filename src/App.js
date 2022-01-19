import { logDOM } from '@testing-library/react';
import axios from 'axios';
import './App.css';

function App() {

  const testGet = () => {
    console.log("in testGet");
    axios.get('/api/test')
      .then(res => {
        console.log("client succesfully received GET response");
      })
      .catch(err => {
        console.log("client error receiving GET response", err);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>POE Value Trader</h1>
        <button onClick={testGet}>click</button>
      </header>
    </div>
  );
}

export default App;
