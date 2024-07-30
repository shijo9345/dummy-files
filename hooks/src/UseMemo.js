import React, { useState, useMemo } from 'react';

function HeavyCalculation({ number }) {
  //  heavy calculation
  const calculate = (num) => {
    console.log('Calculating the Value');
    let total = 0;
    for (let i = 0; i < 1e7; i++) {
      total += num;
    }
    return total;
  };
const result =calculate(number)
//   const result = useMemo(() => calculate(number), [number]);

  return <div>Result: {result}</div>;
}

function App1() {
  const [number, setNumber] = useState(1);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <HeavyCalculation number={number} />
      <button onClick={() => setCounter(counter + 1)}>Re-render</button>
      <p>Counter: {counter}</p>
    </div>
  );
}

export default App1;
