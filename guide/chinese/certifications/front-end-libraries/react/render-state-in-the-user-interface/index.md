---
title: Render State in the User Interface
localeTitle: 在用户界面中渲染状态
---
## 在用户界面中渲染状态

在挑战中，您需要在`<h1>`标记中呈现状态值，非常简单。

## 暗示

只需创建一个`<h1>`标记并在标记之间渲染`this.state.name` 。

## 解

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