---
title: Map.prototype.entries
localeTitle: Map.prototype.entries
---
## Map.prototype.entries

返回一个新的`Iterator`对象，该对象包含插入顺序中`Map`对象中每个元素的`[key, value]`对。

## 句法

```javascript
myMap.entries() 
```

## 例

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