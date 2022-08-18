import './style.css';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import React, { useState } from 'react';

function App() {
  const [activeScreen, setActiveScreen] = useState('Login');

  return (
    <div className="App">
      {
        activeScreen == 'Login' ?
          <Login setActiveScreen={setActiveScreen} /> 
        : 
          <Cadastro />
      }
    </div>
  );
}

export default App;
