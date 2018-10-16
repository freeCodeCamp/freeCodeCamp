---
title: Add Key-Value Pairs to JavaScript Objects
localeTitle: إضافة أزواج Key-Value إلى كائنات JavaScript
---
## إضافة أزواج Key-Value إلى كائنات JavaScript

*   وقد أعلن بالفعل كائن الأطعمة. كل ما تبقى القيام به هو إضافة ثلاث `key-values` جديدة.

 `OBJECT[{KEY}] = {VALUE} 
` 

*   سيعمل الرمز أعلاه على إنشاء `key-value` ney داخل الكائن.

## حل

 `let foods = { 
  apples: 25, 
  oranges: 32, 
  plums: 28 
 }; 
 // change code below this line 
 foods['bananas'] = 13; 
 foods['grapes'] = 35; 
 foods['strawberries'] = 27; 
 // change code above this line 
 console.log(foods); 
`