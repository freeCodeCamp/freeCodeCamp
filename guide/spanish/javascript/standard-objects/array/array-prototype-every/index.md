---
title: Array.prototype.every
localeTitle: Array.prototype.every
---
El método `every()` comprueba si todos los elementos de la matriz pasan la prueba implementada por la función proporcionada.

**Sintaxis**

```javascript
  arr.every(callback[, thisArg]) 
```

## Parámetros

*   Función de **devolución de llamada** para probar cada elemento, tomando tres argumentos:
    
    *   **valor actual** (requerido)
        
        El elemento actual que se está procesando en la matriz.
        
    *   **índice** (opcional)
        
        El índice del elemento actual que se está procesando en la matriz.
        
    *   **array** (opcional)
        
        La matriz a la que todos fueron llamados.
        
*   **thisArg** Opcional. Valor para utilizar como este al ejecutar la devolución de llamada.
    

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) | [Enlace MSDN](https://msdn.microsoft.com/en-us/LIBRary/ff679981%28v=vs.94%29.aspx)

## Descripción

`every` método llama a la función de `callback` una vez para cada elemento de la matriz, en orden de índice ascendente, hasta que la función de `callback` devuelve falso. Si se encuentra un elemento que hace que la `callback` de `callback` devuelva falso, cada método devuelve inmediatamente `false` . De lo contrario, todos los métodos devuelven `true` .

La función de devolución de llamada no se llama para los elementos que faltan de la matriz.

Además de los objetos de matriz, todos los métodos pueden ser utilizados por cualquier objeto que tenga una propiedad de longitud y que tenga nombres de propiedades indexadas numéricamente. `every` no muta la matriz en la que se llama.

## Ejemplos

```javascript
  function isBigEnough(element, index, array) { 
    return element >= 10; 
  } 
  [12, 5, 8, 130, 44].every(isBigEnough);   // false 
  [12, 54, 18, 130, 44].every(isBigEnough); // true 
 
  // Define the callback function. 
  function CheckIfEven(value, index, ar) { 
      document.write(value + " "); 
 
      if (value % 2 == 0) 
          return true; 
      else 
          return false; 
  } 
 
  // Create an array. 
  var numbers = [2, 4, 5, 6, 8]; 
 
  // Check whether the callback function returns true for all of the 
  // array values. 
  if (numbers.every(CheckIfEven)) 
      document.write("All are even."); 
  else 
      document.write("Some are not even."); 
 
  // Output: 
  // 2 4 5 Some are not even. 

```