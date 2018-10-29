---
title: Map.prototype.get
localeTitle: Map.prototype.get
---
## Map.prototype.get

لعرض قيمة المفتاح المحدد من كائن `Map` .

## بناء الجملة

 `myMap.get(key); 
` 

## المعلمات

**المفتاح** المطلوب.

## مثال

 `const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 myMap.get('foo');   // returns 1 
 myMap.get('baz');   // returns 3 
 myMap.get('hihi');  // return undefined 
`