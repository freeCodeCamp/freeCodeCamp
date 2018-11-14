---
title: Create an Export Fallback with export default
localeTitle: 使用导出默认值创建导出回退
---
## 使用导出默认值创建导出回退

什么是后备价值？如果没有设置任何内容，它基本上是默认代码将返回。例如，变量的默认回退值为`undefined` 。话虽这么说，暗示了这一挑战！

## 提示1：

只需将`export default`添加到函数的开头即可。

## 剧透警报 - 提前解决！

## 解：

```javascript
"use strict"; 
 export default function subtract(x,y) {return x - y;} 

```