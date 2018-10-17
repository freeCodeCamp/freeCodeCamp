---
title: jQuery Selectors
localeTitle: jQuery选择器
---
## jQuery选择器

jQuery使用CSS样式选择器来选择HTML页面的部分或元素。然后，它允许您使用jQuery方法或函数对元素执行某些操作。

要使用其中一个选择器，请在其后键入美元符号和括号： `$()` 。这是`jQuery()`函数的简写。在括号内，添加要选择的元素。您可以使用单引号或双引号。在此之后，在括号和要使用的方法之后添加一个点。

在jQuery中，类和ID选择器与CSS中的类似。

这是一个选择所有段落元素的jQuery方法的示例，并为它们添加了一个“selected”类：

```javascript
<p>This is a paragraph selected by a jQuery method.</p> 
 <p>This is also a paragraph selected by a jQuery method.</p> 
 
 $("p").addClass("selected"); 
```

在jQuery中，类和ID选择器与CSS中的相同。如果要选择具有特定类的元素，请使用点（ `.` ）和类名。如果要选择具有特定ID的元素，请使用井号（ `#` ）和ID名称。请注意，HTML不区分大小写，因此最好将HTML标记和CSS选择器保持为小写。

按班级选择：

```javascript
<p class="p-with-class">Paragraph with a class.</p> 
 
 $(".p-with-class").css("color", "blue"); // colors the text blue 
```

按ID选择：

```javascript
<li id="li-with-id">List item with an ID.</li> 
 
 $("#li-with-id").replaceWith("<p>Socks</p>"); 
```

您还可以选择某些元素及其类和ID：

### 按班级选择

如果要选择具有特定类的元素，请使用点（。）和类名。

```html

<p class="pWithClass">Paragraph with a class.</p> 
```

```javascript
$(".pWithClass").css("color", "blue"); // colors the text blue 
```

您还可以将类选择器与标记名称结合使用，以使其更具体。

```html

<ul class="wishList">My Wish List</ul>`<br> 
```

```javascript
$("ul.wishList").append("<li>New blender</li>"); 
```

### 按ID选择

如果要选择具有特定ID值的元素，请使用井号（＃）和ID名称。

```html

<li id="liWithID">List item with an ID.</li> 
```

```javascript
$("#liWithID").replaceWith("<p>Socks</p>"); 
```

与类选择器一样，它也可以与标签名称结合使用。

```html

<h1 id="headline">News Headline</h1> 
```

```javascript
$("h1#headline").css("font-size", "2em"); 
```

### 充当过滤器的选择器

还有一些选择器充当过滤器 - 它们通常以冒号开头。例如， `:first`选择器选择其父元素的第一个子元素。这是一个包含一些列表项的无序列表的示例。列表下方的jQuery选择器选择列表中的第一个`<li>`元素 - “One”列表项 - 然后使用`.css`方法将文本变为绿色。

```html

   <ul> 
      <li>One</li> 
      <li>Two</li> 
      <li>Three</li> 
   </ul> 
```

```javascript
$("li:first").css("color", "green"); 
```

**注意：**不要忘记在JavaScript中应用css不是一个好习惯。您应该始终在css文件中提供样式。

另一个过滤选择器`:contains(text)` ，选择具有特定文本的元素。将要匹配的文本放在括号中。这是一个有两段的例子。 jQuery选择器使用单词“Moto”并将其颜色更改为黄色。

```html

    <p>Hello</p> 
    <p>World</p> 
```

```javascript
$("p:contains('World')").css("color", "yellow"); 
```

类似地， `:last`选择器选择其父级的最后一个子元素。下面的JQuery选择器选择列表中的最后一个`<li>`元素 - “三”列表项 - 然后使用`.css`方法将文本变为黄色。

`$("li:last").css("color", "yellow");`

**注意：**在jQuery选择器中， `World`是单引号，因为它已经在一对双引号内。始终在双引号内使用单引号以避免无意中结束字符串。

**多个选择器** 在jQuery中，您可以使用多个选择器，使用一行代码将相同的更改应用于多个元素。您可以通过用逗号分隔不同的ID来完成此操作。例如，如果要将ids cat，dog和rat的三个元素的背景颜色分别设置为红色，只需执行以下操作：
```
$("#cat,#dog,#rat").css("background-color","red"); 
```

这些只是可用于jQuery的一些选择器。有关jQuery网站上完整列表的链接，请参阅“更多信息”部分。

#### 更多信息：

*   [jQuery选择器的完整列表](http://api.jquery.com/category/selectors/)