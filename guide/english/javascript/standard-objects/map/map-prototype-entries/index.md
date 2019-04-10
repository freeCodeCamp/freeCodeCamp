---
title: Map.prototype.entries
---
## Map.prototype.entries

Returns a new `Iterator` object that contains the `[key, value]` pairs for each element in the `Map` object in insertion order.

## Syntax
```javascript
myMap.entries()
```


##Example
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