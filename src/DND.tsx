import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Drop() {
  const [dragOver, setDragOver] = useState(false);
  const [count, setCount] = useState({});
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
    setDragOver(false);
  };
  return <></>;
}

export default Drop;
