import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MouseEventComponent from './App';
import KeyboardEventHandler from './Keyboardevents';
import Counter from './Counter';
import PasteExample from './Event3';
import PointerEventsExample from './Pointer';
import Conditional from './Conditional';
import Condition2 from './Condition2';
import Condition3 from './Condition3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MouseEventComponent />
    <KeyboardEventHandler />
    <Counter />
    <PasteExample />
    <PointerEventsExample />
    <Conditional name={false}/>
    <Condition2 name={true}/>
    <Condition3 name={true}></Condition3>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

