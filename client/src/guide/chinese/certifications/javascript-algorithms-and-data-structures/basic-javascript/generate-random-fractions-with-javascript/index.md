---
title: Generate Random Fractions with JavaScript
localeTitle: 使用JavaScript生成随机分数
---
# 使用JavaScript生成随机分数

随机数对于创建随机行为很有用。

JavaScript有一个`Math.random()`函数，它生成一个介于0（含）和不高达1（独占）之间的随机十进制数。因此， `Math.random()`可以返回0，但永远不会返回1。

## 注意

与使用Equal运算符存储值一样，所有函数调用将在返回执行之前解析，因此我们可以返回`Math.random()`函数的值。

## 说明

更改randomFraction以返回随机数而不是返回0。

## **警告 ！！！**

### **扰流警报!!**

一个解决方案：
```
function randomFraction() { 
  // Only change code below this line. 
  var result = 0; 
  // Math.random() can generate 0. We don't want to     return a 0, 
  // so keep generating random numbers until we get one     that isn't 0 
  while (result === 0) { 
    result = Math.random(); 
  } 
 
  return result; 
  // Only change code above this line. 
 } 

```