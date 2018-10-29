---
title: Create a React Component
localeTitle: 创建一个React组件
---
## 创建一个React组件

## 提示1：

*   你会一直看到这些React类组件，所以现在是适应它们的好时机。请记住，在本练习中，您不必定义组件，只需要使一个函数在标记的行之间返回一个小的html。
*   记住上一节并返回一个“div”元素，其中包含带有文本Hello React！的“h1”。
*   “div”元素有一个孩子，所以记得关闭所有标签。

## 解

```javascript
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    // change code below this line 
    return ( 
      <div> 
       <h1>Hello React!</h1> 
      </div> 
    ); 
    // change code above this line 
  } 
 }; 
```

请注意，您不需要在文本周围加上引号，因为在使用JSX时，它被视为HTML。还要检查以确保您的拼写，大小写和标点符号正确无误！如果所有这些代码看起来很奇怪，请在freeCodeCamp上查看Javascript ES6上的一些很棒的资料。