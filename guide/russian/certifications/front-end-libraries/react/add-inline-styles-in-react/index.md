---
title: Add Inline Styles in React
localeTitle: Добавить встроенные стили в действии
---
## Добавить встроенные стили в действии

Вы можете объявить стиль компонента, передающий объект напрямую, как стиль «prop». Просто помните, что каждое свойство объекта стиля находится на камне. Таким образом, свойства типа «font-size» объявлены как «fontSize» как действительное свойство объекта javascript.

### Спойлер

```jsx
class Colorful extends React.Component { 
  render() { 
    // change code below this line 
    return ( 
      <div style={{color: "yellow", fontSize: 24}}>Style Me!</div> 
    ); 
    // change code above this line 
  } 
 }; 
```

### Ресурсы

[Стиль элементов DOM](https://reactjs.org/docs/dom-elements.html#style)