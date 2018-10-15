---
title: Create a Component with Composition
localeTitle: Создание компонента с композицией
---
## Создание компонента с композицией

### Подсказка 1

Добавьте компонент, который будет отображаться в компоненте, в котором он должен отображаться.

### Подсказка 2

Используйте самозакрывающиеся теги JSX.

### Подсказка 3

Компонент, который будет отображаться, является ChildComponenet и должен быть представлен в ParentComponent

### Решение

Ниже будет предоставлен дочерний компонент ParentComponent, если необходимо:

```javascript
class ParentComponent extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return ( 
      <div> 
        <h1>I am the parent</h1> 
        <ChildComponent /> 
      </div> 
    ); 
  } 
 }; 

```