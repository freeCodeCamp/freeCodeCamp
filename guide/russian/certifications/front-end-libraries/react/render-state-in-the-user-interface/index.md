---
title: Render State in the User Interface
localeTitle: Состояние визуализации в пользовательском интерфейсе
---
## Состояние визуализации в пользовательском интерфейсе

В этом случае вам нужно будет отобразить значение состояния в `<h1>` , довольно просто.

## намек

Просто создайте `<h1>` и `this.state.name` между тегом.

## Решение

```jsx
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      name: 'freeCodeCamp' 
    } 
  } 
  render() { 
    return ( 
      <div> 
        { /* change code below this line */ } 
        <h1>{this.state.name}</h1> 
        { /* change code above this line */ } 
      </div> 
    ); 
  } 
 }; 

```