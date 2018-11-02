---
title: Compose React Components
localeTitle: Compor Reagir Componentes
---
## Compor Reagir Componentes

### Sugestão

Use componentes aninhados como no desafio anterior para renderizar componentes.

### Solução

O seguinte é a solução para o chakkenge, onde ele renderiza Citrus e NonCitrus em um componente que é então renderizado em outro:

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

### Links Relevantes:

*   [Componentes e Adereços](https://reactjs.org/docs/components-and-props.html)
*   [Componentes aninhados](http://www.reactjstutorial.net/nested-components.html)