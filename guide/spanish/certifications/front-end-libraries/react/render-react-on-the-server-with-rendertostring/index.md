---
title: Render React on the Server with renderToString
localeTitle: Render React en el servidor con renderToString
---
## Render React en el servidor con renderToString

## Solución:

`.renderToString()` una `class` a `.renderToString()` tal como pasaría un componente a un método de `render` .

```jsx
class App extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return <div/> 
  } 
 }; 
 
 // change code below this line 
 ReactDOMServer.renderToString(<App />); 

```