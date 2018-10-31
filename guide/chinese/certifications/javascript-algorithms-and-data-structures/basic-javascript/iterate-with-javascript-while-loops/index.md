---
title: Iterate with JavaScript While Loops
localeTitle: 在循环时使用JavaScript进行迭代
---
## 在循环时使用JavaScript进行迭代

只要（）内的条件为真，循环就会运行。 例：

```javascript
while(condition){ 
 code... 
 } 
```

## 提示1：

在您的条件中使用迭代器变量，例如i

```javascript
var i = 0; 
 while(i <= 4){ 
 } 
```

## Spoiler提醒解决方案！

## 解：

```javascript
// Setup 
 var myArray = []; 
 
 // Only change code below this line. 
 var i = 0; 
 while (i <= 4){ 
    myArray.push(i); 
    i++; 
 } 

```