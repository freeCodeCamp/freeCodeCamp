---
title: Render State in the User Interface
localeTitle: Estado de render en la interfaz de usuario
---
## Estado de render en la interfaz de usuario

En el desafío, deberá representar un valor de estado en la etiqueta `<h1>` , bastante simple.

## Insinuación

Simplemente haga una etiqueta `<h1>` y renderice `this.state.name` entre la etiqueta.

## Solución

```jsx
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      name: 'freeCodeCamp' 
    } 
  } 
  render() { 
    return ( 
      <div> 
        { /* change code below this line */ } 
        <h1>{this.state.name}</h1> 
        { /* change code above this line */ } 
      </div> 
    ); 
  } 
 }; 

```