---
title: Functional Components vs Class Components
localeTitle: Componentes funcionales vs componentes de clase
---
## Componentes funcionales vs componentes de clase

Hay principalmente dos componentes en React:

*   Componentes funcionales
*   Componentes de clase

## Componentes funcionales

*   Los componentes funcionales son funciones básicas de JavaScript. Estas son típicamente funciones de flecha pero también pueden crearse con la palabra clave de `function` normal.
*   A veces se los denomina componentes "tontos" o "sin estado", ya que simplemente aceptan datos y los muestran de alguna forma; es decir, son los principales responsables de la prestación de la interfaz de usuario.
*   Los métodos de ciclo de vida de React (por ejemplo, `componentDidMount` ) no se pueden usar en componentes funcionales.
*   No se utiliza ningún método de renderización en los componentes funcionales.
*   Estos son los principales responsables de la IU y suelen ser solo de presentación (por ejemplo, un componente Button).
*   Los componentes funcionales pueden aceptar y usar accesorios.
*   Los componentes funcionales deben ser favorecidos si no necesita utilizar el estado React.

```js
import React from "react"; 
 
 const Person = props => ( 
  <div> 
    <h1>Hello, {props.name}</h1> 
  </div> 
 ); 
 
 export default Person; 
```

## Componentes de clase

*   Los componentes de la clase utilizan la clase ES6 y extienden la clase `Component` en React.
*   A veces se les llama componentes "inteligentes" o "con estado", ya que tienden a implementar la lógica y el estado.
*   Los métodos de ciclo de vida de React se pueden usar dentro de los componentes de la clase (por ejemplo, `componentDidMount` ).
*   `this.props` accesorios a los componentes de la clase y accedes a ellos con `this.props`

```js
import React, { Component } from "react"; 
 
 class Person extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
      myState: true; 
    } 
  } 
 
  render() { 
    return ( 
      <div> 
        <h1>Hello Person</h1> 
      </div> 
    ); 
  } 
 } 
 
 export default Person; 
```

## Más información

*   [Reaccionar componentes](https://reactjs.org/docs/components-and-props.html)
*   [Componentes funcionales vs clase](https://react.christmas/16)
*   [Componentes funcionales con estado frente a sin estado en React](https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541)
*   [Estado y ciclo de vida](https://reactjs.org/docs/state-and-lifecycle.html)