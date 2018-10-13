---
title: Use Prototype Properties to Reduce Duplicate Code
localeTitle: استخدم خصائص النموذج لتخفيض قانون مكرر
---
## استخدم خصائص النموذج لتخفيض قانون مكرر

### طريقة:

تسمح لك خاصية `prototype` بإضافة خصائص جديدة إلى مُنشئ كائن من خارج كتلة التعليمات البرمجية الأصلية. كما تسمح لك خاصية النموذج الأولي بإضافة وظائف جديدة إلى مُنشئ الكائنات. يوضح التعليمة البرمجية التالية كيفية استخدام `.prototype` على كائن لإنشاء خاصية جديدة في المُنشئ.

#### مثال:

 `Obj.prototype.newProperty = "New Property!"; 
` 

باستخدام هذا المنطق ، ببساطة إنشاء خاصية `prototype` جديد لـ `numLegs` . يمكن تمرير حالات الاختبار عن طريق استبدال كائن `Bird` بكائن `Dog` في المثال المعطى - `Bird.prototype.numLegs = 2;`

### حل:

 `function Dog(name) { 
  this.name = name; 
 } 
 
 Dog.prototype.numLegs = 4; 
 
 // Add your code above this line 
 let beagle = new Dog("Snoopy"); 
`