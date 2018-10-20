---
title: Debugging Node files using CLI commands
localeTitle: 使用CLI命令调试节点文件
---
## 使用CLI命令调试节点文件

在本教程中，您将学习如何在命令行上调试Node.js代码。您可以使用浏览器的DevTools轻松调试纯JavaScript代码。对于Node，您可以在不离开命令行界面（CLI）的情况下调试代码。

假设您有一个名为`contents.js`的文件。您将使用`node`命令运行该文件。

```bash
node contents.js 
```

由于您正在编写Node.js代码，因此必须已经知道这一点。现在必须调试弹出的任何错误。要在调试模式下运行该文件，请在运行该文件时附加关键字`inspect` 。

```bash
node inspect contents.js 
```

现在，此命令将以调试模式打开您的文件。从这里开始，您可以通过按键盘上的**N**键一次一行地执行代码。

调试器将从第一行开始。按**N** ，可以将调试器移动到下一行。如果第一行出错，则会显示错误而不是移动到第二行。这非常有用。例如，如果第17行出现错误，它将在向前移动之前显示错误。

您的逻辑中可能存在错误，这意味着您希望显示某个值，而是显示不同的值。在这种情况下，添加`console.log()`可能会对您有所帮助，并且在调试模式下，更容易识别错误原因。

* * *

现在有时候，你的源代码很大。您进入调试模式以调试错误，并确定错误来自第52行的函数。但是，由于调试模式从第1行开始，您是否别无选择，只能逐行访问第52行？绝对不！

只需在函数前添加关键字`debugger` 。

```javascript
console.log("Outside the function....everything's going smoothly"); 
 
 debugger; 
 
 function doesSomething() { 
    //some logic 
    console.log("Something went wrong inside here!"); 
 } 
```

现在再次以调试模式打开文件，这次按键盘上的**C.**

按**N**将调试器移动到下一行，按**C键**告诉调试器一次完成整个代码。这与没有调试模式的情况相同。 _但是_ ，这次你的代码还有一个补充。你猜对了 - `debugger`关键字。按**C**通常会运行代码直到结束，但由于添加`debugger` ，它将在函数启动之前停止。

因此，在调试模式下运行文件后，按**C**将跳过代码并在`debugger`关键字的函数之前停止。之后，您可以一次开始逐行执行该功能，直到找到错误为止。