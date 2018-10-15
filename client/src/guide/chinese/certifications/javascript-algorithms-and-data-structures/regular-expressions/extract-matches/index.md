---
title: Extract Matches
localeTitle: 提取匹配
---
## 提取匹配

使用`match()`方法，您可以提取与正则表达式匹配的字符串部分。在此挑战中，您将从提供的字符串中提取“编码”一词。

## 提示1：

更改正则表达式以检测“编码”一词。

## 提示2：

你在字符串上调用`match()`方法了吗？

## 剧透警报 - 提前解决！

## 解：

```javascript
let extractStr = "Extract the word 'coding' from this string."; 
 let codingRegex = /coding/; 
 let result = extractStr.match(codingRegex); 

```