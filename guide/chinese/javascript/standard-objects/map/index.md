---
title: Map
localeTitle: 地图
---
## 地图

`[key, value]`条目的映射，其中键和值可以是任何值（对象和原始值）。

## 句法

```javascript
new Map([iterable]) 
```

## 参数

**iterable**一个Array或其他可迭代对象，其元素是键值对。

## 例

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