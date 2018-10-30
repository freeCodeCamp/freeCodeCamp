---
title: State vs Props
localeTitle: state 与 props
---
## state 与 props

当我们开始使用React组件时，我们经常听到两个术语。他们是`state`和`props` 。因此，在本文中，我们将探讨它们的含义以及它们之间的区别。

## State：

*   state是类组件拥有的东西。它属于定义它的特定组件。 例如，一个人的年龄是该人的状态。
*   state的值是可变的。但它只能由拥有它的组件来改变。因为我只能改变我的年龄，而不是其他任何人。
*   您可以使用`this.setState()`更改组件的state值

请参阅以下示例以了解状态：

#### Person.js

```javascript
  import React from 'react'; 
  
  // 此组件为类类型组件
  class Person extends React.Component{ 
  
    // 初始化state
    constructor(props) { 
      super(props); 
      this.state = { 
        age:0 
      this.incrementAge = this.incrementAge.bind(this) 
    } 
 
    // 修改state值
    incrementAge(){ 
      this.setState({ 
        age:this.state.age + 1; 
      }); 
    } 
 
    render(){ 
      return( 
        <div> 
          <label>My age is: {this.state.age}</label>  //利用this.state.XXX去获取 state 值
          <button onClick={this.incrementAge}>Grow me older !!<button> 
        </div> 
      ); 
    } 
  } 
 
  export default Person; 
```

在上面的例子中， `age`是`Person`组件的state。

## Props：

*   props类似于方法参数。它们被传递到使用该组件的组件。
*   道具是不可改变的。它们是只读的。

请参阅以下示例以了解道具：

#### Person.js

```javascript
  import React from 'react'; 
 
  class Person extends React.Component{ 
    render(){ 
      return( 
        <div> 
          <label>I am a {this.props.character} person.</label> 
        </div> 
      ); 
    } 
  } 
 
  export default Person; 
 
  const person = <Person character = "good"></Person> 
```

在上面的例子中， `const person = <Person character = "good"></Person>`我们将`const person = <Person character = "good"></Person>` `character = "good"` prop传递给`Person`组件。然后，您可以在Person组件中通过 props.character 去调用上层传入的character值。

它输出为“我是一个好人”，事实上我也确实是。

关于state和props我们还有很多东西需要学习。通过实际编程我们可以学到更多东西。因此，快去实践吧。

如有需要，请在[推特](https://twitter.com/getifyJr)上与我联系。

编码快乐!!!
