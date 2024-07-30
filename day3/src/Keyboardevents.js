import React, { useState } from 'react';

function KeyboardEventHandler() {
  const [message, setMessage] = useState('');

  const handleKeyDown = (event) => {
    setMessage(`Key Down: ${event.key}`);
  };

  const handleKeyPress = (event) => {
    setMessage(`Key Press: ${event.key}`);
  };

  const handleKeyUp = (event) => {
    setMessage(`Key Up: ${event.key}`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <input
        type="text"
        placeholder="Type something..."
        //onKeyDown={handleKeyDown}
        onKeyPress={handleKeyPress}
        onKeyUp={handleKeyUp}
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <p>{message}</p>
    </div>
  );
}

export default KeyboardEventHandler;
