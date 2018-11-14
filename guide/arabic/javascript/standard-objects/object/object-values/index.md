---
title: Object Values
localeTitle: قيم الكائن
---
إرجاع الأسلوب `Object.values()` صفيف قيم الخاصية enumerable الخاصة كائن محدد في نفس الترتيب كتلك المقدمة من قبل لـ في حلقة (الفرق هو أن حلقة for-in تعداد خصائص في سلسلة النموذج الأولي أيضاً ).

## بناء الجملة

 `Object.values(obj) 
` 

### المعلمات

**الكائنات**

الكائن الذي سيتم إرجاع خصائصه الخاصة به.

[وصلة MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

## وصف

إرجاع `Object.values()` صفيف العناصر الخاصة به هي قيم الخاصية التي يمكن عدها العثور على الكائن. ترتيب الخصائص هو نفسه الذي يعطى من خلال حلقات على قيم خصائص الكائن يدويا. بمعنى آخر ، يحتوي الكائن على مفتاح: أزواج قيم ، وتقوم هذه الطريقة بإرجاع جميع _قيم_ ذلك الكائن في كائن شبيه بالصفيف.

راجع [Object.keys](https://guide.freecodecamp.org/javascript/standard-objects/object/object-keys/) ، والتي تُرجع كل _مفاتيح_ هذا الكائن في كائن يشبه المصفوفة.

## أمثلة

 `var obj = { foo: 'bar', baz: 42 }; 
 console.log(Object.values(obj)); // ['bar', 42] 
 
 // array like object 
 var obj = { 0: 'a', 1: 'b', 2: 'c' }; 
 console.log(Object.values(obj)); // ['a', 'b', 'c'] 
 
 // array like object with random key ordering 
 var an_obj = { 100: 'a', 2: 'b', 7: 'c' }; 
 console.log(Object.values(an_obj)); // ['b', 'c', 'a'] 
 
 // getFoo is property which isn't enumerable 
 var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } }); 
 my_obj.foo = 'bar'; 
 console.log(Object.values(my_obj)); // ['bar'] 
 
 // non-object argument will be coerced to an object 
 console.log(Object.values('foo')); // ['f', 'o', 'o'] 
` 

\* _لا يعمل في Internet Explorer_