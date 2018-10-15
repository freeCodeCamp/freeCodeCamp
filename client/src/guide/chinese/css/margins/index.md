---
title: Margins
localeTitle: 边距
---
# 边距

`margin` CSS属性设置元素所有四边的边距区域。此属性可用于生成内容周围的空间（边框外）。这是一次设置所有单个边距的简写： `margin-top` ， `margin-right` ， `margin-bottom`和`margin-left` 。值以顺时针方向定义。

保证金值使用长度或百分比或`auto`或`inherit`关键字设置，并且可以接受零或负值。所有边距属性的初始值或默认值为0.虽然可以使用`inherit`关键字但不能与长度值一起使用。

## 句法

```css
.element { 
    margin: margin-top || margin-right || margin-bottom || margin-left; 
 } 
```

可以使用一个，两个，三个或四个值指定此属性。

*   指定一个值时，它会对所有四个边应用相同的边距。
*   指定两个值时，第一个边距适用于顶部和底部，第二个边距适用于左侧和右侧。
*   指定三个值时，第一个边距适用于顶部，第二个边缘适用于左侧和右侧，第三个边距适用于底部。
*   指定四个值时，边距按顺序应用于顶部，右侧，底部和左侧（顺时针）。

```css
/* Apply to all four sides */ 
 margin: 1em; 
 
 /* top and bottom | left and right */ 
 margin: 5% 10%; 
 
 /* top | left and right | bottom */ 
 margin: 1em 2em 2em; 
 
 /* top | right | bottom | left */ 
 margin: 5px 1em 0 1em; 
```

## 箱式模型在哪里

CSS中的margin属性定义了box模型的最外层部分，在任何已定义的填充和/或边框之外创建元素内容周围的空间。

![CSS Box模型](https://www.w3.org/TR/css3-box/box.png)

## 利润率下降

相互接触的不同元素上的垂直边距（因此没有内容，填充或边界将它们分开）将崩溃，形成单个边距，该边距等于相邻边距中的较大边距。这不会发生在水平边缘（左和右），只有垂直（顶部和底部）。

## 浏览器支持

它在所有浏览器中得到有效支持（因为IE6 +，Firefox 2 +，Chrome 1+等）

### 更多信息

*   [W3C工作草案](https://www.w3.org/TR/css3-box/#the-margin)
*   [W3C CSS Level 2](https://www.w3.org/TR/CSS2/box.html#propdef-margin)
*   [W3C CSS Level 1](https://www.w3.org/TR/CSS1/#margin)
*   [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
*   [CSS技巧](https://css-tricks.com/almanac/properties/m/margin/)