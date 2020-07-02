import React, { useState } from 'react';
import logo from './logo.svg';
import QrReader from 'react-qr-reader'
import './App.css';

function App() {
  const previewStyle = {
    height: 240,
    width: 320,
  }

  const [result, setResult] = useState("No result");
  const [delay, setDelay] = useState(500);

  const handleScan = (result) => {
    if(result) {
      setResult(result);
    }
  }

  const handleError = (err) => {
    console.error(err)
  }

  return (
    <div className="App">
      <header className="App-header">
        <QrReader
          delay={delay}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
          />
        <p>{result}</p>
      </header>
    </div>
  );
}

export default App;
