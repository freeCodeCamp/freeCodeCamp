import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
// TODO: Re-enable this when we upgrade React to version 18
// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
