---
title: String.prototype.indexOf
localeTitle: String.prototype.indexOf
---
## String.prototype.indexOf

El método `indexOf()` devuelve el primer índice en el que se puede encontrar un elemento determinado en la matriz. Si el elemento no está presente, devuelve -1.

**Sintaxis**

```javascript
str.indexOf(searchValue[, fromIndex]) 
```

### Parámetros

*   **searchValue** Substring que está buscando. Si esto está vacío ( `''` ) y no hay un parámetro `fromIndex` , devolverá 0.
    
*   **fromIndex** Opcional. El índice en el que desea iniciar la búsqueda. Si el valor `fromIndex` es mayor o igual que la longitud de la cadena, no se busca la cadena y el método devuelve -1. Si `searchValue` es una cadena vacía ( `''` ) y el `fromIndex` es menor que la longitud de la cadena, devolverá el `fromIndex` ; de lo contrario, devolverá la longitud de la cadena. (Un número negativo se tratará como si no hubiera ningún argumento).
    

### Descripción

El método `indexOf()` verifica la cadena de izquierda a derecha. El índice del primer carácter es 0; El índice del último carácter es `string.length - 1` . El método `searchValue` cada subcadena con `searchValue` utilizando una igualdad estricta ( `===` ), lo que significa que este método `searchValue` mayúsculas y minúsculas. Una vez que encuentra una subcadena que devuelve `true` , devuelve el índice de su primer carácter.

### Ejemplos

```javascript
'Blue Whale'.indexOf('Blue');     // returns  0 
 'Blue Whale'.indexOf('Blute');    // returns -1 
 'Blue Whale'.indexOf('Whale', 0); // returns  5 
 'Blue Whale'.indexOf('Whale', 5); // returns  5 
 'Blue Whale'.indexOf('Whale', 7); // returns -1 
 'Blue Whale'.indexOf('');         // returns  0 
 'Blue Whale'.indexOf('', 9);      // returns  9 
 'Blue Whale'.indexOf('', 10);     // returns 10 
 'Blue Whale'.indexOf('', 11);     // returns 10 
 'Blue Whale'.indexOf('blue');     // returns -1 
```

### Más información:

*   Documentación [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) : [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
*   Documentación de [MSDN](https://docs.microsoft.com/en-us/scripting/javascript/reference/indexof-method-string-javascript) : [MSDN](https://docs.microsoft.com/en-us/scripting/javascript/reference/indexof-method-string-javascript)