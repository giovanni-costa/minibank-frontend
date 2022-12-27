import './App.css';
import React, {useState} from 'react';
import LoginUI from './components/login_ui';
import Home from './components/home_ui';

function App() {

  const[token, setToken] = useState()

  if(!token){ return <LoginUI onTokenSetup={setToken}/>}

  else{ 
    return <Home data={token}/> 
  }
}

export default App;
