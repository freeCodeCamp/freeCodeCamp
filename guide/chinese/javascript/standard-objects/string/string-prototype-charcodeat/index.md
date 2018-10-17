---
title: String.prototype.charCodeAt
localeTitle: String.prototype.charCodeAt
---
`charCodeAt()`方法返回给定索引处字符的数字Unicode值（unicode代码点> 0x10000除外）。

## 句法
```
str.charCodeAt(index) 
```

### 参数

**指数**

大于或等于0且小于字符串长度的整数;如果它不是数字，则默认为0。

[MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) | [MSDN链接](https://msdn.microsoft.com/en-us/LIBRary/hza4d04f%28v=vs.94%29.aspx)

## 描述

请注意， `charCodeAt()`将始终返回小于65536的值。这是因为较高的代码点由一对（较低值）“代理”伪字符表示，这些伪字符用于构成真实字符。因此，为了检查或重现值为65536及以上的单个字符的完整字符，对于这些字符，不仅需要检索`charCodeAt(i)` ，还需要检索`charCodeAt(i+1)` （就像检查一样） /再现两个字母的字符串）。见下面的例2和3。

如果给定`index`小于0或等于或大于字符串的长度，则`charCodeAt()`返回`NaN` 。

## 例子
```
'ABC'.charCodeAt(0); // returns 65 
 
 var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
 document.write(str.charCodeAt(str.length - 1)); 
 
 // Output: 90 

```