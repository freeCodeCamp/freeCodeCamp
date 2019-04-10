---
title: Map.prototype.has
localeTitle: Map.prototype.has
---
## Map.prototype.has

في ضوء `Map` تحتوي على عناصر بالداخل ، تتيح لك وظيفة `has()` تحديد ما إذا كان هناك عنصر موجود داخل الخريطة أم لا ، استنادًا إلى مفتاح يمر.

تقوم الدالة `has()` بإرجاع قيمة _`Boolean`_ (إما `true` أو `false` ) ، والتي تشير إلى أن الخريطة تحتوي على العنصر أم لا.

يمكنك تمرير معلمة `key` إلى الدالة `has()` ، والتي سيتم استخدامها للبحث عن عنصر بهذا المفتاح داخل الخريطة.

مثال:

 ``// A simple Map 
 const campers = new Map(); 
 
 // add some elements to the map 
 // each element's key is 'camp' and a number 
 campers.set('camp1', 'Bernardo'); 
 campers.set('camp2', 'Andrea'); 
 campers.set('camp3', 'Miguel'); 
 
 // Now I want to know if there's an element 
 // with 'camp4' key: 
 campers.has('camp4'); 
 // output is `false` 
`` 

لا تحتوي خريطة `campers` حاليًا على عنصر يحتوي على مفتاح `'camp4'` . لذلك ، `has('camp4')` مكالمة `has('camp4')` الدالة `false` .

 ``// If we add an element with the 'camp4' key to the map 
 campers.set('camp4', 'Ana'); 
 
 // and try looking for that key again 
 campers.has('camp4'); 
 // output is `true` 
`` 

بما أن الخريطة تحتوي الآن على عنصر يحتوي على مفتاح `'camp4'` ، `has('camp4')` مكالمة `has('camp4')` بشكل `true` هذه المرة!

في سيناريو أكثر واقعية ، قد لا تضيف العناصر إلى الخريطة يدويًا بنفسك ، لذا فإن الدالة `has()` ستصبح مفيدة حقًا في تلك الحالات.

#### معلومات اكثر:

*   [Map.prototype.has () على MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has)