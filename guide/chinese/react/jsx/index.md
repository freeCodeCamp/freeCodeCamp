---
title: JSX
localeTitle: JSX
---
# JSX

> JSX是JavaScript XML的缩写。

JSX是一个在JavaScript中使用有效HTML语句的表达式。您可以将此表达式分配给变量并在其他位置使用它。您可以将这些HTML表达式中的其他有效JavaScript表达式和JSX放在大括号（ `{}` ）中。 Babel进一步将JSX编译为`React.createElement()`类型的对象。

### 单行和多行表达式

单行表达式易于使用。

```jsx
const one = <h1>Hello World!</h1>; 
```

当您需要在单个JSX表达式中使用多行时，请在单个括号内编写代码。

```jsx
const two = ( 
  <ul> 
    <li>Once</li> 
    <li>Twice</li> 
  </ul> 
 ); 
```

### 仅使用HTML标记

```jsx
const greet = <h1>Hello World!</h1>; 
```

### 将JavaScript表达式与HTML标记相结合

我们可以在大括号内使用JavaScript变量。

```jsx
const who = "Quincy Larson"; 
 const greet = <h1>Hello {who}!</h1>; 
```

我们还可以在大括号内调用其他JavaScript函数。

```jsx
function who() { 
  return "World"; 
 } 
 const greet = <h1>Hello {who()}!</h1>; 
```

### 只允许使用单个父标记

JSX表达式必须只有一个父标记。我们可以添加嵌套在父元素中的多个标签。

```jsx
// This is valid. 
 const tags = ( 
  <ul> 
    <li>Once</li> 
    <li>Twice</li> 
  </ul> 
 ); 
 
 // This is not valid. 
 const tags = ( 
  <h1>Hello World!</h1> 
  <h3>This is my special list:</h3> 
  <ul> 
    <li>Once</li> 
    <li>Twice</li> 
  </ul> 
 ); 
```

### 更多信息

*   [介绍JSX](https://reactjs.org/docs/introducing-jsx.html)