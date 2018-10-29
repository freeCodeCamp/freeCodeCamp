---
title: Write Reusable JavaScript with Functions
localeTitle: 用函数编写可重用的JavaScript
---
## 用函数编写可重用的JavaScript

函数允许您反复重用代码。我们的任务是创建一个简单的`reusableFunction()` ，将“Hi World”输出到控制台（可以通过**Ctrl + Shift + I**到达）。

首先使用`function`关键字，然后键入函数名称（遵循Camel Case格式）。然后，键入`()` ，并创建`{}`括号。像这样：

```javascript
function reusableFunction() {} 
```

现在，您的函数已准备好输入。使用`console.log()`在控制台中打印消息。基本代码解决方案如下：

```javascript
function reusableFunction() { 
    console.log("Hi World"); 
 } 

```