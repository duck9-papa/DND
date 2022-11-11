import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Drop() {
  const [dragOver, setDragOver] = useState(false);
  const [count, setCount] = useState(0);
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
    setCount(count + 1);
    setDragOver(false);
  };
  return (
    <div>
      <div
        id="d1"
        draggable="true"
        onDragStart={handleDragStart}
        className="drag"
      ></div>
      <div
        onDragOver={enableDropping}
        onDrop={handleDrop}
        onDragEnter={handleDragOverStart}
        onDragLeave={handleDragOverEnd}
        style={dragOver ? { fontWeight: 'bold', background: 'red' } : {}}
        className="target"
      >
        {dragOver ? '맞아요!' : '여기다 넣으세요'}
      </div>
      <div className="target">
        {dragOver ? '드래그 중입니다' : '드래그중이 아닙니다'}
      </div>
      <div className="target">넣은 횟수 : {count}</div>
    </div>
  );
}

export default Drop;
