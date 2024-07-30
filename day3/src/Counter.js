import React, { useState } from 'react';

function Counter() {
  const [message, setMessage] = useState('')
  const [count, setCount] = useState(0)


  const handleClick = () => {
    setCount(count+1)
    setMessage("Clicked")
  };

  return (
    <div >
      <button onClick={handleClick}>Click</button>
      <p>Count: {count}</p>
      <p>Message: {message}</p>
    </div>
  );
}

export default Counter;
 