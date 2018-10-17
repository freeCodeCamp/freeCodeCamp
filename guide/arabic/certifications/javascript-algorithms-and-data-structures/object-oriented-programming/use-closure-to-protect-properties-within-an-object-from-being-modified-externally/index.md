---
title: Use Closure to Protect Properties Within an Object from Being Modified Externally
localeTitle: استخدم Closure لحماية الخصائص داخل كائن من التعديل الخارجي
---
## استخدم Closure لحماية الخصائص داخل كائن من التعديل الخارجي

### طريقة

تمامًا كما هو الحال في المثال المعطى ، بدلاً من تعريف متغير `weight` باستخدام `this` الكلمة الرئيسية ، يجب استخدام الكلمة المفتاحية `let` بإعلانها كمتغير خاص. بهذه الطريقة لا يمكن الوصول إليها إلا داخل وظيفة `Bird` . يجب إضافة طريقة `getWeight` داخل وظيفة `Bird` للوصول إلى متغير `weight` .

### حل

 `function Bird() { 
  let weight = 15; 
 
  this.getWeight = function() { 
    return weight; 
  }; 
 
 } 
`