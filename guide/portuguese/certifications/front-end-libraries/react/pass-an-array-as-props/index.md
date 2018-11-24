---
title: Pass an Array as Props
localeTitle: Passar uma matriz como adereços
---
## Passar uma matriz como adereços

Para passar uma matriz como prop, primeiro uma matriz deve ser declarada como uma "tarefa" em cada um dos componentes a serem renderizados:

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

Então, os adereços devem ser manipulados dentro do componente "List":

```javascript
const List= (props) => { 
  return <p>{props.tasks.join(", ")}</p> 
 }; 
 
 // ... same as above 
```

O `.join(", ")` é usado para pegar cada elemento de dentro da matriz e uni-los a uma string a ser exibida.

Estamos usando a modularidade do React neste exemplo para exibir as tarefas passadas por dois componentes diferentes para um componente comum que renderiza o HTML final.