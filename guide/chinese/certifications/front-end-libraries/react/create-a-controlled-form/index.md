---
title: Create a Controlled Form
localeTitle: 创建受控表格
---
## 创建受控表格

创建受控表单与创建受控输入的过程相同，除非您需要处理提交事件。

首先，创建一个受控输入，将其值存储在状态中，以便存在单一的事实来源。 （这是您在上一次挑战中所做的。）创建一个输入元素，将其value属性设置为位于state中的输入变量。请记住， `this.state`可以访问状态。接下来，设置input元素的`onChange`属性以调用函数'handleChange'。

### 解

```jsx
<input value={this.state.input} onChange={this.handleChange}/> 
```

接下来，为组件创建handleSubmit方法。首先，因为您的表单正在提交，您必须阻止页面刷新。其次，调用`setState()`方法，传入要更改的不同键值对的对象。在这种情况下，您希望将“submit”设置为变量“input”的值，并将“input”设置为空字符串。

```jsx
handleSubmit(event) { 
  event.preventDefault(); 
  this.setState({ 
    input: '', 
    submit: this.state.input 
  }); 
 } 
```

现在您的数据正在处理状态，我们可以使用这些数据。创建一个`h1`元素。你的`h1`元素里面放了你的'submit'变量。请记住，'submit'位于州内，因此您需要使用`this.state` 。此外，将变量放在JSX中需要花括号`{ }`因为它是JavaScript。

```jsx
<h1>{this.state.submit}</h1> 

```