---
title: Map
---

## Map
A map of `[key, value]` entries, where keys and values can be any value (both objects and primitive values).

## Syntax
```javascript
new Map([iterable])
```

## Parameters
**iterable** An Array or other iterable object whose elements are key-value pairs.

## Example
```javascript
// basic usage
const myMap = new Map();
myMap.set('foo',1);
myMap.set('bar',2);
myMap.set('baz',3);

myMap.get('foo');   // returns 1
myMap.get('baz');   // returns 3
myMap.get('hihi');  // return undefined

myMap.size();   // 3
```