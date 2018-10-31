---
title: Remove Whitespace from Start and End
localeTitle: 从开始和结束中删除空格
---
## 从开始和结束中删除空格

要解决此挑战，您只需创建一个正则字符串字符串，该字符串匹配字符串开头或结尾处的任何空格。

## 提示1：

想一想如何在字符串的开头或结尾选择子字符串。

## 提示2：

想想你如何选择空格

## 剧透警报 - 提前解决！

## 解：

```javascript
let hello = "   Hello, World!  "; 
 let wsRegex = /^\s+|\s+$/g; // Change this line 
 let result = hello.replace(wsRegex, ''); // Change this line 

```