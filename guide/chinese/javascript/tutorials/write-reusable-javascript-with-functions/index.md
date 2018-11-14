---
title: Write Reusable JavaScript with Functions
localeTitle: 用函数编写可重用的JavaScript
---
在JavaScript中，我们可以将代码划分为称为函数的可重用部分。

这是一个函数的例子：
```
function functionName() { 
  console.log("Hello World"); 
 } 
```

您可以使用其名称后跟括号来`call`或`invoke`此函数，如下所示：
```
functionName(); 
```

每次调用该函数时，它都会在开发控制台上打印出“Hello World”消息。每次调用函数时，都会执行大括号之间的所有代码。

这是另一个例子：
```
function otherFunctionName (a, b) { 
    return(a + b); 
 } 
```

我们可以像这样`call`或`invoke`我们的函数：
```
otherFunctionName(1,2); 
```

它将运行并将其返回值返回给我们。