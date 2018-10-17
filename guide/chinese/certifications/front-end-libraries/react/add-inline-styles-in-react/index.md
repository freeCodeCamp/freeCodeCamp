---
title: Add Inline Styles in React
localeTitle: 在React中添加内联样式
---
## 在React中添加内联样式

您可以声明将对象直接作为prop'style'传递的组件样式。请记住，样式对象的每个属性都是camelcased。所以像'font-size'这样的属性被声明为'fontSize'是一个有效的javascript对象属性。

### 扰流板

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

### 资源

[DOM元素风格](https://reactjs.org/docs/dom-elements.html#style)