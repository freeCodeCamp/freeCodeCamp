---
title: Where to
localeTitle: 去哪儿
---
## 去哪儿

JavaScript是HTML和Web的编程语言。在HTML中，必须在`<script>`容器标记中插入JavaScript。

### 例

```html

<script> 
  window.alert("This JavaScript Works!"); 
 </script> 
```

另外，请记住，您可以在HTML文档中放置任意数量的`<script>`标记。

### `<script>`标签在哪里？

`<script>`标记可以放在`<head>`或`<body>` 。

### `<head>` JavaScript

在此示例中，JavaScript放在文档的`<head>`部分中。创建一个**onClicked**函数，在按下按钮时调用该函数。

```html

<!DOCTYPE html> 
 <html> 
 <head> 
 <script> 
 function onClicked() { 
    window.alert("Hi, there!"); 
 } 
 </script> 
 </head> 
 
 <body> 
 
 <h1>JavaScript Testing</h1> 
 <button type="button" onclick="onClicked()">Try it</button> 
 
 </body> 
 </html> 
```

### `<body>` JavaScript

这里，JavaScript放在 。创建了**onClicked**函数，并将其设置为在单击按钮时触发。

```html

<!DOCTYPE html> 
 <html> 
 <body> 
 
 <h1>JavaScript Testing</h1> 
 <button type="button" id="buttonClicked">Try it</button> 
 
 <script> 
 document.getElementById("buttonClicked").onclick = onClicked; 
 
 function onClicked() { 
    window.alert("Hi, there!"); 
 } 
 </script> 
 
 </body> 
 </html> 
```

### 外部脚本

脚本也可以放在外部文件中。让我们创建一个文件**script.js** 。

##### 的script.js

```javascript
window.alert("Hi!"); 
```

此脚本可以包含在HTML文档中，如下所示：

```html

<!DOCTYPE html> 
 <html> 
 <body> 
 
 <script src="script.js"></script> 
 
 </body> 
 </html> 
```

_嗨！_在呈现页面时仍会收到警报。请记住，您不需要在JavaScript文件（扩展名为**.js**的文件）中包含`<script>`标记。

#### 更多信息：

雅虎建议在底部放置脚本。这阐述了[这里](https://developer.yahoo.com/performance/rules.html#js_bottom) ，与这一建议的原因。