---
title: Match Anything with Wildcard Period
localeTitle: 匹配通配符期间的任何内容
---
## 匹配通配符期间的任何内容

## 提示1：

点`.`是这一挑战的关键。

## 提示2：

你应该把点放在正确的位置。

## 解

```javascript
let exampleStr = "Let's have fun with regular expressions!"; 
 let unRegex = /.un/; // Change this line 
 let result = unRegex.test(exampleStr); 
```

## 释

这段时期`.`将是任何一个字符，因此字符串“run”，“sun”，“fun”和“pun”具有相同的un charaters。