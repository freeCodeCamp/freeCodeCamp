---
title: Pass an Array as Props
localeTitle: Передайте массив как реквизит
---
## Передайте массив как реквизит

Чтобы передать массив в качестве опоры, сначала массив должен быть объявлен как «задача» для каждого из компонентов, подлежащих визуализации:

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

Затем реквизит должен быть обработан внутри компонента «Список»:

```javascript
const List= (props) => { 
  return <p>{props.tasks.join(", ")}</p> 
 }; 
 
 // ... same as above 
```

Метод `.join(", ")` используется для `.join(", ")` каждого элемента из массива и объединения его в строку, которая должна отображаться.

В этом примере мы используем модульность React, чтобы отображать задачи, переданные двумя различными компонентами, на общий компонент, который отображает окончательный HTML.