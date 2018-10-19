---
title: CSS Display
localeTitle: CSS显示
---
## CSS显示

display属性指定用于HTML元素的框的类型。它有20个可能的关键字值。常用的是：

```css
    .none             {display: none} 
    .block            {display: block} 
    .inline-block     {display: inline-block} 
    .inline           {display: inline} 
    .flex             {display: flex} 
    .inline-flex      {display: inline-flex} 
    .inline-table     {display: inline-table} 
    .table            {display: table} 
    .inherit          {display: inherit} 
    .initial          {display: initial} 
```

`display:none`属性在使网站响应时通常会有所帮助。例如，您可能希望在屏幕大小缩小时隐藏页面上的元素，以便弥补空间不足。 `display: none`不仅会隐藏元素，而且页面上的所有其他元素都会表现得就像该元素不存在一样。这是此属性与`visibility: hidden`属性之间的最大区别，隐藏了该元素，但将所有其他页面元素保持在隐藏元素可见时所显示的位置。

这些关键字值分为六类：

*   `<display-inside>`
*   `<display-outside>`
*   `<display-listitem>`
*   `<display-box>`
*   `<display-internal>`
*   `<display-legacy>`

### 更多信息：

*   [MDN - 显示](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
*   [caniuse - 浏览器支持](http://caniuse.com/#search=display)
*   [CSS-Tricks- Flexbox完整指南](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)