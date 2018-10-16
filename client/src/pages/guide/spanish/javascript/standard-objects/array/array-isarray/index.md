---
title: Array isArray
localeTitle: Array isArray
---
El método `Array.isArray()` devuelve `true` si un objeto es una matriz, `false` si no lo es.

## Sintaxis
```
Array.isArray(obj) 
```

### Parámetros

**obj** El objeto a comprobar.

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) | [Enlace MSDN](https://msdn.microsoft.com/en-us/LIBRary/ff848265%28v=vs.94%29.aspx)

## Ejemplos
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