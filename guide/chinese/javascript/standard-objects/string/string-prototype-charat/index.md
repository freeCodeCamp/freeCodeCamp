---
title: String.prototype.charAt
localeTitle: String.prototype.charAt
---
`charAt()`方法从字符串返回指定的字符。

## 句法
```
str.charAt(index) 
```

## 参数

**指数**

一个介于0和1之间的整数，小于字符串的长度。

[MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) | [MSDN链接](https://msdn.microsoft.com/en-us/LIBRary/65zt5h10%28v=vs.94%29.aspx)

## 描述

字符串中的字符从左到右编制索引。第一个字符的索引是0，字符串中名为`stringName`的最后一个字符的索引是`stringName.length - 1` 。如果您提供的索引超出范围，JavaScript将返回一个空字符串。

## 例子
```
var anyString = 'Brave new world'; 
 
 console.log("The character at index 0   is '" + anyString.charAt(0)   + "'"); // 'B' 
 console.log("The character at index 1   is '" + anyString.charAt(1)   + "'"); // 'r' 
 console.log("The character at index 2   is '" + anyString.charAt(2)   + "'"); // 'a' 
 console.log("The character at index 3   is '" + anyString.charAt(3)   + "'"); // 'v' 
 console.log("The character at index 4   is '" + anyString.charAt(4)   + "'"); // 'e' 
 console.log("The character at index 999 is '" + anyString.charAt(999) + "'"); // '' 
 
 var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
 document.write(str.charAt(str.length - 1)); 
 
 // Output: Z 

```