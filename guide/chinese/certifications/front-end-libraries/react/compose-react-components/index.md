---
title: Compose React Components
localeTitle: 撰写反应组件
---
## 撰写反应组件

### 暗示

使用嵌套组件，如上一个问题所述，以呈现组件。

### 解

以下是chakkenge的解决方案，它在一个组件中呈现Citrus和NonCitrus，然后在另一个组件中呈现：

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

### 相关链接：

*   [组件和道具](https://reactjs.org/docs/components-and-props.html)
*   [嵌套组件](http://www.reactjstutorial.net/nested-components.html)