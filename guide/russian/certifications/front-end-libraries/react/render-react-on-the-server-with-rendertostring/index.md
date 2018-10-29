---
title: Render React on the Server with renderToString
localeTitle: Render React на сервере с помощью renderToString
---
## Render React на сервере с помощью renderToString

## Решение:

Вы передаете `class` в `.renderToString()` же, как вы передадите компонент методу `render` .

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