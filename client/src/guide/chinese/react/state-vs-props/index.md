---
title: State vs Props
localeTitle: 州与道具
---## 州与道具

当我们开始使用React组件时，我们经常听到两个术语。他们是`state`和`props` 。因此，在本文中，我们将探讨它们的含义以及它们之间的区别。

## 州：

*   状态是组件拥有的东西。它属于定义它的特定组件。 例如，一个人的年龄是该人的状态。
*   国家是可变的。但它只能由拥有它的组件来改变。因为我只能改变我的年龄，而不是其他任何人。
*   您可以使用`this.setState()`更改状态

请参阅以下示例以了解状态：

#### Person.js

```javascript
  import React from 'react'; 
 
  class Person extends React.Component{ 
    constructor(props) { 
      super(props); 
      this.state = { 
        age:0 
      this.incrementAge = this.incrementAge.bind(this) 
    } 
 
    incrementAge(){ 
      this.setState({ 
        age:this.state.age + 1; 
      }); 
    } 
 
    render(){ 
      return( 
        <div> 
          <label>My age is: {this.state.age}</label> 
          <button onClick={this.incrementAge}>Grow me older !!<button> 
        </div> 
      ); 
    } 
  } 
 
  export default Person; 
```

在上面的例子中， `age`是`Person`组件的状态。

## 道具：

*   道具类似于方法参数。它们被传递到使用该组件的组件。
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

在上面的例子中， `const person = <Person character = "good"></Person>`我们将`const person = <Person character = "good"></Person>` `character = "good"` prop传递给`Person`组件。

它输出为“我是一个好人”，事实上我是。

关于州和道具还有很多东西需要学习。通过实际潜入编码可以学到很多东西。因此，通过编码让你的手弄脏。

如果需要，请在[推特](https://twitter.com/getifyJr)上与我联系。

快乐的编码!!!