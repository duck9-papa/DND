import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const mouseMoveHandler = (e: MouseEvent) => {
    console.log(`mouse move x:${e.screenX} y:${e.screenY}`);
  };

  // 3️⃣
  const mouseUpHandler = (e: MouseEvent) => {
    console.warn(`>>>> mouse up x:${e.screenX} y:${e.screenY}`);
    document.removeEventListener('mousemove', mouseMoveHandler);
  };

  // 1️⃣
  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);
  return <div className='drag'>app</div>;
}

export default App;
