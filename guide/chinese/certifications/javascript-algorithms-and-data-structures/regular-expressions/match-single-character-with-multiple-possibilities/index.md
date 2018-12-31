---
title: Match Single Character with Multiple Possibilities
localeTitle: 将单个角色与多种可能性相匹配
---
## 将单个角色与多种可能性相匹配

### 提取

使用match（）方法，您可以提取与正则表达式匹配的字符串部分。在此挑战中，您将从提供的字符串中提取元音“a，e，i，o，u”。

### 提示1：

您是否尝试使用test（）方法？请记住，此方法仅返回True或False - 我们需要从字符串中提取元音。

### 提示2：

您是否尝试过不使用逗号的“\[\]”字符大小写匹配？即\[abcd\] vs \[a，b，c，d\]

### 剧透警报 - 提前解决！

## 解

```javascript
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it."; 
 let vowelRegex = /[aeiou]/ig; // Change this line 
 let result = quoteSample.match(vowelRegex); // Change this line 

```