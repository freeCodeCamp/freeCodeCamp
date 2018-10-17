---
title: Get Started
localeTitle: 入门
---
## 入门

Bootstrap是一个由Twitter开发的免费开源框架，它提供了各种用于前端Web开发的模板。使用Bootstrap可以轻松设计完全响应的网站，是一个值得学习的框架。

#### 什么是响应式网站

响应式网站是一个网站，可根据浏览器的大小调整和重新排列页面上的项目。通过响应式网站，如果您调整浏览器的大小，您可以看到实时更改。 Bootstrap使您的网站对您有所回应。

#### 如何将Bootstrap添加到我的页面

向页面添加引导程序是一个快速的过程，只需将以下内容添加到代码中的`<head>`标记即可。

```html

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"> 
```

您还需要在代码中的`body`标记之间添加以下内容。使用bootstrap时，在使用Bootstrap的许多功能时，你将使用`<div>`标签，每个标签都有自己独特的一组类，允许标签执行它的任务。此Bootstrap指南的其他部分将显示Bootstrap如何使用`<div>`标记的更多示例。 （ `<div>`标签不是Bootstrap独有的，但Bootstrap使用它们。）。下面是代码中添加到代码中的`body`标记以完成入门的代码。请记住，虽然这会创建容器，但在将内容添加到容器之前，页面仍将保持空白。

```html

<div class="alert alert-success" role="alert"> 
    <strong>Congratulations!</strong> 
    <p>Bootstrap is now working on this page</p> 
 </div> 
```

**恭喜！**

Bootstrap现在正在这个页面上工作

#### 更多信息

*   [Bootstrap的官方网站](http://getbootstrap.com/getting-started/)