---
title: Span Tag
localeTitle: 跨度日
---
## 跨度标签

`<span>`标记是一个类似于`<div>`通用容器元素。默认情况下，浏览器不会对`<span>`进行任何可视化更改，但您可以使用CSS对其进行样式设置或使用JavaScript对其进行操作。

### 例

```html

<html> 
  <head> 
    <title>The Span Tag</title> 
  </head> 
  <body> 
    <div> 
      <p>This is a normal paragraph without any changes.</p> 
      <p>This paragraph has <span style="color:red">red span styling</span> inside it without affecting the rest of the document.</p> 
    </div> 
  </body> 
 </html> 
```

带红色文本的段落代码如下所示：

```html

<p>This paragraph has <span style="color:red">red span styling</span> inside it without affecting the rest of the document.</p> 
```

#### `<span>`和`<div>`之间的差异

主要区别在于`<span>`是内联元素，而`<div>`是块元素。这意味着`<span>`可以出现在句子或段落中（如上例所示），而`<div>`将开始新的内容行。请注意，CSS `display`属性可以更改此默认行为，但这超出了本文的范围！

#### 更多信息：

*   [MDN HTML元素参考](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)