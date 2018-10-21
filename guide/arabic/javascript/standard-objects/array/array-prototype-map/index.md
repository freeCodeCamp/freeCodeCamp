---
title: Array.prototype.map
localeTitle: Array.prototype.map
---
## Array.prototype.map

طريقة `.map()` حلقات عبر الصفيف المحدد وينفذ الدالة المقدمة على كل عنصر. تقوم بإرجاع صفيف جديد يحتوي على نتائج استدعاء دالة على كل عنصر.

### أمثلة

**ES5**

 `var arr = [1, 2, 3, 4]; 
 var newArray = arr.map(function(element) { return element * 2}); 
 console.log(newArray); // [2, 4, 6, 8] 
` 

**ES6**

 `const arr = [1, 2, 3, 4]; 
 const newArray = arr.map(element => element * 2); 
 console.log(newArray); 
 //[2, 4, 6, 8] 
` 

**معلومات اكثر**

هنا هو screencast التفاعلية Scrimba الذي يفسر `Array.prototype.map()` :

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)