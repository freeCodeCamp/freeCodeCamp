---
title: Match Single Characters Not Specified
localeTitle: 匹配未指定的单个字符
---
## 匹配未指定的单个字符

在此挑战中，我们被要求返回未完全指定的匹配集合。虽然之前的正则表达式挑战会在字符情况\[az\]中匹配，但此挑战要求我们使用插入符\[^ az\]来否定这些匹配。我们的目标是返回一个非元音或数字的否定集合（不匹配）。

## 提示1：

你还记得用括号和斜线包围你的正则表达式吗？

```javascript
let exampleRegExp = /[^az]/; 
```

如果是这样，那么仔细检查你是否正在添加适当的标志：

*   i：忽略搜索/匹配的大小写
*   g：检索多个值; default设置为返回遇到的第一个匹配项
*   ^：取消此标志后的匹配

### 提示2：

一定要检查你的号码范围是否正确 - 挑战要求我们否定0-99之间的所有数字。这可以使用在正则表达式的第一个开始括号后立即放置的否定插入符来完成。

```js
let numbersRegExp = /[^0-99]/ig; 
```

### 扰流警报 - 提前解决

## 解

```javascript
let quoteSample = "3 blind mice."; 
 let myRegex = /[^aeiou^0-99]/ig; // Change this line 
 let result = quoteSample.match(myRegex); // Change this line 

```