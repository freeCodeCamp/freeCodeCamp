import React from 'react';
import Layout from '../components/layouts/TypingLayout';
const srcCss = require('../touchtype/src/index.css');

export default class Typing extends React.Component {
  render() {
	  
	  setTimeout(()=> {
          const input = document.getElementsByTagName('input');
          input[0].style.opacity = 0;
          const buildJs = require ('../touchtype/build/static/js/main.859bcff8.js');
		},);
      
    return (
        
            <div id="typingRoot" className="typingRoot"></div>
     	
    );
  }
}





