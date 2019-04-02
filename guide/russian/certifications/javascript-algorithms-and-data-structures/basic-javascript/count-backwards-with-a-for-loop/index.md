---
title: Count Backwards With a For Loop
localeTitle: Count Backwards с помощью цикла
---
## Count Backwards с помощью цикла

Вот пример:

```javascript
// Example 
 var ourArray = []; 
 
 for (var i = 10; i > 0; i -= 2) { 
  ourArray.push(i); 
 } 
 
 // Setup 
 var myArray = []; 
 
 // Only change code below this line. 
```

#### СОВЕТ: 1

*   создать новый цикл for myArray

#### СОВЕТ: 2

*   начните с первого нечетного числа перед 9

# ПРЕДУПРЕЖДЕНИЕ SPOILER: РЕШЕНИЕ ВПЕРЕДИ

```javascript
var ourArray = []; 
 
 for (var i = 10; i > 0; i -= 2) { 
  ourArray.push(i); 
 } 
 
 // Setup 
 var myArray = []; 
 
 // Only change code below this line. 
 for (var i = 9; i > 0; i-=2){ 
  myArray.push(i) 
 } 

```