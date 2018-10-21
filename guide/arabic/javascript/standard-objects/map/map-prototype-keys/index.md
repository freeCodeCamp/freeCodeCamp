---
title: Map.prototype.keys
localeTitle: Map.prototype.keys
---
## Map.prototype.keys

إرجاع كائن `Iterator` جديد يحتوي على مفاتيح لكل عنصر في كائن `Map` بترتيب الإدراج.

## بناء الجملة

 `myMap.keys() 
` 

## مثال

 `const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 
 const iterator = myMap.keys(); 
 
 console.log(iterator.next().value); // 'foo' 
 console.log(iterator.next().value); // 'bar' 
 console.log(iterator.next().value); // 'baz' 
`