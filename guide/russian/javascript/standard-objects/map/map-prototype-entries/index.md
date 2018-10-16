---
title: Map.prototype.entries
localeTitle: Map.prototype.entries
---
## Map.prototype.entries

Возвращает новый объект `Iterator` , содержащий пары `[key, value]` для каждого элемента в объекте `Map` в порядке размещения.

## Синтаксис

```javascript
myMap.entries() 
```

## пример

```javascript
const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 
 var iterator = myMap.entries(); 
 
 console.log(iterator.next().value); // ['foo', 1] 
 console.log(iterator.next().value); // ['bar', 2] 
 console.log(iterator.next().value); // ['baz', 3] 

```