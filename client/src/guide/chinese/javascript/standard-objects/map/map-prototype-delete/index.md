---
title: Map.prototype.delete
localeTitle: Map.prototype.delete
---
## Map.prototype.delete

从`Map`对象中删除指定的元素。 返回是否找到并成功删除密钥。

## 句法

```javascript
myMap.delete(key); 
```

## 参数

**密钥**必需。

## 例

```javascript
const myMap = new Map(); 
 myMap.set('foo',1); 
 myMap.set('bar',2); 
 myMap.set('baz',3); 
 
 
 myMap.size(); // 3 
 myMap.has('foo'); // true; 
 
 myMap.delete('foo');  // Returns true. Successfully removed. 
 
 myMap.size(); // 2 
 myMap.has('foo');    // Returns false. The "foo" element is no longer present. 

```