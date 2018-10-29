---
title: Split a String into an Array Using the split Method
localeTitle: 使用split方法将字符串拆分为数组
---
## 使用split方法将字符串拆分为数组

### 方法

只需拆分字符串即可创建一个新的单词数组。

可以使用简单的正则表达式来实现此结果。

### 解

```javascript
function splitify(str) { 
  // Add your code below this line 
  return str.split(/\W/); 
  // Add your code above this line 
 } 
 splitify("Hello World,I-am code"); 

```