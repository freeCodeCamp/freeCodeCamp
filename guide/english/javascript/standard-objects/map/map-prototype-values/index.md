---
title: Map.prototype.values
---
## Map.prototype.values
Returns a iterator object that contains the values for each element in the `Map` object in insertion order.

## Syntax
```javascript
myMap.values()
```

##Example
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