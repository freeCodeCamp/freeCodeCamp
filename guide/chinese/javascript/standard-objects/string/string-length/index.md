---
title: String Length
localeTitle: 字符串长度
---
`length`属性表示字符串的长度。

## 句法
```
str.length 
```

[MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) | [MSDN链接](https://msdn.microsoft.com/en-us/LIBRary/3d616214%28v=vs.94%29.aspx)

## 描述

此属性返回字符串中的代码单元数。 UTF-16是JavaScript使用的字符串格式，使用单个16位代码单元来表示最常见的字符，但需要使用两个代码单元来表示不常用的字符，因此有可能将长度返回的值返回到不匹配字符串中的实际字符数。

对于空字符串，长度为0。

静态属性`String.length`返回值1。

## 例子
```
var x = 'Mozilla'; 
 var empty = ''; 
 
 console.log('Mozilla is ' + x.length + ' code units long'); 
 /* "Mozilla is 7 code units long" */ 
 
 console.log('The empty string has a length of ' + empty.length); 
 /* "The empty string has a length of 0" */ 
 
 var str = "every good boy does fine"; 
        var start = 0; 
        var end = str.length - 1; 
        var tmp = ""; 
        var arr = new Array(end); 
 
        while (end >= 0) { 
            arr[start++] = str.charAt(end--); 
        } 
 
 // Join the elements of the array with a 
        var str2 = arr.join(''); 
        document.write(str2); 
 
 // Output: enif seod yob doog yreve 

```