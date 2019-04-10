---
title: Sort an Array Alphabetically using the sort Method
localeTitle: فرز صفيف أبجديا باستخدام طريقة الفرز
---
## فرز صفيف أبجديا باستخدام طريقة الفرز

### طريقة

في المثال المعطى ، نرى كيف نكتب دالة ستعيد مصفوفة جديدة بترتيب أبجدي معكوس.

 `function reverseAlpha(arr) { 
  return arr.sort(function(a, b) { 
    return a < b; 
  }); 
 } 
 reverseAlpha(['l', 'h', 'z', 'b', 's']); 
 // Returns ['z', 's', 'l', 'h', 'b'] 
` 

باستخدام هذا المنطق ، ببساطة عكس هندسة وظيفة لإرجاع مجموعة جديدة بالترتيب الأبجدي.

### حل

 `function alphabeticalOrder(arr) { 
  // Add your code below this line 
  return arr.sort(function(a,b) { 
    return a > b; 
  }); 
  // Add your code above this line 
 } 
 alphabeticalOrder(["a", "d", "c", "a", "z", "g"]); 
`