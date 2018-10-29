---
title: Some Function
localeTitle: Alguna función
---## Alguna función

La función `some()` se usa para verificar si al menos un elemento de una matriz cumple con una condición dada. La función devuelve `true` si la condición se cumple con un elemento, y falso si alguno de los elementos cumple con la condición

La sintaxis original de alguna función es:

```javascript
arr.some(function callback(currentValue, index, array) { 
  // Do some stuff with currentValue (index and array are optionals) 
 }, [thisArg]); 
```

### Ejemplo (ES6):

```javascript
const arr = [1, 4, 5, 11]; 
 if (arr.some(el => el % 2 == 0)) { 
  console.log("There's at least one even number"); 
 } 
```

`some()` es un método del objeto `Array` , por lo que para pasar esa función a un objeto iterable, es necesario asegurarse de que el objeto sea un Array.