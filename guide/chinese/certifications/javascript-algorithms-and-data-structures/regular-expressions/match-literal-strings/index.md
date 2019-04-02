---
title: Match Literal Strings
localeTitle: 匹配文字字符串
---
## 匹配文字字符串

这一挑战与以往没有任何不同;但在这种情况下，您将了解到字符串文字区分大小写。这意味着，当您测试一个字符串是否有文字时，它将搜索字符串中的确切大小写（下部或上部）。在即将到来的课程中，您将学习如何查找字符串文字，无论其大小写如何。

在这个挑战中，你发现了一个字符串！

## 提示1：

将行更改为具有正确的字符串文字。

## 剧透警报 - 提前解决！

## 解：

```javascript
let waldoIsHiding = "Somewhere Waldo is hiding in this text."; 
 let waldoRegex = /Waldo/; // Change this line 
 let result = waldoRegex.test(waldoIsHiding); 

```