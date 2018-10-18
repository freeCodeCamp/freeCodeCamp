---
title: Object getOwnPropertyNames
localeTitle: Objeto getOwnPropertyNames
---
El método `Object.getOwnPropertyNames()` devuelve una matriz de todas las propiedades (enumerables o no) encontradas directamente sobre un objeto determinado.

## Sintaxis
```
Object.getOwnPropertyNames(obj) 
```

### Parámetros

**obj**

El objeto cuyas propiedades propias enumerables _y no enumerables_ deben devolverse.

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) | [Enlace MSDN](https://msdn.microsoft.com/en-us/LIBRary/ff688126%28v=vs.94%29.aspx)

## Descripción

`Object.getOwnPropertyNames()` devuelve una matriz cuyos elementos son cadenas correspondientes a las propiedades enumerables _y no enumerables que se_ encuentran directamente sobre el objeto. El orden de las propiedades enumerables en la matriz es consistente con el orden expuesto por un `for...in` loop (o por `Object.keys()` ) sobre las propiedades del objeto. El orden de las propiedades no enumerables en la matriz, y entre las propiedades enumerables, no está definido.

## Ejemplos
```
var arr = ['a', 'b', 'c']; 
 console.log(Object.getOwnPropertyNames(arr).sort()); // logs '0,1,2,length' 
 
 // Array-like object 
 var obj = { 0: 'a', 1: 'b', 2: 'c' }; 
 console.log(Object.getOwnPropertyNames(obj).sort()); // logs '0,1,2' 
 
 // Logging property names and values using Array.forEach 
 Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) { 
  console.log(val + ' -> ' + obj[val]); 
 }); 
 // logs 
 // 0 -> a 
 // 1 -> b 
 // 2 -> c 
 
 // non-enumerable property 
 var my_obj = Object.create({}, { 
  getFoo: { 
    value: function() { return this.foo; }, 
    enumerable: false 
  } 
 }); 
 my_obj.foo = 1; 
 
 console.log(Object.getOwnPropertyNames(my_obj).sort()); // logs 'foo,getFoo' 
 
 function Pasta(grain, size, shape) { 
    this.grain = grain; 
    this.size = size; 
    this.shape = shape; 
 } 
 
 var spaghetti = new Pasta("wheat", 2, "circle"); 
 
 var names = Object.getOwnPropertyNames(spaghetti).filter(CheckKey); 
 document.write(names); 
 
 // Check whether the first character of a string is 's'. 
 function CheckKey(value) { 
    var firstChar = value.substr(0, 1); 
    if (firstChar.toLowerCase() == 's') 
        return true; 
    else 
         return false; 
 } 
 // Output: 
 // size,shape 

```