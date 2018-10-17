---
title: State
localeTitle: 州
---
# 州

State是数据来源的地方。

我们应该总是尽量使我们的状态尽可能简单，并尽量减少有状态组件的数量。例如，如果我们有10个需要来自州的数据的组件，我们应该创建一个容器组件来保持所有这些组件的状态。

State基本上就像一个组件中随处可用的全局对象。

有状态类组件的示例：

```javascript
import React from 'react'; 
 
 class App extends React.Component { 
  constructor(props) { 
    super(props); 
 
    // We declare the state as shown below 
 
    this.state = { 
      x: "This is x from state", 
      y: "This is y from state" 
    } 
  } 
  render() { 
    return ( 
      <div> 
        <h1>{this.state.x}</h1> 
        <h2>{this.state.y}</h2> 
      </div> 
    ); 
  } 
 } 
 export default App; 
```

另一个例子：

```javascript
import React from 'react'; 
 
 class App extends React.Component { 
  constructor(props) { 
    super(props); 
 
    // We declare the state as shown below 
    this.state = { 
      x: "This is x from state", 
      y: "This is y from state" 
    } 
  } 
 
  render() { 
    let x1 = this.state.x; 
    let y1 = this.state.y; 
 
    return ( 
      <div> 
        <h1>{x1}</h1> 
        <h2>{y1}</h2> 
      </div> 
    ); 
  } 
 } 
 export default App; 
```

## 更新国家

您可以使用组件上的`setState`方法更改存储在应用程序状态中的数据。

```js
this.setState({ value: 1 }); 
```

请记住， `setState`是异步的，因此在使用当前状态设置新状态时应该小心。一个很好的例子就是你想在你的州增加一个值。

#### 错误的方法

```js
this.setState({ value: this.state.value + 1 }); 
```

如果在同一更新周期中多次调用上述代码，则可能会导致应用程序出现意外行为。为避免这种情况，您可以将更新程序回调函数传递给`setState`而不是对象。

#### 正确的方式

```js
this.setState(prevState => ({ value: prevState.value + 1 })); 
```

## 更新国家

您可以使用组件上的`setState`方法更改存储在应用程序状态中的数据。

```js
this.setState({value: 1}); 
```

请记住， `setState`可能是异步的，因此在使用当前状态设置新状态时应该小心。一个很好的例子就是你想在你的州增加一个值。

##### 错误的方法

```js
this.setState({value: this.state.value + 1}); 
```

如果在同一更新周期中多次调用上述代码，则可能会导致应用程序出现意外行为。为避免这种情况，您可以将更新程序回调函数传递给`setState`而不是对象。

##### 正确的方式

```js
this.setState(prevState => ({value: prevState.value + 1})); 
```

##### 更清洁的方式
```
this.setState(({ value }) => ({ value: value + 1 })); 
```

当仅需要状态对象中的有限数量的字段时，可以将对象破坏用于更清洁的代码。

### 更多信息

*   [反应 - 状态和生命周期](https://reactjs.org/docs/state-and-lifecycle.html)
*   [反应 - 提升状态](https://reactjs.org/docs/lifting-state-up.html)
*   [React Native - State Up](https://facebook.github.io/react-native/docs/state.html)