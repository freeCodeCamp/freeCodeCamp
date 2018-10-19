---
title: Use State to Toggle an Element
localeTitle: 使用State切换元素
---
## 使用State切换元素

*   您可以通过检查和更改其状态来切换元素。

## 提示1：

*   记住要结合`this`的方法构造。

```javascript
    this.toggleVisibility = this.toggleVisibility.bind(this); 
```

## 提示2：

*   请记住，您可以使用JavaScript函数来检查元素的状态。

## 解：

```jsx
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      visibility: false 
    }; 
    // change code below this line 
    this.toggleVisibility = this.toggleVisibility.bind(this); 
    // change code above this line 
  } 
  // change code below this line 
  toggleVisibility() { 
    if (this.state.visibility == true) { 
    this.setState({ 
      visibility: false 
    });} else { 
      this.setState({ 
        visibility: true 
      }) 
    } 
  } 
  // change code above this line 
  render() { 
    if (this.state.visibility) { 
      return ( 
        <div> 
          <button onClick={this.toggleVisibility}>Click Me</button> 
          <h1>Now you see me!</h1> 
        </div> 
      ); 
    } else { 
      return ( 
        <div> 
          <button onClick={this.toggleVisibility}>Click Me</button> 
        </div> 
      ); 
    } 
  } 
 }; 

```