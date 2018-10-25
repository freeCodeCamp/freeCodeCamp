---
title: Access Property Names with Bracket Notation
localeTitle: 使用括号表示法访问属性名称
---
## 使用括号表示法访问属性名称

方法：

*   使用括号表示法只需在`checkInventory()`函数中编写return语句。
*   以下代码块演示了所需的语法。

## 例：

```javascript
let juice = { 
  apple: 1.15, 
  orange: 1.45 
 }; 
 function checkInventory(scannedItem) { 
  return juice[scannedItem]; 
 } 
```

## 解：

```javascript
let foods = { 
  apples: 25, 
  oranges: 32, 
  plums: 28, 
  bananas: 13, 
  grapes: 35, 
  strawberries: 27 
 }; 
 // do not change code above this line 
 
 function checkInventory(scannedItem) { 
  // change code below this line 
  return foods[scannedItem]; 
 } 
 
 // change code below this line to test different cases: 
 console.log(checkInventory("apples")); 

```