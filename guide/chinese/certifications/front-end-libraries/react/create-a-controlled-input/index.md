---
title: Create a Controlled Input
localeTitle: 创建受控输入
---
## 创建受控输入

这里的想法是创建一个受控输入，其中文本从您的状态更新，而不是从浏览器更新。

首先，我们有一个骨架，其中我们有一个名为`ControlledInput`的类和一个名为`input`的状态变量。现在您需要做的就是采用该状态，当观察到输入框中的更改时，会触发一个函数，该函数会更改该输入框内及其下方段落中的值。

因此，您首先要制作一个更改状态变量`input`的函数。
```
handleChange(event) { 
    this.setState({ 
      input: event.target.value 
    }); 
 } 
```

现在，您的下一步将涉及创建一个输入框，并在有人输入任何内容时触发它。幸运的是，我们有一个名为`onChange()`的事件来实现此目的。 PS -这里是绑定的另一种方式`this`为功能
```
<input onChange = {this.handleChange.bind(this)}/> 
```

但这不符合你的目的。虽然你可能觉得它的工作原理。所以这里发生的是来自浏览器而不是状态的文本更新。所以为了纠正这个问题，我们将添加一个`value`属性并将其设置为`this.state.input`到input元素，这将使输入受状态控制。
```
<input value = {this.state.input} onChange = {this.handleChange.bind(this)}/> 
```

它可能有点难以消化，但为了使事情更清楚，请尝试删除整个`onChange`事物，以便您的代码看起来像这样
```
<input value = {this.state.input}/> 
```

现在再次运行测试你能输入什么吗？ 这个问题的答案将是“NO”，因为你的输入框中从状态变量中获得价值`input` ，因为在状态没有改变`input` （空字符串开始），当您触发功能，只会发生`handleChange()`这将只有在你有像`onChange()`这样的事件处理程序时才会发生，因此输入框内的字符串将保持不变，即空字符串。