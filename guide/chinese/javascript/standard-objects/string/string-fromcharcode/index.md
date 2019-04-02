---
title: String fromCharCode
localeTitle: 字符串fromCharCode
---
静态`String.fromCharCode()`方法返回使用指定的Unicode值序列创建的字符串。

## 句法
```
String.fromCharCode(num1[, ...[, numN]]) 
```

### 参数

**num1，...，numN**

一系列Unicode值的数字。

[MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) | [MSDN链接](https://msdn.microsoft.com/en-us/LIBRary/wb4w0k66%28v=vs.94%29.aspx)

## 描述

此方法返回字符串而不是String对象。

因为`fromCharCode()`是String的静态方法，所以始终将其用作`String.fromCharCode()` ，而不是您创建的String对象的方法。

## 例子
```
String.fromCharCode(65, 66, 67);  // "ABC" 
 
 var test = String.fromCharCode(112, 108, 97, 105, 110); 
 document.write(test); 
 
 // Output: plain 

```