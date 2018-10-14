---
title: Array.prototype.push
localeTitle: Array.prototype.push
---
El método `push()` se utiliza para agregar uno o más elementos nuevos al final de una matriz. También devuelve la nueva longitud de la matriz.

### Sintaxis

```javascript
arr.push([element1[, ...[, elementN]]]) 
```

### Parámetros

*   **elementN** Los elementos para agregar al final de la matriz.

### Valor de retorno

La nueva longitud de la matriz en la que se llamó el método.

## Descripción

El método `push()` _empujará los_ elementos al final de una matriz. Puede tomar cero o más argumentos. Si no se proporcionan argumentos, simplemente devolverá la longitud actual de la matriz. Si se proporciona uno o más argumentos, agregará estos argumentos a la matriz en el orden en que están escritas.

Este método también devuelve la nueva longitud de la matriz después de que los elementos se insertan en ella.

## Ejemplo:

```javascript
var myStarkFamily = ['John', 'Robb', 'Sansa', 'Bran']; 
```

Supongamos que tienes una gran variedad de hijos de la Casa Stark de Juego de tronos. Sin embargo, uno de los miembros, **Arya** , está desaparecido. Conociendo el código anterior, puede agregarla asignando `'Arya'` a la matriz en el índice después del último índice, así:

```javascript
myStarkFamily[4] = 'Arya'; 
```

El problema con esta solución es que no puede manejar casos generales. Si no sabía de antemano cuál es la longitud de la matriz, No puedes agregar nuevos elementos de esta manera. Esto es para lo que es `push()` . No necesitamos saber cuánto tiempo es la matriz. Solo agregamos Nuestro elemento hasta el final de la matriz.

```javascript
myStarkFamily.push('Arya'); 
 console.log(myStarkFamily);  // ['John', 'Robb', 'Sansa', 'Bran', 'Arya'] 
 
 var newLength = myStarkFamily.push('Rickon');  // oops! forgot Rickon 
 console.log(newLength);  // 6 
 console.log(myStarkFamily);  // ['John', 'Robb', 'Sansa', 'Bran', 'Arya', 'Rickon'] 
```

#### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)