---
title: Write Concise Declarative Functions with ES6
localeTitle: 用ES6编写简明的声明函数
---
## 用ES6编写简明的声明函数

ES6使编写声明性函数变得简单而有趣！在本课程中，您的任务是更改功能以遵循ES6标准。

## 提示1：

摆脱`function`关键字。

## 剧透警报 - 提前解决！

## 解

```javascript
const bicycle = { 
  gear: 2, 
  setGear(newGear) { 
    "use strict"; 
    this.gear = newGear; 
  } 
 }; 

```