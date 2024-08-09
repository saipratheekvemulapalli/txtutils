import React, { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Texteditor from './component/Texteditor';
import Alert from './component/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [fontcolor, setFontcolor] = useState('dark');
  const [inputtitleclr, setInputtitleclr] = useState('dark');
  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 3000);
  }

  function togglemode() {
    if (mode === 'light') {
      setMode('dark');
      setFontcolor('light');
      setInputtitleclr('light');
      document.body.classList.add('bgbodydark');
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      setFontcolor('dark');
      setInputtitleclr('dark');
      document.body.classList.remove('bgbodydark');
      showAlert('Light mode has been enabled', 'success');
    }
  }

  return (
    <div>
      <Navbar
        title="Textutil"
        aboutus="About Us"
        mode={mode}
        togglemode={togglemode}
        fontcolor={fontcolor}
        inputtitleclr={inputtitleclr}
      />
      
      <Alert alert={alert} />

      <div className="container my-3">
        <About />
        <Texteditor
          showAlert={showAlert}
          heading="Enter the text"
          mode={mode}
          fontcolor={fontcolor}
          inputtitleclr={inputtitleclr}
        />
      </div>
    </div>
  );
}

export default App;
