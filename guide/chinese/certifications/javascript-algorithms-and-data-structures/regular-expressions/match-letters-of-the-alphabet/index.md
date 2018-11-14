---
title: Match Letters of the Alphabet
localeTitle: 匹配字母的字母
---
## 匹配字母的字母

在此挑战中，要求您匹配给定字符串中的所有字母。您不仅要匹配/搜索这些字符，还要求您提取它们。

### 提示1：

请记住，您被要求从字符串中提取字母 - 这不能通过.test（）方法完成，因为它返回True或False。在这种情况下，我们需要使用.match（）方法从字符串中提取实际结果。

### 提示2：

你是否使用带括号的match（）方法字符大小写标志？例如regExp = / \[ae\] / vs regExp = / ae /。这允许我们做的是使用简写符号/ \[ae\] /在字符串中搜索与\[​​a，b，c，... e\]匹配的任何字符。

### 扰流板警报：未来的解决方案

## 解

```javascript
let quoteSample = "The quick brown fox jumps over the lazy dog."; 
 let alphabetRegex = /[az]/ig; // Change this line 
 let result = quoteSample.match(alphabetRegex); // Change this line 

```