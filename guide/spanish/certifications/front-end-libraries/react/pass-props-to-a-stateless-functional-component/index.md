---
title: Pass Props to a Stateless Functional Component
localeTitle: Pase los apoyos a un componente funcional sin estado
---
## Pase los apoyos a un componente funcional sin estado

### Sugerencia 1

Defina una fecha llamada prop en el componente Calendario de la siguiente manera:

```jsx
<CurrentDate date={Date()} /> 
```

\`

### Sugerencia 2

La sintaxis prop.propName se utiliza para representar un prop.

### Solución

Asigne una fecha llamada prop en el componente Calendario de la siguiente manera y represéntela en el componente Calendario, como:

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