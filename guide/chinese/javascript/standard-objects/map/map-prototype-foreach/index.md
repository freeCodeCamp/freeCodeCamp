---
title: Map.prototype.forEach
localeTitle: Map.prototype.forEach
---
## Map.prototype.forEach

按插入顺序对`Map`对象中的每个键/值对执行一次提供的函数。 返回`undefined` 。

## 句法

```javascript
myMap.forEach(callback, thisArg) 
```

## 参数

**callback**要为每个元素执行的函数。 **thisArg**执行回调时用作此值的值。

## 例

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