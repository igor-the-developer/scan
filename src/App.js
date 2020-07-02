import React, { useState } from 'react';
import logo from './logo.svg';
import QrReader from 'react-qr-reader'
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const previewStyle = {
    height: 240,
    width: 320,
  }

  const [result, setResult] = useState("LOL");
  const [delay, setDelay] = useState(50);

  const handleScan = (result) => {
    if(result) {
      setResult(result);
      window.location.replace(result);
    }
  }

  const handleError = (err) => {
    console.error(err)
  }

  return (
    <div>
      <QrReader
          delay={delay}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
      />
      <p className="result">{result}</p>
    </div>
  );
}

export default App;
