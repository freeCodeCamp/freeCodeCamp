---
title: Find More Than the First Match
localeTitle: 找到比第一场比赛更多的东西
---
## 找到比第一场比赛更多的东西

如果在字符串中出现多次正则表达式，则可以使用`match()`函数来检测所有这些。只需在正则表达式末尾的`g`标记处标记！这就是你在这次挑战中所做的。

## 提示1：

更改正则表达式，以便它检测到单词“twinkle”。

## 提示2：

您可以为正则表达式添加多个标签！例如，检测多次出现并且无论如何都检测到的正则表达式可以被构造为`gi`或`ig` 。

## 剧透警报 - 提前解决！

## 解

```javascript
let twinkleStar = "Twinkle, twinkle, little star"; 
 let starRegex = /twinkle/gi; 
 let result = twinkleStar.match(starRegex); 

```