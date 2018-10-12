---
title: Render Conditionally from Props
localeTitle: 从道具有条理地渲染
---
## 从道具有条理地渲染

这是一个有点棘手的挑战，但很容易。

## 解

使用适当的增量声明更改`handleClick()` 。

```react.js
handleClick() { 
  this.setState({ 
    counter: this.state.counter + 1 
  }); 
 } 
```

在`render()`方法中，使用质询描述中提到的`Math.random()`并编写三元表达式以在**Results**组件中传递`props` 。

```react.js
 let expression = Math.random() > .5; 
 
 {(expression == 1)? <Results fiftyFifty="You win!"/> : <Results fiftyFifty="You lose!"/> } 
```

然后在Results组件中渲染`fiftyFifty`道具。

```react.js
  <h1> 
  { 
    this.props.fiftyFifty 
  } 
  </h1> 

```