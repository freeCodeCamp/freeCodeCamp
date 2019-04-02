---
title: Pass a Callback as Props
localeTitle: 将回调作为道具传递
---
## 将回调作为道具传递

### 描述

*   将`GetInput`组件添加到MyApp中的render方法，然后将一个名为`inpu`的prop从`inputValue`的状态传递给`inputValue` 。还要创建一个名为`handleChange`的prop，并将输入处理程序`handleChange`给它。
*   将`RenderInput`添加到MyApp中的render方法，然后创建一个名为`input`的prop，并将`inputValue`从state传递给它。

### 提示

*   `state`是一个属性`Myapp`类，所以用“this.state”来获取对象的值
*   要了解有关状态和道具的更多信息，请阅读[状态和生命周期](https://reactjs.org/docs/state-and-lifecycle.html)以及[组件和道具](https://reactjs.org/docs/components-and-props.html) 。

### 解

```javascript
class MyApp extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      inputValue: '' 
    } 
    this.handleChange = this.handleChange.bind(this); 
  } 
  handleChange(event) { 
    this.setState({ 
      inputValue: event.target.value 
    }); 
  } 
  render() { 
    return ( 
       <div> 
        { /* change code below this line */ 
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/> 
        } 
        { /* change code above this line */ 
        <RenderInput input={this.state.inputValue}/> 
        } 
       </div> 
    ); 
  } 
 }; 

```