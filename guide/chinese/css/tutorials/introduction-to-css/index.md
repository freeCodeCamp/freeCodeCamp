---
title: Introduction to CSS
localeTitle: CSS简介
---
## CSS简介

### 什么是CSS？

层叠样式表（CSS）描述了页面上的html应该如何显示。

在CSS开发人员在页面的每个节点上使用属性或特殊标记应用样式之前。这使得标记重复并且容易出错。

CSS允许选择器描述每个匹配内容的外观。

```CSS
body { 
    font-size: 15px; 
 } 
 
 a { 
    color: rebeccapurple; 
    text-decoration: underline; 
 } 
```

### 使用CSS

**外部样式表**允许许多页面共享相同的样式。

```HTML
<link href="styles.css" rel="stylesheet" type="text/css"> 
```

**内部样式表**将CSS应用于页面上的所有匹配标记。

```HTML
<style> 
    h1 { 
        font-family: sans-serif; 
        margin-bottom: 1.5em; 
    } 
 </style> 
```

**内联CSS**将样式应用于单个标记。

```HTML
<img src="..." style="border: 1px solid red;" /> 
```

#### 更多信息：

*   [W3Schools的](https://www.w3schools.com/css/css_intro.asp)
*   [CSS-Tricks Almanac](https://css-tricks.com/almanac/)
*   [Sitepoint](https://www.sitepoint.com/html-css/?ref_source=github)