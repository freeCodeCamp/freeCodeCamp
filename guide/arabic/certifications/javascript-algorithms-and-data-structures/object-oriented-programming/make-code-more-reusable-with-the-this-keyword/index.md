---
title: Make Code More Reusable with the this Keyword
localeTitle: جعل رمز أكثر قابلة لإعادة الاستخدام مع هذه الكلمة الرئيسية
---
## جعل رمز أكثر قابلة لإعادة الاستخدام مع هذه الكلمة الرئيسية

### طريقة:

هذا التحدي هو ببساطة إظهار قوة `this` الكلمة. يؤدي استبدال `dog.numLegs` بـ `this.numLegs` تعزيز الشفرة من خلال الرجوع إلى هذا الكائن مباشرة. يحتوي [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) على العديد من الأمثلة لتحديد تأثيرات `this` الكلمة الرئيسية.

### حل:

 `let dog = { 
  name: "Spot", 
  numLegs: 4, 
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";} 
 }; 
 
 dog.sayLegs(); 
`