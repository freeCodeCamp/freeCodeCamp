---
title: Render React on the Server with renderToString
localeTitle: تجعل رد فعل على الخادم مع renderToString
---
## تجعل رد فعل على الخادم مع renderToString

## حل:

يمكنك تمرير `class` `.renderToString()` إلى `.renderToString()` مثلما تقوم بتمرير مكون إلى طريقة `render` .

 `class App extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return <div/> 
  } 
 }; 
 
 // change code below this line 
 ReactDOMServer.renderToString(<App />); 
`