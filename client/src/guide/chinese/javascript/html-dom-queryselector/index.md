---
title: HTML DOM querySelector()
localeTitle: HTML DOM querySelector（）
---
Document方法`querySelector()`返回文档中与指定选择器或选择器组匹配的`first` Element。如果未找到匹配项，则返回null。

**HTML内容：**

```html

<div id="id-example"></div> 
 <div class="class-example"></div> 
 <a>element-example</a> 
```

**JavaScript内容：**

```javascript
document.querySelector("#id-example"); // Returns the element with id "id-example" 
 document.querySelector(".class-example"); // Returns the element with class "class-example" 
 document.querySelector("a"); // Returns the "a" element 
```

注意`querySelector()`返回第一个匹配元素，返回所有匹配项，改为使用querySelectorAll（）方法。

```html

<div id="example">First</div> 
 <div id="example">Second</div> 
```

```javascript
document.querySelector("#example"); // Returns only the element containing 'First' 
```

#### 更多信息：

[MDN - document.querySelector（）](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)