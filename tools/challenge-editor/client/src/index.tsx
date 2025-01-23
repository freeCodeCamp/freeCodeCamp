import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app';
// TODO: Re-enable this when we upgrade React to version 18
// eslint-disable-next-line react/no-deprecated
const root = createRoot(
  document.getElementById('root') || document.createElement('div')
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
