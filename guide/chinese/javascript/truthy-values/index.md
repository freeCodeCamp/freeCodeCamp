---
title: Truthy Value
localeTitle: Truthy价值
---
**truthy**值是在_布尔_上下文中计算时转换为**true**的_值_ 。

所有值都是**真实的，**除非它们被定义为**假** （即除了`false` ， `0` ， `""` ， `null` ， `undefined`和`NaN` ）。

一些有趣的**truthy**值是：

'0'（包含单个零的字符串） 'false'（包含文本“false”的字符串） \[\]（一个空数组） {}（一个空对象） function（）{}（一个“空”函数）

因此，可以在条件内使用单个值，例如

if（value）{ //值是真的 } 其他{ //值是假的 //它可能是false，0，''，null，undefined或NaN }

另见： falsy | [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)