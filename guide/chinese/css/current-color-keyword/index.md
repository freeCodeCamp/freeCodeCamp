---
title: currentColor Keyword
localeTitle: currentColor关键字
---
## currentColor关键字

顾名思义，currentColor关键字是CSS中的有效颜色值。这表示特定元素的`color`属性的值。这使您可以将`color`属性的值用于默认情况下不接收它的属性。

### 浏览器支持

各种浏览器都支持currentColor关键字。它受IE9 +，Safari 4+和所有其他现代浏览器的支持。查看[caniuse.com上](https://caniuse.com/#feat=currentcolor)的完整列表

### 例

我们声明每个div都有一个3px颜色的_currentColor_边框，这意味着每个div的边框将使用其`color`属性的相同值`color` 。点击[此处](http://jsfiddle.net/tjkp0cm3/)查看实时示例

```css
div{ 
  /* The currentColor keyword for the color value, which means that the border will have the value of the respective div's color property */ 
  border: 3px solid currentColor; 
 } 
 
 /* This div will have green borders, because its color value is green. */ 
 #div1{ 
  color: green; 
 } 
 
 /* This div will have blue borders, because its color value is blue. */ 
 #div2{ 
  color: blue; 
 } 
```

### SVG的实际应用

这是网络上一个非常常见的例子 - 一个带有SVG图标和文本的按钮。将鼠标悬停在按钮上时，边框，文本和图标的颜色会发生变化。下图按顺序描绘了按钮的初始状态和悬停状态。

![按钮图像](https://image.ibb.co/hWveBR/button_variations.png)

图标字体也可用于此目的，但内联SVG相对于图标字体有各种优点，这可能使SVG成为许多开发人员的选择。引用[CSS-Tricks](https://css-tricks.com/icon-fonts-vs-svg/) ，

> 定位字体图标可能会令人沮丧。图标是通过伪元素插入的，它取决于`line-height` ， `vertical-align` ， `letter-spacing` ， `word-spacing` ，字体字形是如何设计的（它自然周围有空格吗？它是否有字距信息？） 。然后伪元素`display`类型会影响这些属性是否有效。 SVG只是它的大小。

总结一下，使用带有文本的字体图标有时会令人沮丧。

我们可以使用我们的代码来实现所需的行为。

```css
button{ 
  color: #016898; 
 } 
 
 .emailIcon{ 
  fill: #016898; 
 } 
 
 button:hover { 
  color: #19B5FE; 
 } 
 
 button:hover .emailIcon{ 
  fill: #19B5FE; 
 } 
```

现在，我们可以将填充设置为`currentColor` ，而不是在显式悬停时更改SVG的`fill`颜色。这会自动将SVG的颜色更改为按钮的`color`属性值。我们现在只需要更改按钮的`color`属性。这使得CSS代码更短更智能。

```css
.emailIcon{ 
  fill: currentColor; 
 } 
 
 button{ 
  color: #016898; 
 } 
 
 button:hover { 
  color: #19B5FE; 
 } 
```

查看https://repl.it/NNt9/2上的实例。

#### 更多信息：

*   [关于CSS `color`属性的MDN文档](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
*   [关于currentColor关键字的MDN文档](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentColor_example)
*   [关于osvaldas.info上currentColor的文章](https://osvaldas.info/keeping-css-short-with-currentcolor)