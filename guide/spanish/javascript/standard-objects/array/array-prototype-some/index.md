---
title: Array.prototype.some
localeTitle: Array.prototype.some
---
El método de matriz de JavaScript `.some()` tomará una función de devolución de llamada para probar cada elemento de la matriz; una vez que la devolución de llamada devuelve `true` entonces `.some()` devolverá true inmediatamente.

**Sintaxis**

```javascript
  var arr = [1, 2, 3, 4]; 
  arr.some(callback[, thisArg]); 
```

## Función de devolución de llamada

**Sintaxis**

```javascript
  var isEven = function isEven(currentElement, index, array) { 
      if(currentElement % 2 === 0) { 
          return true; 
      } else { 
          return false; 
      } 
  } 
```

Consulte wiki sobre [operadores aritméticos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) para ver el operador restante `%`

**Tiene 3 argumentos**

*   elemento actual
    
    *   esta es una variable que representa el elemento que se pasa a la devolución de llamada.
*   índice
    
    *   este es el valor de índice del elemento actual que comienza en 0
*   formación
    
    *   la matriz que `.some()` estaba activada.

La función de devolución de llamada debe implementar un caso de prueba.

## esteArg

Es un parámetro opcional y se puede encontrar más información en \[MDN

## Descripción

`.some()` ejecutará la función de devolución de llamada para cada elemento de la matriz. Una vez que la devolución de llamada devuelve true, `.some()` devolverá `true` . Si la devolución de llamada devuelve un [valor falso](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) para _cada_ elemento de la matriz, `.some()` devuelve falso.

`.some()` no cambiará / mutará la matriz que lo llamó.

## Ejemplos

**Pasando una función a `.some()`**

```javascript
  var isEven = function isEven(currentElement, index, array) { 
      if(currentElement % 2 === 0) { 
          return true; 
      } else { 
          return false; 
      } 
  } 
 
  var arr1 = [1, 2, 3, 4, 5, 6]; 
  arr1.some(isEven);  // returns true 
  var arr2 = [1, 3, 5, 7]; 
  arr2.some(isEven);  // returns false 
```

**Función anónima**

```javascript
  var arr3 = ['Free', 'Code', 'Camp', 'The Amazing']; 
  arr3.some(function(curr, index, arr) { 
      if (curr === 'The Amazing') { 
          return true; 
      } 
      }); // returns true 
 
  var arr4 = [1, 2, 14, 5, 17, 9]; 
  arr4.some(function(curr, index, arr) { 
      return curr > 20; 
      });  // returns false 
 
  // ES6 arrows functions 
  arr4.some((curr) => curr >= 14)  // returns true 
```

Fuente: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)