---
title: Match a Literal String with Different Possibilities
localeTitle: 匹配具有不同可能性的文字字符串
---
## 匹配具有不同可能性的文字字符串

假设您想要将许多不同的单词与正则表达式匹配;使用`|`符号，这成为可能。在这个挑战中，您使用该符号来识别隐藏在字符串中的四种不同的宠物！

## 提示1：

在字符串文字内，放置宠物名称，每个名称由`|`分隔符号。

## 剧透警报 - 提前解决！

## 解：

```js
let petString = "James has a pet cat."; 
 let petRegex = /dog|cat|bird|fish/; 
 let result = petRegex.test(petString); 

```