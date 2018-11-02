---
title: Array.prototype.lastIndexOf
localeTitle: Array.prototype.lastIndexOf
---
## Array.prototype.lastIndexof

El método `lastIndexOf()` devuelve el último índice en el que se puede encontrar un elemento determinado en la matriz, o -1 si no está presente. La matriz se busca hacia atrás, comenzando en `fromIndex` .

**Sintaxis**

```javascript
  arr.lastIndexOf(searchElement, fromIndex = arr.length - 1]) 
```

## Parámetros

*   **searchElement**
    
    *   Elemento para ubicar en la matriz.
*   **desde el índice**
    
    *   _Opcional_ El índice en el que comenzar la búsqueda hacia atrás. El valor predeterminado es la longitud de la matriz menos uno, es decir, se buscará en toda la matriz. Si el índice es mayor o igual que la longitud de la matriz, se buscará la matriz completa. Si es negativo, se toma como el desplazamiento desde el final de la matriz. Tenga en cuenta que incluso cuando el índice es negativo, la matriz se sigue buscando desde atrás hacia adelante. Si el índice calculado es menor que 0, se devuelve -1, es decir, no se buscará la matriz.

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) | [Enlace MSDN](https://msdn.microsoft.com/en-us/LIBRary/ff679972%28v=vs.94%29.aspx)

## Devoluciones

El índice de la última aparición de `searchElement` en la matriz, o -1 si no se encuentra `searchElement` .

## Descripción

`lastIndexOf` compara `searchElement` con elementos de la matriz utilizando una igualdad estricta (el mismo método utilizado por el operador ===, o triple-igual).

## Observaciones

La búsqueda se realiza en orden de índice descendente (último miembro primero). Para buscar en orden ascendente, use el método `indexOf` .

El argumento `fromIndex` opcional especifica el índice de matriz en el que se inicia la búsqueda. Si `fromIndex` es mayor o igual que la longitud de la matriz, se busca en toda la matriz. Si `fromIndex` es negativo, la búsqueda comienza en la longitud de la matriz más `fromIndex` . Si el índice calculado es menor que 0, se devuelve -1.

## Ejemplos

```javascript
  var array = [2, 5, 9, 2]; 
  array.lastIndexOf(2);     // 3 
  array.lastIndexOf(7);     // -1 
  array.lastIndexOf(2, 3);  // 3 
  array.lastIndexOf(2, 2);  // 0 
  array.lastIndexOf(2, -2); // 0 
  array.lastIndexOf(2, -1); // 3 
 
  // Create an array. 
  var ar = ["ab", "cd", "ef", "ab", "cd"]; 
 
  // Determine the first location, in descending order, of "cd". 
  document.write(ar.lastIndexOf("cd") + "<br/>"); 
 
  // Output: 4 
 
  // Find "cd" in descending order, starting at index 2. 
  document.write(ar.lastIndexOf("cd", 2) + "<br/>"); 
 
  // Output: 1 
 
  // Search for "gh" (which is not found). 
  document.write(ar.lastIndexOf("gh")+ "<br/>"); 
 
  // Output: -1 
 
  // Find "ab" with a fromIndex argument of -3. 
  // The search in descending order starts at index 3, 
  // which is the array length minus 2. 
  document.write(ar.lastIndexOf("ab", -3) + "<br/>"); 
  // Output: 0 

```