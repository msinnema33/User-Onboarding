import React from 'react';
import OBForm from './Form';
import './App.css';
import smaller from './smaller.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src = './smaller.jpg' alt = 'myCorp Logo'></img>
       <OBForm /> 
      </header>
    </div>
  );
}

export default App;
