---
title: Understand the Immediately Invoked Function Expression (IIFE)
localeTitle: 理解立即调用的函数表达式（IIFE）
---
## 理解立即调用的函数表达式（IIFE）

### 方法

第一个测试用例要求您使该函数匿名。为此，只需删除函数的名称，如示例中所示。然后必须将该函数用大括号括起来，最后用另一组大括号来立即调用该函数。

### 解

```javascript
(function() { 
  console.log("A cozy nest is ready"); 
 })(); 

```