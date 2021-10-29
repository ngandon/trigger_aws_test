import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [awsid, setAwsId] = useState("empty");
  const [awssecret, setAwsSecret] = useState("empty");

  const handleAwsIdInput = event => {
    setAwsId({ awsid: event.target.value });  
  };

  const handleAwsSecretInput = event => {
    setAwsSecret({ awssecret: event.target.value });  
  };

  const logValue = () => {
    console.log(awsid, awssecret);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <input onChange={handleAwsIdInput} placeholder="Enter AWS access key id"/>
          <input onChange={handleAwsSecretInput} placeholder="Enter AWS secret access key"/>       
          
        </div>
        <div>
          <button onClick={logValue}>Check server status</button>
        </div>

      </header>
    </div>
  );
}

export default App;
