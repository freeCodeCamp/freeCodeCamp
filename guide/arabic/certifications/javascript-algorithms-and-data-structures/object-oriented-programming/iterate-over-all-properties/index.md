---
title: Iterate Over All Properties
localeTitle: تكرار جميع الممتلكات
---
## تكرار جميع الممتلكات

### طريقة

الأسلوب هو استخدام `for-in-loop` تكرار خلال كل خاصية في الكائن. داخل الحلقة ، `ownProps[]` إذا كان الخاصية خاصية `own-property` أو `prototype` ، ثم ضعها في `ownProps[]` أو صفيف `prototypeProps[]` . تذكر `push` الخصائص إلى كائن `beagle` وليس الكائن `Dog` لتمرير جميع حالات الاختبار.

### حل

 `function Dog(name) { 
  this.name = name; 
 } 
 
 Dog.prototype.numLegs = 4; 
 
 let beagle = new Dog("Snoopy"); 
 
 let ownProps = []; 
 let prototypeProps = []; 
 
 // Add your code below this line 
 for (let property in beagle) { 
  if(Dog.hasOwnProperty(property)) { 
    ownProps.push(property) 
  } 
  else { 
    prototypeProps.push(property) 
  } 
 } 
`