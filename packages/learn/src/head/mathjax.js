import React from 'react';

const cdnAddr = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/' +
'2.7.4/MathJax.js?config=TeX-AMS_HTML';

const mathjax = [
  <script
    key='mathjax'
    type='text/javascript'
    src={cdnAddr}
  />
];
  
export default mathjax;