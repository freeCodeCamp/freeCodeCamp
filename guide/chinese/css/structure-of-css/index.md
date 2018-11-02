---
title: Structure of CSS
localeTitle: CSS的结构
---
## CSS结构

CSS规则遵循以下基本结构：

```CSS
selector { 
  property: value; 
  property: value; 
 } 
```

大括号内的所有内容都会为选择[器选择的内容设置](https://guide.freecodecamp.org/css/selectors)样式。 CSS规则内部是一组[属性](https://guide.freecodecamp.org/css/properties) /值对。

你可以让不同的选择器与昏迷分开：

```CSS
selector1, 
 selector2 { 
  property: value; 
 } 
```

多个CSS规则可以放在一个CSS文件中 - 这是一个例子：

```CSS
h1 { 
  color: red; 
 } 
 
 div { 
  text-align: center; 
  color: blue; 
 } 
 
 img { 
  margin-left: 2px; 
  margin-top: 100px; 
 } 
```

#### 更多信息：

*   [代码Web上的CSS语法](https://codetheweb.blog/2017/11/11/css-syntax/)
*   有关[CSS选择器的](https://guide.freecodecamp.org/css/selectors)更多信息
*   有关[CSS属性的](https://guide.freecodecamp.org/css/properties)更多信息