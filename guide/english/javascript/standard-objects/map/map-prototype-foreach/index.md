---
title: Map.prototype.forEach
---
## Map.prototype.forEach

Executes the provided function once per each key/value pair in the `Map` object, in insertion order.
Returns `undefined`.

## Syntax
```javascript
myMap.forEach(callback, thisArg)
```

## Parameters
**callback** Function to execute for each element.
**thisArg** Value to use as this when executing callback.


##Example
```javascript
const myMap = new Map();
myMap.set('foo',1);
myMap.set('bar',2);
myMap.set('baz',3);

function valueLogger(value, key, map){
    console.log(`${value}`);
}

myMap.forEach(valueLogger);
// 1
// 2
// 3
```