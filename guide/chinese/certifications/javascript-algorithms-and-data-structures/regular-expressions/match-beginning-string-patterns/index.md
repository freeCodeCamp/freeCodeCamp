---
title: Match Beginning String Patterns
localeTitle: 匹配开始字符串模式
---
## 匹配开始字符串模式

## 问题

使用正则表达式中的插入符号只能在字符串rickyAndCal的开头找到“Cal”。

### 提示1：

尝试用斜杠包围你的正则表达式

```javascript
let testExp = /^test/; 
 // returns true or false depending on whether test is found in the beginning of the string 
```

### 提示2：

尝试在括号外使用'^'字符插入符号，如上例所示

### 扰流警报 - 提前解决

## 解

```javascript
let rickyAndCal = "Cal and Ricky both like racing."; 
 let calRegex = /^Cal/; // Change this line 
 let result = calRegex.test(rickyAndCal); 

```