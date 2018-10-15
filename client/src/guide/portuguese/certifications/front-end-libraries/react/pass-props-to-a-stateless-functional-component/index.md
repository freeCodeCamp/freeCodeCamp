---
title: Pass Props to a Stateless Functional Component
localeTitle: Passe Adereços a um Componente Funcional Stateless
---
## Passe Adereços a um Componente Funcional Stateless

### Sugestão 1

Defina uma data nomeada prop no componente Calendar da seguinte maneira:

```jsx
<CurrentDate date={Date()} /> 
```

\`

### Sugestão 2

A sintaxe prop.propName é usada para renderizar um prop.

### Solução

Atribua uma data nomeada prop no componente Calendar da seguinte maneira e renderize-a no componente Calendar, como:

```jsx
const CurrentDate = (props) => { 
  return ( 
    <div> 
      <p>The current date is: {props.date}</p> 
    </div> 
  ); 
 }; 
 
 class Calendar extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return ( 
      <div> 
        <h3>What date is it?</h3> 
        <CurrentDate date={Date()} /> 
      </div> 
    ); 
  } 
 }; 

```