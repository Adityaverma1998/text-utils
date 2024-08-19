import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import TextTransform from './Components/TextTransform';
import About from './Pages/About'
function Master() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

    const toggleMode = ()=>{
        if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor = '#042743';
          toast("Dark mode has been enabled", "success");
        }
        else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
          toast("Light mode has been enabled", "success");
        }
      }
    
  return (
      <>
         <Router>
    <Navbar title="TextUtils" mode={mode} aboutText="About us" toggleMode={toggleMode} key={new Date()} />
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
           <Route exact path="/">
            <TextTransform heading="Try TextUtils - word counter, character counter, remove extra spaces"  mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    <ToastContainer />

      </>
  )
}

export default Master