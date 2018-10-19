---
title: Write a React Component from Scratch
localeTitle: Escribir un componente React desde cero
---
## Escribir un componente React desde cero

En este desafío, queremos crear un componente de reacción de `class` (los componentes de React pueden ser componentes de `class` o componentes de `function` ). Todos nuestros componentes de clase serán una extensión de `React.Component` . Por ejemplo, podemos comenzar a hacer un componente llamado `FirstComponent` con:

```javascript
class FirstComponent extends React.Component { 
 
 }; 
```

También debemos asegurarnos de definir el `constructor` para nuestra nueva clase. Es una buena práctica llamar al `constructor` cualquier componente con `super` y pasar `props` a ambos. `super` tira del `constructor` de la clase padre de nuestro componente (en este caso, `React.Component` ). Ahora, el código para nuestro componente se ve así:

```javascript
class FirstComponent extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
 
 }; 
```

¡Ahora todo lo que queda por hacer es definir qué `render` nuestro componente! Hacemos esto llamando al método de `render` del componente y devolviendo nuestro código JSX:

```javascript
class FirstComponent extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return ( 
      // The JSX code you put here is what your component will render 
    ); 
  } 
 }; 
```

Una vez que su código JSX está allí, ¡su componente está completo! Si desea un tutorial más detallado de los componentes React, Samer Buna [escribió un excelente artículo](https://medium.freecodecamp.org/how-to-write-your-first-react-js-component-d728d759cabc) .