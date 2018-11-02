---
title: Immutable Types
localeTitle: 不可变类型
---
> 不可改变意味着不可改变，即你无法改变。

Javascript有很多不可变类型，例如`string`基元类型。在您的控制台中试试这个。
```
s = "red"; 
 console.log(s[1]); //→ "e" 
 s[1] = "x"; 
 console.log(s) //→ "red" 
```

`s`没改变！ WAT ！

## 细节

`String.replace`等一些字符串方法返回一个新字符串。

JavaScript有一种复杂的数据类型，即Object数据类型，它有五种简单的数据类型：Number，String，Boolean，Undefined和Null。这些简单（原始）数据类型是不可变的（不能更改），而对象是可变的（可以更改）。