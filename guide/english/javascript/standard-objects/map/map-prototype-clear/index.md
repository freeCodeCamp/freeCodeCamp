---
title: Map.prototype.clear
---
## Map.prototype.clear

Removes all elements from a `Map` object. Returns `undefined`.

##Syntax

```javascript
myMap.clear();
```

##Example
```javascript
const myMap = new Map();
myMap.set('foo',1);
myMap.set('bar',2);
myMap.set('baz',3);


myMap.size(); // 3
myMap.has('foo'); // true;

myMap.clear(); 

myMap.size(); // 0
myMap.has('foo'); // false
```