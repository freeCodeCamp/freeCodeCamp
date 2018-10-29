---
title: Map.prototype.clear
localeTitle: Map.prototype.clear
---
## Map.prototype.clear

从`Map`对象中删除所有元素。返回`undefined` 。

## 句法

```javascript
myMap.clear(); 
```

## 例

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