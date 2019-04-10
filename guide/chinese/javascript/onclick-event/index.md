---
title: Onclick Event
localeTitle: Onclick活动
---
## Onclick活动

JavaScript中的`onclick`事件允许您作为程序员在单击元素时执行函数。

### 例

```javascript
<button onclick="myFunction()">Click me</button> 
 
 <script> 
  function myFunction() { 
    alert('Button was clicked!'); 
  } 
 </script> 
```

在上面的简单示例中，当用户单击按钮时，他们将在浏览器中看到显示`Button was clicked!`的警报`Button was clicked!` 。

### 动态添加`onclick`

`onclick`事件也可以使用以下示例中的以下代码以编程方式添加到任何元素：

```javascript
<p id="foo">click on this element.</p> 
 
 <script> 
  var p = document.getElementById("foo"); // Find the paragraph element in the page 
  p.onclick = showAlert; // Add onclick function to element 
 
  function showAlert(event) { 
    alert("onclick Event triggered!"); 
  } 
 </script> 
```

### 注意

重要的是要注意使用onclick我们只能添加一个监听器功能。如果要添加更多内容，只需使用addEventListener（），这是添加事件侦听器的首选方法。

在上面的示例中，当用户单击`html`的`paragraph`元素时，他们将看到显示`onclick Event triggered`的警报。

### 防止默认操作

但是，如果我们重视`onclick`以链接（HTML是`a`标签），我们可能想阻止默认动作发生：

```javascript
<a href="https://guide.freecodecamp.org" onclick="myAlert()">Guides</a> 
 
 <script> 
  function myAlert(event) { 
    event.preventDefault(); 
    alert("Link was clicked but page was not open"); 
  } 
 </script> 
```

在上面的例子中，我们防止了默认行为`a`使用元件（开口链路） `event.preventDefault()`提供了内部`onclick`回调函数。

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick)

#### 其他资源

[jQuery .on（）事件处理程序附件](https://api.jquery.com/on/)