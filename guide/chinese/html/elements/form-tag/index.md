---
title: Form Tag
localeTitle: 表格标签
---
## 表格标签

`<form>`标签用于在HTML中创建用于用户输入的表单。一旦用户输入数据并提交数据，数据就会被发送到服务器进行处理。

以下是如何使用`<form>`标记的基本示例：

```html

<form action="/example.php" method="get"> 
 Name: <input type="text"><br> 
 Email Address: <input type="text"><br> 
 <input type="submit" value="Submit"> 
 </form> 
```

### 动作属性

每个`<form>`元素都需要一个action属性。 action属性的值是服务器上的URL，它将在提交时接收表单中的数据。

以下是使用action属性的示例：

```html

<form action="http://www.google.com/form.php" method="get"> 
 <p>Controls will appear inside here.</p> 
 </form> 
```

如您所见，表单正在将其数据提交到网址[http://www.google.com/from.php](http://www.google.com/from.php) 。

### 方法

可以使用GET或POST方法提交表单。

*   GET方法适用于较短的表单，因为它将数据附加到action属性内指定的URL的末尾。
    
*   POST方法适用于较长的表单，或者在数据库中添加或删除信息时。使用POST方法，表单的值将在HTTP标头中发送。
    

### 分子

`<form>`元素至少具有嵌套在其中的以下元素之一：

*   [`<input>`](https://guide.freecodecamp.org/html/elements/input "输入")
*   [`<button>`](https://guide.freecodecamp.org/html/elements/button-tag "按键")
*   [`<label>`](https://guide.freecodecamp.org/html/elements/label-tag "标签")
*   [`<select>`](https://guide.freecodecamp.org/html/elements/select-tag "选择")
*   [`<textarea>`](https://guide.freecodecamp.org/html/elements/textarea-tag "多行文本")
*   [`<fieldset>`](https://guide.freecodecamp.org/html/elements/fieldsets-and-legends "字段集")

### 资源

*   [W3学校表格资源](https://www.w3schools.com/tags/tag_form.asp "W3学校")
*   [Mozilla表单资源](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "Mozilla表格")