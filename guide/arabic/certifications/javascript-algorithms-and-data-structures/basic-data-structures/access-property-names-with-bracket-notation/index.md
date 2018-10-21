---
title: Access Property Names with Bracket Notation
localeTitle: الوصول إلى خاصية الأسماء مع تدرج قوس
---
## الوصول إلى خاصية الأسماء مع تدرج قوس

طريقة:

*   باستخدام `checkInventory()` قوس ببساطة اكتب بيان الإرجاع في الدالة `checkInventory()` .
*   كتلة التعليمات البرمجية التالية يوضح بناء الجملة المطلوب.

## مثال:

 `let juice = { 
  apple: 1.15, 
  orange: 1.45 
 }; 
 function checkInventory(scannedItem) { 
  return juice[scannedItem]; 
 } 
` 

## حل:

 `let foods = { 
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
`