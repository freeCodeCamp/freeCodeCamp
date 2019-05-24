---
title: Render with an If/Else Condition
localeTitle: 使用If / Else条件渲染
---
## 使用If / Else条件渲染

### 方法

在组件的render方法内部，编写if / else语句，每个语句都有自己的返回方法，该方法具有不同的JSX。这使程序员能够根据各种条件呈现不同的UI。

首先，将当前返回方法包装在if语句中，并设置条件以检查变量'display'是否为true。请记住，您使用`this.state`访问状态。

### 解

```jsx
if (this.state.display === true) { 
  return ( 
    <div> 
      <button onClick={this.toggleDisplay}>Toggle Display</button> 
      <h1>Displayed!</h1> 
    </div> 
  ); 
 } 
```

接下来，创建一个else语句，返回**不带** `h1`元素的相同JSX。

```jsx
else { 
  return ( 
    <div> 
      <button onClick={this.toggleDisplay}>Toggle Display</button> 
    </div> 
  ) 
 } 

```