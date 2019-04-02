---
title: Map.prototype.values
localeTitle: Map.prototype.values
---
## Map.prototype.values

Возвращает объект-итератор, содержащий значения для каждого элемента в объекте `Map` в порядке размещения.

## Синтаксис

```javascript
myMap.values() 
```

## пример

```javascript
const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 
 const iterator = myMap.values(); 
 console.log(iterator.next().value); // 1 
 console.log(iterator.next().value); // 2 
 console.log(iterator.next().value); // 3 

```