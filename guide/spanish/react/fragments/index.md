---
title: Fragments
localeTitle: Fragmentos
---
# Fragmentos

Los fragmentos son una forma de representar múltiples elementos sin utilizar un elemento de envoltura. Cuando intente representar elementos sin una etiqueta adjunta en JSX, verá el mensaje de error `Adjacent JSX elements must be wrapped in an enclosing tag` . Esto se debe a que cuando JSX transpila, está creando elementos con sus nombres de etiqueta correspondientes, y no sabe qué nombre de etiqueta usar si se encuentran múltiples elementos. En el pasado, una solución frecuente a esto era usar un div envoltorio para resolver este problema. Sin embargo, la versión 16 de React trajo la adición de `Fragment` , lo que hace que esto ya no sea necesario.

`Fragment` actúa como una envoltura sin agregar divs innecesarios al DOM. Puedes usarlo directamente desde la importación React, o deconstruirla:

```jsx
import React from 'react'; 
 
 class MyComponent extends React.Component { 
  render(){ 
    return ( 
      <React.Fragment> 
        <div>I am an element!</div> 
        <button>I am another element</button> 
      </React.Fragment> 
    ); 
  } 
 } 
 
 export default MyComponent; 
```

```jsx
// Deconstructed 
 import React, { Component, Fragment } from 'react'; 
 
 class MyComponent extends Component { 
  render(){ 
    return ( 
      <Fragment> 
        <div>I am an element!</div> 
        <button>I am another element</button> 
      </Fragment> 
    ); 
  } 
 } 
 
 export default MyComponent; 
```

La versión 16.2 de React simplificó aún más este proceso, permitiendo que las etiquetas JSX vacías se interpreten como fragmentos:

```jsx
return ( 
  <> 
    <div>I am an element!</div> 
    <button>I am another element</button> 
  </> 
 ); 
```

#### Más información:

*   [React.Fragment (Documentación Oficial)](https://reactjs.org/docs/react-api.html#reactfragment)
*   [Reacciona v16.2.0: Soporte mejorado para fragmentos](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html)