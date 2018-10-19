---
title: Map.prototype.clear
localeTitle: Map.prototype.clear
---
## Map.prototype.clear

يزيل كل العناصر من كائن `Map` . إرجاع `undefined` .

## بناء الجملة

 `myMap.clear(); 
` 

## مثال

 `const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 
 myMap.size(); // 3 
 myMap.has('foo'); // true; 
 
 myMap.clear(); 
 
 myMap.size(); // 0 
 myMap.has('foo'); // false 
`