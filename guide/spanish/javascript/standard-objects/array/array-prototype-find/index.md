---
title: Array.prototype.find
localeTitle: Array.prototype.find
---
## Información

El método `find()` devuelve el valor del primer elemento de la matriz que satisface la función de prueba provista. De lo contrario se devuelve undefined. El método `find()` no muta la matriz en la que se llama.

Sintaxis:
```
arr.find(callback[, thisArg]) 
```

##### Parámetros

*   `callback`
*   Función para ejecutar en cada valor de la matriz, tomando tres argumentos:
*   `element`
    *   El elemento actual que se está procesando en la matriz.
*   `index`
    *   El índice del elemento actual que se está procesando en la matriz.
*   `array`
    *   El conjunto hallazgo fue llamado.
*   `thisArg` (Opcional)
*   Objeto para usar como este cuando se ejecuta la devolución de llamada.

##### Valor de retorno

Un valor en la matriz si un elemento pasa la prueba; De lo contrario, indefinido.

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

## Ejemplos

Este ejemplo buscará el elemento correspondiente en la matriz y devolverá el objeto.

```javascript
let items = [ 
    {name: 'books', quantity: 2}, 
    {name: 'movies', quantity: 1}, 
    {name: 'games', quantity: 5} 
 ]; 
 
 function findMovies(item) { 
    return item.name === 'movies'; 
 } 
 
 console.log(items.find(findMovies)); 
 
 // Output 
 //  { name: 'movies', quantity: 1 } 
```

El siguiente ejemplo muestra la salida de cada parámetro opcional a la función de devolución de llamada. Esto devolverá `undefined` porque ninguno de los elementos devolverá verdadero desde la función de devolución de llamada.

```javascript
function showInfo(element, index, array) { 
  console.log('element = ' + element + ', index = ' + index + ', array = ' + array); 
  return false; 
 } 
 
 console.log('return = ' + [4, 6, 8, 12].find(showInfo)); 
 
 // Output 
 //  element = 4, index = 0, array = 4,6,8,12 
 //  element = 6, index = 1, array = 4,6,8,12 
 //  element = 8, index = 2, array = 4,6,8,12 
 //  element = 12, index = 3, array = 4,6,8,12 
 //  return = undefined 

```