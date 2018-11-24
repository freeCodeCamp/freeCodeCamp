---
title: Use Destructuring Assignment to Assign Variables from Nested Objects
localeTitle: 使用解构分配从嵌套对象分配变量
---
## 使用解构分配从嵌套对象分配变量

提示通过最终测试：使用_嵌套解构_

测试希望您仅获得`max`和`max` 。如果你将常量解构为包含`max`和`min` ，则测试将失败。

## 扰流板！

这是代码解决方案：

```javascript
const { tomorrow: { max: maxOfTomorrow } } = forecast; 

```