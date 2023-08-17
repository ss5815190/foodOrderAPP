import React from 'react';
import Meals from './components/Meals';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Meals />
    </div>
  );
}

export default App;
