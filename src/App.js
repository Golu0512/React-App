import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('light mode has been enable', 'success');
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert('dark mode has been enable', 'success');
    }
  };
  return (
    <>
      <Navbar title='TextUtils' aboutTxtUtils='about' toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert} />
      <TextForm heading='enter the text to analyze below' mode={mode} showAlert={showAlert} /> 
      {/* <About /> */}
    </>
  );
}

export default App;
