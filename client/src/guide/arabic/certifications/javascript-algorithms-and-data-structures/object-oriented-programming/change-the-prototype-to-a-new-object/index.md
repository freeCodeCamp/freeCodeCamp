---
title: Change the Prototype to a New Object
localeTitle: تغيير النموذج إلى كائن جديد
---
## تغيير النموذج إلى كائن جديد

بدلا من إضافة كل خاصية نموذج واحد تلو الآخر مع `object.prototype.property` . يمكننا القيام بذلك أسهل بكثير من خلال وضع النموذج الأولي على كائن جديد. بهذه الطريقة تتم إضافة كل خصائص النموذج في وقت واحد.

  

## ملحوظة:

 `Dog.prototype = { 
  property: value, 
  functionName: function(){ 
 
  }, 
 } 
` 

حاول الآن أن تحل التحدي!

  

## Spoiler-Alert الحل إلى الأمام!

  

## الحل 1:

 `function Dog(name) { 
  this.name = name; 
 } 
 Dog.prototype = { 
  // Add your code below this line 
  numLegs: 2, 
  eat: function(){ 
    console.log('nom nom nom'); 
  }, 
  describe: function(){ 
    console.log("My name is " + this.name); 
  } 
 } 
` 

## شرح الشفرة:

نقوم بتعيين متغير النموذج إلى كائن جديد. ثم نعلن عن خاصية numLegs ونمنحه قيمة 2.

بعد ذلك نخلق الوظيفتين "تناول الطعام" و "وصف". الآن تذكر أن الدالات في الكائنات هي أساليب لها نفس الصيغة كخصائص. لديك اسم متبوعًا بقيمة. هذه القيمة هي الوظيفة والاسم هو اسم وظيفتك.  

## الحل 2:

 `function Dog(name) { 
  this.name = name; 
 } 
 
 Dog.prototype = { 
  // Add your code below this line 
  numLegs: 2, 
  eat(){ 
    console.log('nom nom nom'); 
  }, 
  describe(){ 
    console.log("My name is " + this.name); 
  } 
 }; 
` 

## شرح الشفرة:

الشيء الوحيد المختلف بين هذا الحل والحل الأخير هو أننا قللنا بناء الجملة على وظائف "أكل" و "وصف". فعلنا ذلك عن طريق إزالة ":" وكلمة "وظيفة".

مع ES6 يسمح لنا القيام بذلك.

يمكنك أن تقرأ عنها هنا: [المرجع](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)