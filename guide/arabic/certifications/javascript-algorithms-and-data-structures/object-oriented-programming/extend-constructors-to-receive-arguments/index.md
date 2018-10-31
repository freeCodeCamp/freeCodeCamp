---
title: Extend Constructors to Receive Arguments
localeTitle: تمديد البنائين لتلقي الحجج
---
## تمديد البنائين لتلقي الحجج

### طريقة:

مثلما في مثال `Bird()` ، يجب أن تقوم الدالة `Dog()` بجمع معلمتين - `name` `color` . يجب تهيئة الاسم واللون بعد ذلك داخل الدالة باستخدام `this` الكلمة الرئيسية. يتم تعيين الخاصية النهائية - `numLegs` إلى 4 كما لا تأخذ الدالة في معلمة numLegs.

### حل:

 `function Dog(name, color) { 
  this.name = name; 
  this.color = color; 
  this.numLegs = 4; 
 } 
 let terrier = new Dog("George","White"); 
`