---
title: Set State with this.setState
localeTitle: 使用this.setState设置State
---
## 使用this.setState设置State

#### 提示1：

```JSX
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      name: 'Initial State' 
    }; 
    this.handleClick = this.handleClick.bind(this); 
  } 
  handleClick() { 
    // change code below this line 
       // Update the state data by using "this.setState()" method. 
       // You can look to the sample inside the description for calling "setState()" method. 
    // change code above this line 
  } 
  render() { 
    return ( 
      <div> 
        <button onClick={this.handleClick}>Click Me</button> 
        <h1>{this.state.name}</h1> 
      </div> 
    ); 
  } 
 }; 
```

## 解

```JSX
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      name: 'Initial State' 
    }; 
    this.handleClick = this.handleClick.bind(this); 
  } 
  handleClick() { 
    // change code below this line 
    this.setState({ 
      name: 'React Rocks!' 
    }); 
    // change code above this line 
  } 
  render() { 
    return ( 
      <div> 
        <button onClick={this.handleClick}>Click Me</button> 
        <h1>{this.state.name}</h1> 
      </div> 
    ); 
  } 
 }; 
```

### 代码说明：

当用户单击按钮时，将调用“handleClick（）”方法 在此方法中，构造函数状态的数据将通过“setState（）”方法更新。 然后将使用构造函数状态的新数据更改h1标记。