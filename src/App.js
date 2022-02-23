import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';

function App() {
  return (
    <BrowserRouter>
      <div className = "App">
        <div className ="Route">
          <header className="App-header">
            <p>
              Potato Party: Hash It Out
            </p>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" exact component={Game} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
