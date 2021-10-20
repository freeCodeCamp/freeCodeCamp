---
id: 587d7b86367417b2b2512b3c
title: Ten cuidado al reinicializar variables dentro de un bucle
challengeType: 1
forumTopicId: 301194
dashedName: use-caution-when-reinitializing-variables-inside-a-loop
---

# --description--

A veces es necesario guardar información, incrementar contadores o reajustar variables dentro de un bucle. Un problema potencial es cuando las variables deberían ser reiniciadas y no lo son, o viceversa. Esto es particularmente peligroso si accidentalmente se restablece la variable que se utiliza para la condición terminal, causando un bucle infinito.

La impresión de los valores de las variables con cada ciclo de su bucle mediante el uso de `console.log()` puede descubrir un comportamiento erróneo relacionado con el restablecimiento, o la falta de restablecimiento de una variable.

# --instructions--

La siguiente función debe crear un arreglo bidimensional (matriz) con `m` filas (rows) y `n` columnas (columns) de ceros. Desafortunadamente, no está produciendo la salida esperada porque la variable `row` no está siendo reiniciada (devuelta a un arreglo vacío) en el bucle exterior. Corrige el código para que devuelva una matriz 3x2 de ceros correcta, que se parezca a `[[0, 0], [0, 0], [0, 0]]`.

# --hints--

Tu código debe establecer la variable `matrix` en una matriz que contenga 3 filas de 2 columnas de ceros cada una.

```js
assert(JSON.stringify(matrix) == '[[0,0],[0,0],[0,0]]');
```

La variable `matrix` debe tener 3 filas.

```js
assert(matrix.length == 3);
```

La variable `matrix` debe tener 2 columnas en cada fila.

```js
assert(
  matrix[0].length == 2 && matrix[1].length === 2 && matrix[2].length === 2
);
```

`zeroArray(4,3)` debe devolver un arreglo con 4 filas de 3 columnas de ceros cada una.

```js
assert(JSON.stringify(zeroArray(4,3)) == '[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]');
```

# --seed--

## --seed-contents--

```js
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

```

# --solutions--

```js
function zeroArray(m, n) {
 // Creates a 2-D array with m rows and n columns of zeroes
 let newArray = [];
 for (let i = 0; i < m; i++) {
   let row = [];
   // Adds the m-th row into newArray

   for (let j = 0; j < n; j++) {
     // Pushes n zeroes into the current row to create the columns
     row.push(0);
   }
   // Pushes the current row, which now has n zeroes in it, to the array
   newArray.push(row);
 }
 return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

```
