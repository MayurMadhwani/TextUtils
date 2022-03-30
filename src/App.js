import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [mtext, setmtext] = useState("Enable DarkMode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{

    setAlert({
      message: message,
      type: type,
    })

    setTimeout(()=>{
      setAlert(null);
    },1500);

  }

  const toggle = ()=>{

    if(mode === 'light'){
      setMode('dark');
      setmtext("Disable DarkMode");
      document.body.style.backgroundColor = '#323232';
      document.body.style.color = 'white';
      showAlert("DarkMode has been enabled","success");
    }else{
      setMode('light');
      setmtext("Enable DarkMode");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("LightMode has been enabled","success");
    }

  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode = {mode} toggle = {toggle} mtext = {mtext}/>
        <div className="container my-3">
          <Alert alert={alert}/>
            <Routes>
              <Route exact path="/About" element={<About mode={mode}/>}></Route>
              
              <Route exact path="/"
                element = {<TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode={mode}/>}
              ></Route>
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
