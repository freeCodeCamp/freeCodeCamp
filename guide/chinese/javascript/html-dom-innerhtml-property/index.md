---
title: HTML Dom Innerhtml Property
localeTitle: HTML Dom Innerhtml属性
---
## HTML Dom Innerhtml属性

`innerHTML` prop返回所选元素中的HTML内容，并允许您定义新的HTML内容。

**_获取元素内容_**

```html

<div id="demo"> 
  <p>Demo</p> 
 </div> 
```

```javascript
var element = document.getElementById("demo"); 
 console.log(element.innerHTML) //logs <p>Demo</p> 
```

**_设置元素内容_**

```html

<div id="demo"></div> 
```

```javascript
var element = document.getElementById("demo"); 
 element.innerHTML = "<div>Demo</div>"; 
```

HTML现在就像

```html

<div id="demo"> 
  <div>Demo</div> 
 </div> 
```

**_安全考虑_**

设置为`innerHTML`的值应该来自可靠来源，因为Javascript会将任何内容放在该元素中，并且它将作为纯HTML运行。

例：

设置“ `<script>alert();</script>` ”值将导致Javascript“alert（）”函数被触发：

```javascript
var element = document.getElementById("demo"); 
 
 element.innerHTML = "<script>alert();</script>"; 
```

这种类型的攻击称为[Cross Site Scripting，简称XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) 。

这是提交XSS攻击的最常见方式之一。如果您想学习更多知识并学会防范它， [请查看此资源](https://xss-game.appspot.com/)