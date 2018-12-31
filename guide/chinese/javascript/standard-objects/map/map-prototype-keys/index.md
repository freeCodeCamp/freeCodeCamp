---
title: Map.prototype.keys
localeTitle: Map.prototype.keys
---
## Map.prototype.keys

返回一个新的`Iterator`对象，该对象包含插入顺序中`Map`对象中每个元素的键。

## 句法

```javascript
myMap.keys() 
```

## 例

```javascript
const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 
 const iterator = myMap.keys(); 
 
 console.log(iterator.next().value); // 'foo' 
 console.log(iterator.next().value); // 'bar' 
 console.log(iterator.next().value); // 'baz' 

```