---
title: Bind 'this' to a Class Method
localeTitle: 将'this'绑定到类方法
---
## 将'this'绑定到类方法

如果JavaScript `class`上的方法需要访问实例的某些内部`state` ，比如`this.state` ，则该方法需要绑定到`class`的实例。有关'this'绑定的更详细说明，请[点击此处](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md)

### 提示1

像编程中的许多东西一样，绑定它的方法不止一种。对于这个挑战，我们将坚持使用构造函数绑定。

```js
class MyClass { 
  constructor() { 
    this.myMethod = this.myMethod.bind(this); 
  } 
 
  myMethod() { 
    // whatever myMethod does 
  } 
 } 
```

## 扰流板

```jsx
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      itemCount: 0 
    }; 
    // change code below this line 
    this.addItem = this.addItem.bind(this); 
    // change code above this line 
  } 
  addItem() { 
    this.setState({ 
      itemCount: this.state.itemCount + 1 
    }); 
  } 
  render() { 
    return ( 
      <div> 
        { /* change code below this line */ } 
        <button onClick={this.addItem}>Click Me</button> 
        { /* change code above this line */ } 
        <h1>Current Item Count: {this.state.itemCount}</h1> 
      </div> 
    ); 
  } 
 } 

```