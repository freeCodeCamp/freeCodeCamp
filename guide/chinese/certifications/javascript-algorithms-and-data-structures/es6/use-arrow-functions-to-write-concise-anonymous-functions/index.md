---
title: Use Arrow Functions to Write Concise Anonymous Functions
localeTitle: 使用箭头函数编写简明的匿名函数
---
## 使用箭头函数编写简明的匿名函数

再一次，ES6就是让JavaScript变得更优雅，而对于某些人来说，更具可读性。

如上所述，当您确定在其他任何地方都不会通过名称调用该函数时，可以创建匿名函数。

## 提示1：

摆脱`function`关键字，并插入此`=>`箭头。

## 提示2：

你摆脱了`var`关键字吗？

## 剧透警报 - 提前解决！

## 解

```javascript
const magic = () => { 
  "use strict"; 
  return new Date(); 
 }; 
```

只要你摆脱了`var`关键字，你就会很好。