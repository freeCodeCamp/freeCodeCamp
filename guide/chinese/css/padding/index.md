---
title: Padding
localeTitle: 填充
---
# 填充

`padding` CSS属性在元素的所有四个边上设置填充区域。此属性可用于生成内容周围的空间（边框内）。它是一次设置所有单个填充的简写： `padding-top` ， `padding-right` ， `padding-bottom`和`padding-left` 。值以顺时针方向定义。

填充值使用长度或百分比或`inherit`关键字设置，不能接受负值。所有填充属性的初始值或默认值为0.虽然可以使用`inherit`关键字但不能与长度值一起使用。

## 句法

```css
.element { 
    padding: [padding-top] || [padding-right] || [padding-bottom] || [padding-left]; 
 } 
```

可以使用一个，两个，三个或四个值指定此属性。

*   指定一个值时，它会对所有四个边应用相同的填充。
*   指定两个值时，第一个填充适用于顶部和底部，第二个填充适用于左侧和右侧。
*   指定三个值时，第一个填充适用于顶部，第二个填充适用于左侧和右侧，第三个填充适用于底部。
*   指定四个值时，填充按顺序（顺时针）应用于顶部，右侧，底部和左侧。

```css
/* em refers to the current font size of an element */ 
 /* Apply to all four sides */ 
 padding: 1em; 
 
 /* top and bottom | left and right */ 
 padding: 5% 10%; 
 
 /* top | left and right | bottom */ 
 padding: 1em 2em 2em; 
 
 /* top | right | bottom | left */ 
 padding: 5px 1em 0 1em; 
```

## 箱式模型在哪里

CSS中的padding属性定义了box模型的最里面部分，在元素的内容周围创建了空间，在任何定义的边距和/或边框内。

![CSS Box模型](https://www.w3.org/TR/css3-box/box.png)

## 浏览器支持

它在所有浏览器中得到有效支持（因为IE6 +，Firefox 2 +，Chrome 1+等）

### 更多信息

*   [W3C工作草案](https://www.w3.org/TR/css3-box/#the-padding)
*   [W3C CSS Level 2](https://www.w3.org/TR/CSS2/box.html#propdef-padding)
*   [W3C CSS Level 1](https://www.w3.org/TR/CSS1/#padding)
*   [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
*   [CSS技巧](https://css-tricks.com/almanac/properties/p/padding/)