---
title: Math Trunc
localeTitle: 数学截尾
---
## 数学截尾

`Math.trunc()`是Math标准对象的一种方法，它只通过删除小数单位返回给定数字的整数部分。这导致整体向零舍入。任何非数字的输入都将导致NaN的输出。

小心：此方法是ECMAScript 2015（ES6）功能，因此旧版浏览器不支持。

### 例子

```javascript
Math.trunc(0.1)   //  0 
 Math.trunc(1.3)   //  1 
 Math.trunc(-0.9)  // -0 
 Math.trunc(-1.5)  // -1 
 Math.trunc('foo') // NaN 
```

### 更多信息：

*   [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)