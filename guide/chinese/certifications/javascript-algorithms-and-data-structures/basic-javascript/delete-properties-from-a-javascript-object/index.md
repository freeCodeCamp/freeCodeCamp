---
title: Delete Properties from a JavaScript Object
localeTitle: 从JavaScript对象中删除属性
---
## 从JavaScript对象中删除属性

### 提示：1

*   使用点表示法更改myDog的属性

# SPOILER警告：解决方案

```javascript
var ourDog = { 
  "name": "Camper", 
  "legs": 4, 
  "tails": 1, 
  "friends": ["everything!"], 
  "bark": "bow-wow" 
 }; 
 
 delete ourDog.bark; 
 
 // Setup 
 var myDog = { 
  "name": "Happy Coder", 
  "legs": 4, 
  "tails": 1, 
  "friends": ["freeCodeCamp Campers"], 
  "bark": "woof" 
 }; 
 
 // Only change code below this line. 
 delete myDog.tails; 

```