---
title: Map.prototype.keys
localeTitle: Map.prototype.keys
---
## Map.prototype.keys

Возвращает новый объект `Iterator` , содержащий ключи для каждого элемента в объекте `Map` в порядке размещения.

## Синтаксис

```javascript
myMap.keys() 
```

## пример

```javascript
const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 
 const iterator = myMap.keys(); 
 
 console.log(iterator.next().value); // 'foo' 
 console.log(iterator.next().value); // 'bar' 
 console.log(iterator.next().value); // 'baz' 

```