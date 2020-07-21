import React, { useState } from 'react';
import QrReader from 'react-qr-reader'
import './App.css';

function App() {
  const previewStyle = {
    height: 350,
    width: 350,
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }

  const [result, setResult] = useState("");
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
    </div>
  );
}

export default App;
