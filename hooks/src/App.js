import './App.css';
import React, { useState } from 'react';

function App() {
  const [Count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount(Count + 1)}>Click Me</button>
      <p>The number of counts is: {Count}</p>
    </div>
  );
}

export default App;
