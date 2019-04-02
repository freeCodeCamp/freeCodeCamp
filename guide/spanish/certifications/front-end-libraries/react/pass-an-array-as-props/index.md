---
title: Pass an Array as Props
localeTitle: Pasar una matriz como apoyos
---
## Pasar una matriz como apoyos

Para pasar una matriz como prop, primero se debe declarar una prop "tareas" en cada uno de los componentes que se van a representar:

```javascript
const List= (props) => { 
  return <p></p> 
 }; 
 
 class ToDo extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return ( 
      <div> 
        <h1>To Do Lists</h1> 
        <h2>Today</h2> 
        <List tasks={["Walk", "Cook", "Bake"]} /> 
        <h2>Tomorrow</h2> 
        <List tasks={["Study", "Code", "Eat"]}/> 
      </div> 
    ); 
  } 
 }; 
```

Luego, los accesorios deben manejarse dentro del componente "Lista":

```javascript
const List= (props) => { 
  return <p>{props.tasks.join(", ")}</p> 
 }; 
 
 // ... same as above 
```

El `.join(", ")` se utiliza para tomar cada elemento de la matriz y unirlos en una cadena para mostrar.

Estamos utilizando la modularidad de React en este ejemplo para mostrar las tareas pasadas por dos componentes diferentes a un componente común que representa el HTML final.