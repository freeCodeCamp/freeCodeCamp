---
title: Map.prototype.delete
---
## Map.prototype.delete

Removes the specified element from a `Map` object.
Returns whether the key was found and successfully deleted.

## Syntax
```javascript
myMap.delete(key);
```

## Parameters
**key** Required.


##Example
```javascript
const myMap = new Map();
myMap.set('foo',1);
myMap.set('bar',2);
myMap.set('baz',3);


myMap.size(); // 3
myMap.has('foo'); // true;

myMap.delete('foo');  // Returns true. Successfully removed.

myMap.size(); // 2
myMap.has('foo');    // Returns false. The "foo" element is no longer present.
```