---
title: What Does JavaScript Void 0 Mean
localeTitle: JavaScript无效0意味着什么
---
## JavaScript无效0意味着什么

**JavaScript的void运算符计算表达式并返回undefined** 。

使用控制台验证相同： -

![ConsoleOutput](https://github.com/srawat19/-Guide_Images/blob/master/VoidConsole.PNG?raw=true)

**_注意_** ： -不管**空隙**沿通过的任何值的， _如上所示总是返回**未定义**_ 。 但是， **操作数0的空格是首选** 。

**使用操作数0的两种方法 - > void（0）或void 0.**它们中的任何一个都可以。

#### 何时使用Javascript void（0）？

单击链接时，您不希望浏览器加载新页面或刷新同一页面（具体取决于指定的URL）。 而是执行附加到该链接的JavaScript。

#### 使用Javascript void（0）的示例示例1：

```html

<html> 
 <body> 
 <a href="javascript:void(0);alert('Hello ! I am here')">Click Me</a> 
 </body> 
 </html> 
```

#### 输出：

单击ClickMe链接时，会弹出如下警告：

![输出1](https://github.com/srawat19/-Guide_Images/blob/master/voidOutput1.PNG?raw=true)

#### 使用Javascript void（0）的示例示例2：

```html

<html> 
 <body> 
 <a href="javascript:void(0)" ondblclick="alert('Hi,i didnt refresh the page')" )>Click Me</a> 
 </body> 
 </html> 
```

#### 输出：

双击链接时，将弹出警报而不刷新任何页面。

#### 使用Javascript void（0）的示例示例3：

```html

<html> 
 <body> 
 <a href="javascript:void(0);https://www.google.co.in/" 
 ondblclick="alert('Hello !! You will see me and not get redirected to google.com ')">Click Me</a> 
 </body> 
 </html> 
```

#### 输出：

当您双击该链接时，会弹出一个提醒，关闭它也不会重定向到google.com。

#### 没有Javascript的示例示例void（0）：

```html

<html> 
 <body> 
 <a href="https://www.google.co.in/" ondblclick="alert('Hello !! You will see me and then get redirected to google.com even if not needed')">Click Me</a> 
 </body> 
 </html> 
```

#### 输出：

当您双击该链接时，将弹出一个提醒，关闭它将重定向到google.com。

#### 结论：

当您需要阻止任何不需要的页面刷新或重定向时， **void**运算符非常有用。 相反，执行一些JavaScript操作。

#### 更多信息：

1） [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void) 2） [了解void 0](https://www.quackit.com/javascript/tutorial/javascript_void_0.cfm)