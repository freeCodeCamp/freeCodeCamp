---
title: How to Create an HTML Button That Acts Like a Link
localeTitle: 如何创建一个像链接一样的HTML按钮
---
## 如何创建一个像链接一样的HTML按钮

有时您可能希望使用按钮链接到其他页面或网站，而不是提交表单或类似的内容。这很简单，可以通过多种方式实现。

一种方法是简单地将`<button>`标签包装在`<a>`标签中：

```html

<a href='https://www.freecodecamp.org/'><button>Link To freeCodeCamp</button></a> 
```

这会将整个按钮转换为链接。

第二种方法是像往常一样使用`<a>`标签创建链接，然后通过CSS设置样式：

```html

<a href='https://www.freecodecamp.org/'>Link To freeCodeCamp</a> 
```

创建链接后，您可以使用CSS使其看起来像一个按钮。例如，您可以添加边框，背景颜色，以及用户悬停链接时的某些样式...

添加按钮的另一种方法是将`input`包装在`form`标记内。在表单操作属性中指定所需的目标URL。

```html

<form action="http://google.com"> 
    <input type="submit" value="Go to Google" /> 
 </form> 
```

#### 更多信息：

*   [FreeCodeCamp指南 - 样式按钮](https://guide.freecodecamp.org/css/css-buttons/)
*   [如何创建一个像链接一样的HTML按钮？](https://stackoverflow.com/questions/2906582/how-to-create-an-html-button-that-acts-like-a-link)