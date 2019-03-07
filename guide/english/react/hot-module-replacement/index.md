---
title: Hot Module Replacement 
---

# Hot Module Replacement 
Hot Module Replacement (HMR) will improve your experience while working within React. This helpful little tool allows you to reload the page you are working on without refreshing the page. 

### Why is this important?
Imagine you are working on a dialog box that has five steps and you happen to be debugging step five. Without HMR, everytime you update the code and check your changes the page will refresh and you will need to go through steps 1-4 again. With HMR, the page loads the changes but the page does not refresh and you can continue debugging while on step five.

To add HMR to your application you must do the following to your `src/index.js` file.
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />
  document.getElementById('root')
);
  
if(module.hot) {
  module.hot.accept();
}
```
### More Information
[Hot Reloading with Time Travel (Video)](https://www.youtube.com/watch?v=xsSnOQynTHs)
