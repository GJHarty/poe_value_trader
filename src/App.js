import axios from 'axios';
import './App.css';

function App() {

  const runTest = () => {
    console.log("in run test");
    
    axios.get('/test')
      .then(res => {
        console.log("success");
      })
      .catch(err => {
        console.log("failure", err);
      })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>POE Value Trader</h1>
        <button onClick={runTest}>Click to test</button>
      </header>
    </div>
  );
}

export default App;
