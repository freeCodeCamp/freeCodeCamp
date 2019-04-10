---
title: Map
localeTitle: خريطة
---
## خريطة

خريطة لإدخالات `[key, value]` ، حيث يمكن أن تكون المفاتيح والقيم أي قيمة (كائنين وقيم بدائية).

## بناء الجملة

 `new Map([iterable]) 
` 

## المعلمات

**iterable** Array أو أي كائن آخر قابل للتكرار والذي تكون عناصره أزواج القيمة الرئيسية.

## مثال

 `// basic usage 
 const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 myMap.get('foo');   // returns 1 
 myMap.get('baz');   // returns 3 
 myMap.get('hihi');  // return undefined 
 
 myMap.size();   // 3 
`