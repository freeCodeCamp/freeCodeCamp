---
title: Verify an Object's Constructor with instanceof
localeTitle: تحقق من Constructor كائن مع instanceof
---
## تحقق من Constructor كائن مع instanceof

### طريقة:

تماماً كما في التحدي الأخير ، قم بإنشاء كائن جديد - `myHouse` - باستخدام المُنشئ المعطى.

#### مثال:

 `let hound = new Dog(); 
` 

تذكر أن تعطي الدالة `House` معلمة لتهيئة عدد الغرف. ثم ببساطة استدعاء العامل `instanceof` للعودة حقيقية على منزلك الجديد.

### حل:

 `/* jshint expr: true */ 
 
 function House(numBedrooms) { 
  this.numBedrooms = numBedrooms; 
 } 
 
 // Add your code below this line 
 let myHouse = new House(5); 
 myHouse instanceof House; 
`