---
title: String.prototype.slice
localeTitle: String.prototype.slice
---
JavaScript字符串方法`.slice()`提取字符串的一部分并返回一个新字符串。

## 句法
```
str.slice(beginSliceIndex [, endSliceIndex]); 
```

## 参数

**beginSliceIndex**

切片应该从零开始的索引。如果beginSliceIndex是负数，则`.slice()`从字符串的末尾开始向后计数，以确定从哪里开始切片。

**endSliceIndex**

可选的。切片应该结束的从零开始的索引。如果省略， `.slice()`提取到字符串的末尾。

[MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

## 描述

`.slice()`将文本切成一个字符串并返回一个新字符串。

## 例子

**使用`.slice()`创建一个新字符串**
```
var string1 = "Hello World!"; 
 var string2 = string1.slice(3); 
 console.log(string2);                           // Will log "lo World!" 
 
 var string3 = string1.slice(3, 7); 
 console.log(string3);                           // Will log "lo W" 
```

**使用带有负索引的`.slice()`**
```
var string = "Hello World!" 
 str.slice(-3);                                  // Returns "ld!" 
 str.slice(-3, -1);                              // Returns "ld" 
 str.slice(0, -1);                               // Returns "Hello World" 

```