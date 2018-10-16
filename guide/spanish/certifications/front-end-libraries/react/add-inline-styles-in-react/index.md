---
title: Add Inline Styles in React
localeTitle: Añadir estilos en línea en reaccionar
---
## Añadir estilos en línea en reaccionar

Puede declarar un estilo de componente pasando el objeto directamente como prop 'estilo'. Solo recuerda que cada propiedad del objeto de estilo es camelcased. Por lo tanto, propiedades como 'tamaño de fuente' se declaran 'tamaño de fuente' como una propiedad de objeto javascript válida.

### Alerón

```jsx
class Colorful extends React.Component { 
  render() { 
    // change code below this line 
    return ( 
      <div style={{color: "yellow", fontSize: 24}}>Style Me!</div> 
    ); 
    // change code above this line 
  } 
 }; 
```

### Recursos

[Estilo de elementos DOM](https://reactjs.org/docs/dom-elements.html#style)