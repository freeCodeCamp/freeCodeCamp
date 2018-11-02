---
title: Remove Elements from an Array Using slice Instead of splice
localeTitle: إزالة عناصر من صفيف باستخدام شريحة بدلاً من لصق
---
## إزالة عناصر من صفيف باستخدام شريحة بدلاً من لصق

*   الفرق بين لصق وطريقة شريحة هو أن طريقة شريحة لا تحور الصفيف الأصلي ، ولكن إرجاع واحدة جديدة.
*   تأخذ طريقة الشريحة اثنين من الوسيطتين لبدء المؤشرات وإنهاء الشريحة (النهاية غير شاملة).
*   إذا كنت لا تريد تحوير الصفيف الأصلي ، يمكنك استخدام طريقة الشريحة.

## حل

 `function nonMutatingSplice(cities) { 
  // Add your code below this line 
 
  return cities.slice(0, 3); 
 
  // Add your code above this line 
 } 
 var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"]; 
 nonMutatingSplice(inputCities); 
`