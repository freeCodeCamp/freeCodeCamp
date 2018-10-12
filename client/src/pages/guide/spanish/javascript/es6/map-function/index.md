---
title: Map Function
localeTitle: Función de mapa
---## La función del mapa

La función `map()` se utiliza para crear una nueva matriz a partir de una existente, aplicando una función a cada uno de los elementos de la primera matriz.

La sintaxis original de la función de mapa es:

```javascript
  let new_arr = arr.map(function callback(currentValue, index, array) { 
                  // Do some stuff with currentValue (index and array are optionals) 
                }) 
```

### Ejemplo (ES6):

```javascript
const myArray_1 = [1, 2, 3, 4]; 
 const myArray_2 = myArray_1.map(el => el * 2); 
```

`myArray_2` contendrá los elementos: `[2, 4, 6, 8]`

`map()` es un método del objeto `Array` , por lo que para pasar esa función a un objeto iterable es necesario hacer que el objeto sea un Array.