---
title: Compose React Components
localeTitle: Компоновка компонентов реакции
---
## Компоновка компонентов реакции

### намек

Используйте вложенные компоненты, как в предыдущем challemge, для рендеринга компонентов.

### Решение

Следующее - решение чакенге, где оно отображает цитрусовые и NonCitrus в компоненте, который затем отображается в другом:

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

### Полезные ссылки:

*   [Компоненты и реквизит](https://reactjs.org/docs/components-and-props.html)
*   [Вложенные компоненты](http://www.reactjstutorial.net/nested-components.html)