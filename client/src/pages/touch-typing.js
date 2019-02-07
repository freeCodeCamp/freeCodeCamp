import React from 'react';


export default class Typing extends React.Component {
  render() {
	  const srcCss = require('../touchtype/src/index.css');
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





