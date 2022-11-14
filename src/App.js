import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
  };
  return (
    <>
      <Navbar title='TextUtils' aboutTxtUtils='about' toggleMode={toggleMode} mode={mode} />
      <TextForm heading='enter the text to analyze below' mode={mode} /> 
      {/* <About /> */}
    </>
  );
}

export default App;
