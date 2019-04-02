---
title: Font Tag
localeTitle: 字体标记
---
## 字体标记

_此功能在HTML 4.01中已弃用，在HTML 5中已删除。_

HTML字体元素`<font>`定义其内容的字体大小，颜色和面。它在HTML 3.2中被标准化，但在HTML 4.01中被弃用，现在在HTML5中已经过时了。虽然它仍然可以在某些浏览器中使用，但建议停止使用它，因为它可以随时删除。可以通过CSS实现样式字体并且更好地控制，实际上所有样式都应该仅使用CSS编写。

`<font>`元素的**前一种**行为：

*   **颜色：**此属性允许您将文本颜色设置为命名颜色（如“蓝色”）或十六进制颜色（#RRGGBB）。
*   **Face：**此属性允许您设置字体系列，并包含一个逗号分隔的一个或多个字体名称列表。如果浏览器不支持列表中的第一个字体，则它将移动到第二个字体。如果不支持或列出任何字体，则浏览器通常默认为该系统的字体。
*   **大小：**此属性允许您指定字体的大小。有两种方法可以做到这一点，无论是设置数值还是相对值。数值范围从1到7,1是最小值，3是默认值。相对值（如-2或+2）设置相对于`<basefont>`元素大小的值或“3”默认值。

一个例子：

```html

<font face="fontNameHere" size="7" color="blue">My Text Here</font> 
```

#### 更多信息：

*   [MDN - HTML字体标记](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font)
*   [MDN - CSS字体](https://developer.mozilla.org/en-US/docs/Web/CSS/font)