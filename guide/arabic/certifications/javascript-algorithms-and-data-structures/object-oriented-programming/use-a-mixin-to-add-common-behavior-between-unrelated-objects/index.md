---
title: Use a Mixin to Add Common Behavior Between Unrelated Objects
localeTitle: استخدم Mixin لإضافة سلوك شائع بين الكائنات غير المرتبطة
---
## استخدم Mixin لإضافة سلوك شائع بين الكائنات غير المرتبطة

### طريقة

تماما مثل وظيفة `flyMixin` ، يجب أن تكون وظيفة `glideMixin` جديدة لقبول كل من كائنات `bird` `boat` كمعلمة. قم بإنشاء هذه الوظيفة الجديدة باستخدام نفس صيغة الدالة `flyMixin` ثم قم باستدعاء الوظيفة على كلا العنصرين.

### حل

 `let bird = { 
  name: "Donald", 
  numLegs: 2 
 }; 
 
 let boat = { 
  name: "Warrior", 
  type: "race-boat" 
 }; 
 
 // Add your code below this line 
 let glideMixin = function(obj) { 
    obj.glide = function() { 
        console.log("Gliding!"); 
    } 
 }; 
 glideMixin(bird); 
 glideMixin(boat); 
`