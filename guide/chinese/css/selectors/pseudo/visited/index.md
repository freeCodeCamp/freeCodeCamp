---
title: Visited
localeTitle: 访问
---
## 访问

CSS：visited选择器更改用户访问过的链接的样式。此选择器用于帮助用户区分他们拥有和未访问过的链接。

如果正在使用多个CSS伪选择器，则：visited选择器必须位于：link选择器之后。

在下面的示例中，用户单击链接后，文本颜色将从黑色变为绿色。

```css
 a { 
   color: black; 
 } 
 
 a:visited { 
   color: green; 
 } 
```

由于用户隐私原因，：visited选择器仅限于修改以下CSS属性的样式：

*   颜色
*   背景颜色
*   边框颜色（包括不同边的边框颜色）
*   列治色
*   轮廓色
*   填充和描边（用于SVG图像）

#### 更多信息：

*   [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited)
*   [W3学校](https://www.w3schools.com/cssref/sel_visited.asp)
*   [CSS技巧和元素的技巧指南](https://www.smashingmagazine.com/2016/05/an-ultimate-guide-to-css-pseudo-classes-and-pseudo-elements/#visited)