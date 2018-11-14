---
title: Construct JavaScript Objects with Functions
localeTitle: بناء كائنات جافا سكريبت مع وظائف
---
باستخدام أدوات البناء ، من السهل إنشاء كائنات جديدة باستخدام مخطط أو مُنشئ. بناء جملة التصريح مختلف قليلاً ولكن لا يزال من السهل تذكره.

 `// Let's add the properties engines and seats to the car in the same way that the property wheels has been added below. They should both be numbers. 
 var Car = function() { 
  this.wheels = 4; 
  this.engines = 1; 
  this.seats = 1; 
 }; 
 
 var myCar = new Car(); 
` 

عادةً ما يبدأ اسم دالة المُنشئ بحرف كبير (بخلاف الدالات الأخرى ، التي تميل إلى البدء بحرف صغير). من المفترض أن يساعد الحرف الكبير في تذكير المطورين باستخدام الكلمة الأساسية الجديدة عند قيامهم بإنشاء كائن باستخدام هذه الوظيفة.