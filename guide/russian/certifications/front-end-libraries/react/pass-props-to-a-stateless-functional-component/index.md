---
title: Pass Props to a Stateless Functional Component
localeTitle: Передача реквизитов функциональному компоненту без состояния
---
## Передача реквизитов функциональному компоненту без состояния

### Подсказка 1

Определите имя с указанием даты в компоненте «Календарь» следующим образом:

```jsx
<CurrentDate date={Date()} /> 
```

\`

### Подсказка 2

Синтаксис prop.propName используется для отображения опоры.

### Решение

Назначьте опору с именем date в компоненте «Календарь» следующим образом и визуализируйте его в компоненте «Календарь», например:

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