---
title: Functional Components vs Class Components
localeTitle: 功能组件与类组件
---
## 功能组件与类组件

React中主要有两个组件：

*   功能组件
*   类组件

## 功能组件

*   功能组件是基本的JavaScript功能。这些通常是箭头函数，但也可以使用常规`function`关键字创建。
*   有时被称为“哑”或“无状态”组件，因为它们只是接受数据并以某种形式显示它们;那就是他们主要负责渲染UI。
*   React生命周期方法（例如， `componentDidMount` ）不能用于功能组件。
*   功能组件中没有使用渲染方法。
*   这些主要负责UI，通常只是表示（例如，Button组件）。
*   功能组件可以接受和使用道具。
*   如果您不需要使用React状态，则应该支持功能组件。

```js
import React from "react"; 
 
 const Person = props => ( 
  <div> 
    <h1>Hello, {props.name}</h1> 
  </div> 
 ); 
 
 export default Person; 
```

## 类组件

*   类组件使用ES6类并在React中扩展`Component`类。
*   有时称为“智能”或“有状态”组件，因为它们倾向于实现逻辑和状态。
*   可以在类组件内使用React生命周期方法（例如， `componentDidMount` ）。
*   您将props传递给类组件并使用`this.props`访问它们

```js
import React, { Component } from "react"; 
 
 class Person extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
      myState: true; 
    } 
  } 
 
  render() { 
    return ( 
      <div> 
        <h1>Hello Person</h1> 
      </div> 
    ); 
  } 
 } 
 
 export default Person; 
```

## 更多信息

*   [反应组件](https://reactjs.org/docs/components-and-props.html)
*   [功能与类组件](https://react.christmas/16)
*   [React中的有状态与无状态功能组件](https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541)
*   [State和LifeCycle](https://reactjs.org/docs/state-and-lifecycle.html)