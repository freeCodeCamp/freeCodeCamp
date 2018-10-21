---
title: Return Part of an Array Using the slice Method
localeTitle: عودة جزء من صفيف باستخدام طريقة شريحة
---
## عودة جزء من صفيف باستخدام طريقة شريحة

### شرح المشكلة

استخدم طريقة الشريحة في وظيفة sliceArray لإرجاع جزء من صفيف الرسوم المتحركة مع الأخذ في الاعتبار مؤشرات startSlice و endSlice المقدمة. يجب على الدالة إرجاع صفيف.

### طريقة

يمكن كتابة الدالة ببساطة عن طريق كتابة سطر واحد من التعليمات البرمجية - عبارة return. تمامًا كما في المثال المعطى ، قم `beginSlice` المصفوفة التي تأخذها الدالة كمعلمة باستخدام معلمات `beginSlice` و `endSlice` كمعلمات `endSlice` `slice()` . تذكر بنية طريقة `slice()` :

 `var arr = ["Cat", "Dog", "Tiger", "Zebra", "Ant"]; 
 arr.slice([index-to-begin-slice] , [index-to-end-slice]); 
` 

### حل

 `function sliceArray(anim, beginSlice, endSlice) { 
  // Add your code below this line 
  return anim.slice(beginSlice, endSlice); 
  // Add your code above this line 
 } 
 var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"]; 
 sliceArray(inputAnim, 1, 3); 
` 

#### روابط ذات صلة:

*   [Array.prototype.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)