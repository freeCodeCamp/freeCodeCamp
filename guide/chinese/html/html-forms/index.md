---
title: HTML Forms
localeTitle: HTML表单
---
## HTML表单

基本上，表单用于收集用户输入的数据，然后将其发送到服务器以进行进一步处理。它们可用于不同类型的用户输入，例如姓名，电子邮件等。

表单包含围绕`<form></form>`标签的控件元素，如`input` ，可以有类似的类型：

*   `text`
*   `email`
*   `password`
*   `checkbox`
*   `radio`
*   `submit`
*   `range`
*   `search`
*   `date`
*   `time`
*   `week`
*   `color`
*   `datalist`

代码示例：

```html

<form> 
    <label for="username">Username:</label> 
    <input type="text" name="username" id="username"> 
    <label for="password">Password:</label> 
    <input type="password" name="password" id="password"> 
    <input type="radio" name="gender" value="male">Male<br> 
    <input type="radio" name="gender" value="female">Female<br> 
    <input type="radio" name="gender" value="other">Other 
    <input list="Options"> 
    <datalist id="Options"> 
      <option value="Option1"> 
      <option value="Option2"> 
      <option value="Option3"> 
    </datalist> 
    <input type="submit" value="Submit"> 
    <input type="color"> 
    <input type="checkbox" name="correct" value="correct">Correct 
 </form> 
```

形成的其他元素可以包含：

*   `textarea` - 是一个多行框，最常用于添加一些文本，例如。评论。 textarea的大小由行数和列数定义。
*   `select` - 与`<option></option>`标签一起创建下拉选择菜单。
*   `button` - 按钮元素可用于定义可单击按钮。

有关HTML FORMS的更多信息。

如果要从站点访问者收集一些数据，则需要HTML表单。例如，在用户注册期间，您希望收集姓名，电子邮件地址，信用卡等信息。

表单将从站点访问者获取输入，然后将其发布到后端应用程序，如CGI，ASP脚本或PHP脚本等。后端应用程序将根据内部定义的业务逻辑对传递的数据执行所需的处理应用程序。

有各种表单元素可用，如文本字段，textarea字段，下拉菜单，单选按钮，复选框等。

HTML `<form>`标记用于创建HTML表单，它具有以下语法 -

`html <form action = "Script URL" method = "GET|POST"> form elements like input, textarea etc. </form>`

如果未定义表单方法，则默认为“GET”。

表单标记还可以具有名为“target”的属性，该属性指定链接将打开的位置。它可以在浏览器选项卡，框架或当前窗口中打开。

action属性定义提交表单时要执行的操作。 通常，当用户单击提交按钮时，表单数据将发送到脚本URL的网页。如果省略action属性，则操作将设置为当前页面。