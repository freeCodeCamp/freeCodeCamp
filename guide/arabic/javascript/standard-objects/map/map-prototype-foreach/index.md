---
title: Map.prototype.forEach
localeTitle: Map.prototype.forEach
---
## Map.prototype.forEach

تنفيذ الوظيفة المقدمة مرة واحدة لكل زوج مفتاح / قيمة في كائن `Map` ، بترتيب الإدراج. إرجاع `undefined` .

## بناء الجملة

 `myMap.forEach(callback, thisArg) 
` 

## المعلمات

**رد الاتصال** وظيفة التنفيذ لكل عنصر. **thisArg** Value لاستخدامه كهذا عند تنفيذ رد الاتصال.

## مثال

 ``const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 function valueLogger(value, key, map){ 
    console.log(`${value}`); 
 } 
 
 myMap.forEach(valueLogger); 
 // 1 
 // 2 
 // 3 
``