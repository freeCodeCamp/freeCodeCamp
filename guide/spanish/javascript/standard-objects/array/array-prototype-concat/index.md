---
title: Array.prototype.concat
localeTitle: Array.prototype.concat
---
## Array.prototype.concat

El método 'concat' devuelve una nueva matriz que consta de los elementos de la matriz en la que se llama, seguido de los elementos de los argumentos en el orden en que se pasan.

Puede pasar varios argumentos al método 'concat'. Los argumentos pueden ser matrices, o tipos de datos como booleanos, cadenas y números.

### Sintaxis

```javascript
const newArray = array.concat(value1, value2, value3...); 
```

### Ejemplos

#### Concatenando dos matrices

```javascript
var cold = ['Blue', 'Green', 'Purple']; 
 var warm = ['Red', 'Orange', 'Yellow']; 
 
 var result = cold.concat(warm); 
 
 console.log(result); 
 // results in ['Blue', 'Green', 'Purple', 'Red', 'Orange', 'Yellow']; 
```

#### Concatenando valor a una matriz

```javascript
const odd = [1, 3, 5, 7, 9]; 
 const even = [0, 2, 4, 6, 8]; 
 
 const oddAndEvenAndTen = odd.concat(even, 10); 
 
 console.log(oddAndEvenAndTen); 
 // results in [1, 3, 5, 7, 9, 0, 2, 4, 6, 8, 10]; 
```

#### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)