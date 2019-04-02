---
title: Click Method
localeTitle: 单击方法
---
# 单击方法

单击一个元素时，jQuery Click方法会触发一个函数。该函数称为“处理程序”，因为它处理click事件。功能可以 使用jQuery Click方法影响绑定到单击的HTML元素，或者它们可以完全改变其他内容。最常用的形式是：

```javascript
$("#clickMe").click(handler) 
```

click方法将处理函数作为参数，并在每次单击元素`#clickMe`时执行它。处理函数接收一个 被称为[eventObject的](http://api.jquery.com/Types/#Event)参数，可用于控制操作。

#### 例子

此代码在用户单击按钮时显示警报：

```html

<button id="alert">Click Here</button> 
```

```javascript
$("#alert").click(function () { 
  alert("Hi! I'm an alert"); 
 }); 
```

[的jsfiddle](https://jsfiddle.net/pL63cL6m/)

[eventObject](http://api.jquery.com/Types/#Event)有一些内置的方法，包括`preventDefault()` ，它完全按照它所说的 - 停止 元素的默认事件。在这里，我们将锚标记作为链接：

```html

<a id="myLink" href="www.google.com">Link to Google</a> 
```

```javascript
$("#myLink").click(function (event) { 
  event.preventDefault(); 
 }); 
```

[的jsfiddle](https://jsfiddle.net/dy457gbh/)

#### 更多使用click方法的方法

处理函数还可以接受对象形式的其他数据：

```javascript
jqueryElement.click(usefulInfo, handler) 
```

数据可以是任何类型。

```javascript
$("element").click({firstWord: "Hello", secondWord: "World"}, function(event){ 
    alert(event.data.firstWord); 
    alert(event.data.secondWord); 
 }); 
```

在没有处理函数的情况下调用click方法会触发click事件：

```javascript
$("#alert").click(function () { 
  alert("Hi! I'm an alert"); 
 }); 
 
 $("#alert").click(); 
```

现在，无论何时加载页面，当我们进入或重新加载页面时都会触发click事件，并显示已分配的警报。

此外，您应该更喜欢在.click（...）上使用.on（'click'，...），因为前者可以使用更少的内存并且可以用于动态添加的元素。

[的jsfiddle](https://jsfiddle.net/gspk6gxt/)

#### 常见错误

click事件仅绑定到绑定时当前在DOM上的元素，因此之后添加的任何元素都不会被绑定。绑定所有 DOM上的元素，即使它们将在以后创建，也使用`.on()`方法。

例如，此单击方法示例：

```javascript
$( "element" ).click(function() { 
  alert("I've been clicked!"); 
 }); 
```

可以在方法示例中更改为：

```javascript
$( document ).on("click", "element", function() { 
  alert("I've been clicked!"); 
 }); 
```

#### 更多信息：

有关更多信息，请访问[官方网站](https://api.jquery.com/click/#click) 。