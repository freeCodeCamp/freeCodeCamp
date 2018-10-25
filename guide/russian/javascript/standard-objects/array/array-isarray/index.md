---
title: Array isArray
localeTitle: Array isArray
---
Метод `Array.isArray()` возвращает `true` если объект является массивом, `false` если это не так.

## Синтаксис
```
Array.isArray(obj) 
```

### параметры

**obj** Объект, подлежащий проверке.

[Ссылка MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) | [Ссылка MSDN](https://msdn.microsoft.com/en-us/LIBRary/ff848265%28v=vs.94%29.aspx)

## Примеры
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