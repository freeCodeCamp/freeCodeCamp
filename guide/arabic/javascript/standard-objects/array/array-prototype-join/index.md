---
title: Array.prototype.join
localeTitle: Array.prototype.join
---
سيقوم أسلوب مصفوفة جافا سكريبت `.join()` بدمج جميع عناصر الصفيف في سلسلة واحدة.

**بناء الجملة**

 `  var array = ["Lorem", "Ipsum", "Dolor", "Sit"]; 
  var str = array.join([separator]); 
` 

## المعلمات

**الفاصل**

اختياري. يحدد السلسلة التي سيتم استخدامها لفصل كل عنصر في الصفيف الأصلي. إذا لم يكن الفاصل عبارة عن سلسلة ، فسيتم تحويلها إلى سلسلة. إذا لم يتم تقديم معلمة فاصل ، فسيتم فصل عناصر الصفيف بفاصلة بشكل افتراضي. إذا كان الفاصل عبارة عن سلسلة فارغة `""` ، يتم ضم كل عناصر الصفوف بدون حرف فاصل بينهما.

## وصف

`.join()` ينضم إلى جميع عناصر المصفوفة في سلسلة واحدة. إذا كانت أي من عناصر الصفيف `undefined` أو `null` ، فسيتم تحويل هذا العنصر إلى السلسلة الفارغة `""` .

## أمثلة

**باستخدام `.join()` أربع طرق مختلفة**

 `  var array = ["Lorem", "Ipsum", "Dolor" ,"Sit"]; 
 
  var join1 = array.join();           /* assigns "Lorem,Ipsum,Dolor,Sit" to join1 variable 
                                         (because no separator was provided .join() 
                                         defaulted to using a comma) */ 
  var join2 = array.join(", ");       // assigns "Lorem, Ipsum, Dolor, Sit" to join2 variable 
  var join3 = array.join(" + ");      // assigns "Lorem + Ipsum + Dolor + Sit" to join3 variable 
  var join4 = array.join("");         // assigns "LoremIpsumDolorSit" to join4 variable 
` 

المصدر: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)