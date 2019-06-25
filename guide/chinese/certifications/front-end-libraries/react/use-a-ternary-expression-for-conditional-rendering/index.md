---
title: Use a Ternary Expression for Conditional Rendering
localeTitle: 使用三元表达式进行条件渲染
---
## 使用三元表达式进行条件渲染

这个挑战是仅使用三元表达而不是在代码中使用`If/Else` ，

## 暗示

三元运算符有三个部分，但您可以将几个三元表达式组合在一起。这是基本语法：
```
condition ? expressionIfTrue : expressionIfFalse 
```

## 解

这是使用三元表达的示例解决方案。 首先，您需要在构造函数中声明状态，如下所示

```jsx
constructor(props) { 
    super(props); 
    // change code below this line 
      this.state = { 
        input: '', 
        userAge: '' 
      } 
    // change code above this line 
    this.submit = this.submit.bind(this); 
    this.handleChange = this.handleChange.bind(this); 
  } 
```

然后是三元运算符

```jsx
{ 
    /* change code here */ 
    (this.state.userAge >= 18) ? buttonTwo : (this.state.userAge== '')? buttonOne: buttonThree 
 
 } 

```