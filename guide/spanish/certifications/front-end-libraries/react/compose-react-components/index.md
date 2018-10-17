---
title: Compose React Components
localeTitle: Componer React Componentes
---
## Componer React Componentes

### Insinuación

Use componentes anidados como en el desafío anterior para renderizar componentes.

### Solución

La siguiente es la solución al chakkenge, donde procesa Citrus y NonCitrus en un componente que luego se procesa en otro:

```jsx
class Fruits extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return ( 
      <div> 
        <h2>Fruits:</h2> 
        <NonCitrus /> 
        <Citrus /> 
      </div> 
    ); 
  } 
 }; 
 
 class TypesOfFood extends React.Component { 
  constructor(props) { 
     super(props); 
  } 
  render() { 
    return ( 
      <div> 
        <Fruits /> 
        <Vegetables /> 
      </div> 
    ); 
  } 
 }; 
```

### Enlaces relevantes:

*   [Componentes y accesorios](https://reactjs.org/docs/components-and-props.html)
*   [Componentes anidados](http://www.reactjstutorial.net/nested-components.html)