---
title: Map.prototype.get
---
## Map.prototype.get
Returns a value of the specified key from a `Map` object.

## Syntax
```javascript
myMap.get(key);
```

## Parameters
**key** Required.


##Example
```javascript
const myMap = new Map();
myMap.set('foo',1);
myMap.set('bar',2);
myMap.set('baz',3);

myMap.get('foo');   // returns 1
myMap.get('baz');   // returns 3
myMap.get('hihi');  // return undefined
```
