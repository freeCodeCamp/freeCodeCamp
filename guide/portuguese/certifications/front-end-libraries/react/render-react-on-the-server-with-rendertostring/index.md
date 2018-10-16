---
title: Render React on the Server with renderToString
localeTitle: Renderizar Reagir no Servidor com renderToString
---
## Renderizar Reagir no Servidor com renderToString

## Solução:

Você passa uma `class` para `.renderToString()` assim como você passaria um componente para um método de `render` .

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