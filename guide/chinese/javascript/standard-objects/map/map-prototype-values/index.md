---
title: Map.prototype.values
localeTitle: Map.prototype.values
---
## Map.prototype.values

返回一个迭代器对象，该对象包含插入顺序中`Map`对象中每个元素的值。

## 句法

```javascript
myMap.values() 
```

## 例

```javascript
const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 
 const iterator = myMap.values(); 
 console.log(iterator.next().value); // 1 
 console.log(iterator.next().value); // 2 
 console.log(iterator.next().value); // 3 

```