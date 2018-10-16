---
title: Reset an Inherited Constructor Property
localeTitle: إعادة تعيين منشئ Conherrated الخاصية
---
## إعادة تعيين منشئ Conherrated الخاصية

### طريقة

تمت برمجة كائنات `duck` `beagle` لترث خصائص `supertypes` . للكتابة فوق هذين السطرين من التعليمات البرمجية يجب أن تتم كتابتها لتعيين المنشئين إلى المنشئين المطلوبين `Bird` و `Dog` . يوضح التعليمة البرمجية التالية كيف يمكن تحقيق ذلك.

 `Bird.prototype.constructor = Bird; 
` 

### حل

 `function Animal() { } 
 function Bird() { } 
 function Dog() { } 
 
 Bird.prototype = Object.create(Animal.prototype); 
 Dog.prototype = Object.create(Animal.prototype); 
 
 // Add your code below this line 
 Bird.prototype.constructor = Bird; 
 Dog.prototype.constructor = Dog; 
 
 let duck = new Bird(); 
 let beagle = new Dog(); 
`