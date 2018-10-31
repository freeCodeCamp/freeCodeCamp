---
title: Array isArray
localeTitle: Array isArray
---
如果对象是数组，则`Array.isArray()`方法返回`true`否则返回`false` 。

## 句法
```
Array.isArray(obj) 
```

### 参数

**obj**要检查的对象。

[MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) | [MSDN链接](https://msdn.microsoft.com/en-us/LIBRary/ff848265%28v=vs.94%29.aspx)

## 例子
```
// all following calls return true 
 Array.isArray([]); 
 Array.isArray([1]); 
 Array.isArray(new Array()); 
 // Little known fact: Array.prototype itself is an array: 
 Array.isArray(Array.prototype); 
 
 // all following calls return false 
 Array.isArray(); 
 Array.isArray({}); 
 Array.isArray(null); 
 Array.isArray(undefined); 
 Array.isArray(17); 
 Array.isArray('Array'); 
 Array.isArray(true); 
 Array.isArray(false); 
 Array.isArray({ __proto__: Array.prototype }); 

```