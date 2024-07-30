import React, { useState } from 'react';

export default function MouseEventsComponent() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Clicked!');
  };

  const handleDoubleClick = () => {
    setMessage('Double Clicked!');
  };

  const handleMouseEnter = () => {
    setMessage('Mouse Entered!');
  };

  const handleMouseLeave = () => {
    setMessage('Mouse Left!');
  };

  const handleMouseMove = () => {
    setMessage('Mouse Moving!');
  };

  const handleMouseDown = () => {
    setMessage('Mouse Down!');
  };

  const handleMouseUp = () => {
    setMessage('Mouse Up!');
  };

  return (
    <div>
      <h1>Mouse Events Component</h1>
      <div
        style={{
          width: '300px',
          height: '300px',
          border: '2px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          userSelect: 'none'
        }}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        Interact with me!
      </div>
      <p>{message}</p>
    </div>
  );
}