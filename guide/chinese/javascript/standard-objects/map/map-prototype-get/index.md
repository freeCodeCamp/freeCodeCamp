---
title: Map.prototype.get
localeTitle: Map.prototype.get
---
## Map.prototype.get

从`Map`对象返回指定键的值。

## 句法

```javascript
myMap.get(key); 
```

## 参数

**密钥**必需。

## 例

```javascript
const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 myMap.get('foo');   // returns 1 
 myMap.get('baz');   // returns 3 
 myMap.get('hihi');  // return undefined 

```