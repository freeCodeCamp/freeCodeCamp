---
title: Body Bgcolor Attribute
localeTitle: 身体Bgcolor属性
---
## 身体Bgcolor属性

`<body bgcolor>`属性为HTML文档指定背景颜色。

**语法** ：

`<body bgcolor="color">` 颜色值可以是颜色名称（如`purple` ）或十六进制值（如`#af0000` ）。

要为网页添加背景颜色，可以使用`<body bgcolor="######">`属性。它指定要显示的HTML文档的颜色。

**例如：**

```html

<html> 
  <head> 
    <title>Body bgcolor Attribute example</title> 
  </head> 
  <body bgcolor="#afafaf"> 
    <h1>This webpage has colored background.</h1> 
  </body> 
 </html> 
```

您可以通过将######替换为十六进制值来更改颜色。对于简单的颜色，您也可以使用单词，例如“红色”或“黑色”。

所有主流浏览器都支持`<body bgcolor>`属性。

_注意：_

*   HTML 5不支持`<body bgcolor>`属性。使用CSS实现此目的。怎么样？通过使用以下代码： `<body style="background-color: color">` 当然，您也可以在单独的文档中而不是内联方法中执行此操作。
    
*   不要在`<body bgcolor>`属性中使用RGB值，因为`rgb()`仅用于CSS，也就是说，它不能用于HTML。
    

**看到它在行动：** https://repl.it/Mwht/2

**其他资源：**

*   HTML颜色名称：https：//www.w3schools.com/colors/colors\_names.asp
*   CSS background-color属性：https：//www.w3schools.com/cssref/pr\_background-color.asp