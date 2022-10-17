import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title='TextUtils' aboutTxtUtils='about' />
      <TextForm heading='enter the text to analyze below' /> 
      {/* <About /> */}
    </>
  );
}

export default App;
