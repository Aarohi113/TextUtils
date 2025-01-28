
import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');// whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
     setAlert({
      msg: message,
      type: type
     })
     setTimeout(() => {
      setAlert(null);
     }, 1500);
  }
  const toggleMode = ()=>{
    if(mode ==='light'){
        setMode("dark");
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled", "success");
    }else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
    }
   
  }
  return (
    
    <>
     
     {/* <Navbar title="textUtils" aboutText="About Text"/> */}
     
     {/* <BrowserRouter> */}
     <Navbar title="TextUtils"  mode={mode} toggleMode= {toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3">
       {/* <Routes> */}
        {/* <Route path='/' element={ <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/> */}
        <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
        {/* <Route path='/about' element={<About/>}/> */}
        
       {/* </Routes> */}
       </div>
      {/* </BrowserRouter> */}
        
     </>
  );
}

export default App;
