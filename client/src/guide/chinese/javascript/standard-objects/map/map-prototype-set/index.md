---
title: Map.prototype.set
localeTitle: Map.prototype.set
---
## Map.prototype.set

将具有指定键和值的元素设置或更新为`Map`对象。返回`map`对象。

## 句法

```javascript
myMap.set(key, value); 
```

## 参数

**密钥**必需。 **值**必需。

## 例

```javascript
const myMap = new Map(); 
 
 // sets new elements 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 // Updates an element 
 myMap.set('foo', 100); 
 
 myMap.get('foo');   // returns 100 

```