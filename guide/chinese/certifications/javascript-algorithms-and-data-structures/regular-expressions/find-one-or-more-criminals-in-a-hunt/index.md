---
title: Find One or More Criminals in a Hunt
localeTitle: 在狩猎中找到一个或多个罪犯
---
## 在狩猎中找到一个或多个罪犯

## 问题

一群罪犯逃出监狱逃跑，但你不知道有多少人。但是，你知道他们和其他人在一起时会保持紧密联系。你有责任立刻找到所有的罪犯。

写一个贪婪的正则表达式，在一群其他人中找到一个或多个罪犯。罪犯由大写字母C代表。

### 提示1：

你是用斜线围绕你的正则表达式吗？

```javascript
let regexp = /t.[az]*t/; 
```

### 提示2：

你在正则表达式中使用'+'标志？

```javascript
let regexp = /E+/; // returns E, EE, EEE patterns 
```

### 扰流板警告 - 提前解决

## 解

```javascript
let crowd = 'P1P2P3P4P5P6CCCP7P8P9'; 
 
 let reCriminals = /C+/; // Change this line 
 
 let matchedCriminals = crowd.match(reCriminals); 
 console.log(matchedCriminals); 

```