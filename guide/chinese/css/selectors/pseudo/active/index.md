---
title: Active
localeTitle: 活性
---
## 活性

当用户激活元素时，CSS：活动选择器会更改HTML元素的样式。此选择器通常向用户提供已单击元素的确认。 ：主动选择器最常用于`<a>`和`<button>`元素，但可用于所有元素。

如果正在使用多个CSS伪选择器，则：active选择器必须位于：hover选择器之后。

在下面的示例中，当用户单击链接时，文本颜色将从黑色变为红色，直到单击操作停止。

```css
a { 
  color: black; 
 } 
 
 a:active { 
  color: red; 
 } 
```

#### 更多信息：

*   [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)
*   [W3学校](https://www.w3schools.com/cssref/sel_active.asp)