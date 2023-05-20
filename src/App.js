

import './App.css';
import Navbar from './Component/Navbar';
import Textbox from './Component/Textbox';
import { useState } from 'react';

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor='#0b243a';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';

    }
  }
  return (
    <>
    <Navbar title="Poonam" mode={mode} toggleMode={toggleMode}/>
   <div className="container">
   <Textbox heading="Welcome" mode={mode}/>
   </div>
   
    
    
   
    </>
  );
}

export default App;
