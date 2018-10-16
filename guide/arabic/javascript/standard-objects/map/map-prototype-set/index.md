---
title: Map.prototype.set
localeTitle: Map.prototype.set
---
## Map.prototype.set

يقوم بتعيين أو تحديث عنصر بمفتاح وقيمة محددين لكائن `Map` . إرجاع كائن `map` .

## بناء الجملة

 `myMap.set(key, value); 
` 

## المعلمات

**المفتاح** المطلوب. **القيمة** المطلوبة.

## مثال

 `const myMap = new Map(); 
 
 // sets new elements 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 // Updates an element 
 myMap.set('foo', 100); 
 
 myMap.get('foo');   // returns 100 
`