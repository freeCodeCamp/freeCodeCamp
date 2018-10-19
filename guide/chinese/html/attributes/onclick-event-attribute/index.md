---
title: Onclick Event Attribute
localeTitle: Onclick事件属性
---
## Onclick事件属性

单击元素时会触发事件。

它就像_onclick方法_或`addEventListener('click')` 。

```html

<element onclick="event"></element> 
```

> `event`可以是JavaScript函数，也可以编写原始JavaScript

### 例子

单击时更改`<p>`元素的颜色

```html

<p id="text" onclick="redify()">Change my color</p> 
 
 <script> 
 function redify(){ 
  let text = document.querySelector('#text'); 
  text.style.color = "red"; 
 } 
 </script> 
```

使用原始JavaScript onclick属性：

```html

<button onclick="alert('Hello')">Hello World</button> 
```

#### 更多信息：

*   [MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onclick)