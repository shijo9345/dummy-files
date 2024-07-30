import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 import Prevstate from './Prevstate';
import Useeffect from './Useeffect';
import UseRef from './UseRef';
import App1 from './UseMemo';
import Parent from './UseContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 

  <React.StrictMode>
    <App />
    <Prevstate />
  <Useeffect />
   <UseRef />
   <App1/>
   <Parent/>
  
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

