---
title: Array.prototype.findIndex
localeTitle: Array.prototype.findIndex
---
## Información

El método `findIndex()` devuelve el índice del primer elemento de la matriz que satisface la función de prueba provista. De lo contrario se devuelve -1.

El método `findIndex()` no muta la matriz en la que se llama.

Sintaxis:
```
arr.findIndex(callback[, thisArg]) 
```

##### Parámetros

*   `callback`
*   Función para ejecutar en cada valor de la matriz, tomando tres argumentos:
*   `element`
    *   El elemento actual que se está procesando en la matriz.
*   `index`
    *   El índice del elemento actual que se está procesando en la matriz.
*   `array`
    *   Se invocó la matriz findIndex ().
*   `thisArg` (Opcional)
*   Objeto para usar como este cuando se ejecuta la devolución de llamada.

##### Valor de retorno

Un índice en la matriz si un elemento pasa la prueba; de lo contrario, -1.

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

## Ejemplos

Este ejemplo buscará el elemento correspondiente en la matriz y devolverá el índice.

```javascript
let items = [ 
    {name: 'books', quantity: 2}, 
    {name: 'movies', quantity: 1}, 
    {name: 'games', quantity: 5} 
 ]; 
 
 function findMovies(item) { 
    return item.name === 'movies'; 
 } 
 
 console.log(items.findIndex(findMovies)); 
 
 // Index of 2nd element in the Array is returned, 
 // so this will result in '1' 
```

El siguiente ejemplo muestra la salida de cada parámetro opcional a la función de devolución de llamada. Esto devolverá `-1` porque ninguno de los elementos devolverá verdadero desde la función de devolución de llamada.

```javascript
function showInfo(element, index, array) { 
  console.log('element = ' + element + ', index = ' + index + ', array = ' + array); 
  return false; 
 } 
 
 console.log('return = ' + [4, 6, 8, 12].findIndex(showInfo)); 
 
 // Output 
 //  element = 4, index = 0, array = 4,6,8,12 
 //  element = 6, index = 1, array = 4,6,8,12 
 //  element = 8, index = 2, array = 4,6,8,12 
 //  element = 12, index = 3, array = 4,6,8,12 
 //  return = -1 

```