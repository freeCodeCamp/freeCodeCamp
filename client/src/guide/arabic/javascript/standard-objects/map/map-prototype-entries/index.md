---
title: Map.prototype.entries
localeTitle: Map.prototype.entries
---
## Map.prototype.entries

إرجاع كائن `Iterator` جديد يحتوي على أزواج `[key, value]` لكل عنصر في كائن `Map` بترتيب الإدراج.

## بناء الجملة

 `myMap.entries() 
` 

## مثال

 `const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 
 var iterator = myMap.entries(); 
 
 console.log(iterator.next().value); // ['foo', 1] 
 console.log(iterator.next().value); // ['bar', 2] 
 console.log(iterator.next().value); // ['baz', 3] 
`