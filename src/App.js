import axios from 'axios';
import './App.css';


function App() {

  const runTest = () => {
    axios.get('/test')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("failure", err);
      })
  }

  const queryApi = () => {
    
    axios.get('/public-stash-tabs')
      .then(res => {
        console.log(res);
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
        <button onClick={queryApi}>Click to Query stash tabs</button>
      </header>
    </div>
  );
}

export default App;
