---
title: Map.prototype.set
---
## Map.prototype.set
Sets or updates an element with specified key and value to a `Map` object. Returns `map` object.

## Syntax
```javascript
myMap.set(key, value);
```

## Parameters
**key** Required.
**value** Required.


##Example
```javascript
const myMap = new Map();

// sets new elements
myMap.set('foo',1);
myMap.set('bar',2);
myMap.set('baz',3);

// Updates an element
myMap.set('foo', 100);

myMap.get('foo');   // returns 100
```