---
title: Ignore Case While Matching
localeTitle: 匹配时忽略大小写
---
## 匹配时忽略大小写

创建正则表达式时，您可能希望匹配拼写相同但字符串不同的字符串部分。为此，您将`i`标志添加到正则表达式的末尾。在这个挑战中，你就是这么做的。

## 提示1：

修改正则表达式，使其检测到“freeCodeCamp”，“FREECODECAMP”和“FrEeCoDeCaMp”。也许使用`i`旗可能有帮助吗？

## 剧透警报 - 提前解决！

## 解

```javascript
let myString = "freeCodeCamp"; 
 let fccRegex = /freeCodeCamp/i; 
 let result = fccRegex.test(myString); 

```