---
title: Map.prototype.values
localeTitle: Map.prototype.values
---
## Map.prototype.values

إرجاع كائن مكرر يحتوي على قيم لكل عنصر في كائن `Map` بترتيب الإدراج.

## بناء الجملة

 `myMap.values() 
` 

## مثال

 `const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 
 const iterator = myMap.values(); 
 console.log(iterator.next().value); // 1 
 console.log(iterator.next().value); // 2 
 console.log(iterator.next().value); // 3 
`