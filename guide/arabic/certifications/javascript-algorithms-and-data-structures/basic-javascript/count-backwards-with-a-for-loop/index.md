---
title: Count Backwards With a For Loop
localeTitle: عد إلى الخلف مع ل حلقة
---
## عد إلى الخلف مع ل حلقة

هنا هو المثال:

 `// Example 
 var ourArray = []; 
 
 for (var i = 10; i > 0; i -= 2) { 
  ourArray.push(i); 
 } 
 
 // Setup 
 var myArray = []; 
 
 // Only change code below this line. 
` 

#### تلميح: 1

*   إنشاء حلقة جديدة من أجل myArray

#### تلميح: 2

*   تبدأ من أول رقم فردي قبل 9

# تحذير SPOILER: SOLUTION AHEAD

 `var ourArray = []; 
 
 for (var i = 10; i > 0; i -= 2) { 
  ourArray.push(i); 
 } 
 
 // Setup 
 var myArray = []; 
 
 // Only change code below this line. 
 for (var i = 9; i > 0; i-=2){ 
  myArray.push(i) 
 } 
`