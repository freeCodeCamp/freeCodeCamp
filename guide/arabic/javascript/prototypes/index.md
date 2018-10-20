---
title: Prototypes
localeTitle: نماذج
---
## نماذج

جافا سكريبت هي لغة مبنية على النموذج الأولي ، لذا فهم أن نموذج النموذج هو أحد أهم المفاهيم التي يحتاج ممارسو جافا سكريبت إلى معرفتها. ستعطيك هذه المقالة نظرة عامة قصيرة على كائن Prototype من خلال العديد من الأمثلة. قبل قراءة هذه المقالة ، ستحتاج إلى فهم أساسي [`this` المرجع في JavaScript](/src/pages/javascript/this-reference/index.md) .

### كائن النموذج

من أجل الوضوح ، دعنا نفحص المثال التالي:

 `function Point2D(x, y) { 
  this.x = x; 
  this.y = y; 
 } 
` 

كما `Point2D` وظيفة `Point2D` ، سيتم إنشاء خاصية افتراضية تسمى `prototype` (لاحظ أنه ، في JavaScript ، وظيفة هي أيضا كائن). الخاصية `prototype` هي كائن يحتوي على خاصية `constructor` `Point2D` الدالة `Point2D.prototype.constructor = Point2D` : `Point2D.prototype.constructor = Point2D` . وعندما تستدعي `Point2D` رئيسية `new` ، `Point2D` _الكائنات المنشأة حديثًا جميع الخصائص من_ `Point2D.prototype` . للتحقق من ذلك ، يمكنك إضافة طريقة باسم `move` إلى `Point2D.prototype` كما يلي:

 `Point2D.prototype.move = function(dx, dy) { 
  this.x += dx; 
  this.y += dy; 
 } 
 
 var p1 = new Point2D(1, 2); 
 p1.move(3, 4); 
 console.log(p1.x); // 4 
 console.log(p1.y); // 6 
` 

يسمى `Point2D.prototype` **كائن prototype** أو **prototype** من كائن `p1` وعن أي كائن آخر تم إنشاؤه باستخدام بناء جملة `new Point2D(...)` . يمكنك إضافة المزيد من الخصائص إلى كائن `Point2D.prototype` كما تريد. النمط المشترك هو إعلان الطرق إلى `Point2D.prototype` وسيتم الإعلان عن خصائص أخرى في وظيفة منشئ.

يتم إنشاء الكائنات المضمّنة في JavaScript بطريقة مماثلة. فمثلا:

*   Prototype of objects التي تم تكوينها باستخدام `new Object()` أو `{}` syntax هو `Object.prototype` .
*   النموذج الأولي من المصفوفات التي تم إنشاؤها باستخدام `new Array()` أو `[]` بناء الجملة `Array.prototype` .
*   وهكذا مع الكائنات المضمنة الأخرى مثل `Date` و `RegExp` .

يتم توارث `Object.prototype` بكافة الكائنات وليس لها نموذج أولي (نموذجها الأولي `null` ).

### سلسلة النموذج

آلية سلسلة النموذج بسيطة: عند الوصول إلى خاصية `p` على كائن `obj` ، سيقوم محرك JavaScript بالبحث في هذه الخاصية داخل كائن `obj` . إذا فشل المحرك في البحث ، فإنه يستمر في البحث في نموذج كائن `obj` وهكذا حتى يصل إلى `Object.prototype` . إذا انتهى البحث ، ولم يتم العثور على أي شيء ، فإن النتيجة ستكون `undefined` . فمثلا:

 `var obj1 = { 
  a: 1, 
  b: 2 
 }; 
 
 var obj2 = Object.create(obj1); 
 obj2.a = 2; 
 
 console.log(obj2.a); // 2 
 console.log(obj2.b); // 2 
 console.log(obj2.c); // undefined 
` 

في المقتطف أعلاه ، `var obj2 = Object.create(obj1)` إلى إنشاء كائن `obj2` باستخدام كائن `obj1` prototype. بمعنى آخر ، يصبح `obj1` هو النموذج الأولي لـ `obj2` بدلاً من `Object.prototype` افتراضيًا. كما ترى ، ليست `b` خاصية خاصة بـ `obj2` ، فلا يزال بإمكانك الوصول إليها عبر سلسلة النموذج الأولي. ومع ذلك ، بالنسبة إلى الخاصية `c` ، تحصل على قيمة `undefined` لأنه لا يمكن العثور عليها في `obj1` و `Object.prototype` .

### الطبقات

في ES2016 ، أصبحنا الآن نستخدم الكلمة الرئيسية `Class` وكذلك الأساليب المذكورة أعلاه للتلاعب في `prototype` . تروق `Class` جافا سكريبت للمطورين من خلفيات OOP ، ولكنها في الأساس تقوم بنفس الشيء على النحو الوارد أعلاه.

 `class Rectangle { 
  constructor(height, width) { 
    this.height = height 
    this.width = width 
  } 
 
  get area() { 
    return this.calcArea() 
  } 
 
  calcArea() { 
    return this.height * this.width 
  } 
 } 
 
 const square = new Rectangle(10, 10) 
 
 console.log(square.area) // 100 
` 

هذا هو أساسا نفس:

 `function Rectangle(height, width) { 
  this.height = height 
  this.width = width 
 } 
 
 Rectangle.prototype.calcArea = function calcArea() { 
  return this.height * this.width 
 } 
` 

و `getter` و `setter` الأساليب في الطبقات ربط خاصية كائن إلى وظيفة التي سيتم استدعاؤها عند بدا أن الممتلكات تصل. إنه مجرد سكر نحوي للمساعدة في تسهيل _البحث عن_ الخصائص أو _ضبطها_ .

**قراءة متعمقة:**

*   [MDN: نماذج الكائنات](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)