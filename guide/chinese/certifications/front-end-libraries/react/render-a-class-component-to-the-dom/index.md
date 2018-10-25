---
title: Render a Class Component to the DOM
localeTitle: 将类组件渲染到DOM
---
## 将类组件渲染到DOM

你的代码应该看起来像这样：

```javascript
class TypesOfVehicles extends React.Component { 
    constructor(props) { 
        super(props); 
    } 
    render() { 
        return ( 
          <div> 
          <h1>Types of Vehicles:</h1> 
          <Car /> 
          <Motorcycle /> 
          </div> 
        ); 
    } 
 } 
 ReactDOM.render(<TypesOfVehicles />,'node-id') 
```

ReactDOM.render语法可能有点棘手，在传入类组件时需要使用三角括号。此外，两个子组件在幕后声明，如果您习惯于在代码编辑器中定义并在您面前可见的所有变量，则可能会造成混淆。

### 暗示

*   使用document.getElementById（'id'）来获取目标节点

### 相关链接

*   [渲染元素](https://reactjs.org/docs/rendering-elements.html)