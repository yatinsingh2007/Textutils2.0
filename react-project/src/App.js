import './App.css';
import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import Textform from './components/Textform';
import React , {useState} from 'react'
function App() {
  const [mode,setmode] = useState('light');
  const [alert,setalert] = useState(null);
  const showAlert = (message,type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    },2000)
  }
  const toggleMode = () => {
    if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = `black`;
      showAlert("Dark Mode has been enabled","success")
    }else{
      setmode('light');
      document.body.style.backgroundColor = `white`;
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
  <>
    <Navbar title="Textutils" address="About" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
      <Textform purpose = "Enter The Text To Analyze" mode={mode} showAlert={showAlert}/>
    </div>
  </>
  );
}
export default App;