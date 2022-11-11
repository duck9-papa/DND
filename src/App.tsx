import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Drop from './Drop';

function App() {
  const [dragOver, setDragOver] = React.useState(false);
  const handleDragOverStart = () => setDragOver(true);
  const handleDragOverEnd = () => setDragOver(false);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', event.currentTarget.id);
  };

  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text');
    console.log(`Somebody dropped an element with id: ${id}`);
    setDragOver(false);
  };
  return (
<Drop/>
  );
}

export default App;
