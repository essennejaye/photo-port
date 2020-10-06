import React from 'react';
import About from './componets/about';
import Nav from './componets/Nav';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
