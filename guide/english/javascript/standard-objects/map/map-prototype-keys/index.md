---
title: Map.prototype.keys
---
## Map.prototype.keys
Returns a new `Iterator` object that contains the keys for each element in the `Map` object in insertion order.

## Syntax
```javascript
myMap.keys()
```

##Example
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