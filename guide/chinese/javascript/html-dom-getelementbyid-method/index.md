---
title: HTML DOM getElementById Method
localeTitle: HTML DOM getElementById方法
---
`getElementById()`方法返回具有指定值的id属性的元素。它需要一个参数，它是所需元素的id的区分大小写的字符串。

此方法是HTML DOM中最常用的方法之一，几乎每次您想要操作文档中的元素或从中获取信息时都会使用此方法。这是一个简单的语法示例：

**HTML内容：**

```html

<div id="demo"></div> 
```

**JavaScript内容：**

```javascript
document.getElementById("demo"); // Returns the element with id "demo" 
```

如果你有多个具有相同`id`值的元素（糟糕的做法！）， `getElementById`将返回找到的第一个元素：

```html

<div id="demo">First</div> 
 <div id="demo">Second</div> 
```

```javascript
document.getElementById("demo"); // Returns the element with id "demo" containing 'First' 
```

#### 更多信息：

[的document.getElementById（）](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

#### 替代方案：

`document.getElementById`一个常用替代方法是使用jQuery选择器，您可以在[这里](https://github.com/freeCodeCamp/guides/tree/master/src/pages/jquery)阅读更多内容。