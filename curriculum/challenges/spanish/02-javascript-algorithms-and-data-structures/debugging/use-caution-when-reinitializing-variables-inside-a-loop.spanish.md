---
id: 587d7b86367417b2b2512b3c
title: Use Caution When Reinitializing Variables Inside a Loop
localeTitle: Tenga cuidado al reinicializar variables dentro de un bucle
challengeType: 1
---

## Description
<section id='description'> 
A veces es necesario guardar información, incrementar los contadores o restablecer las variables dentro de un bucle. Un problema potencial es cuando las variables deben reinicializarse y no, o viceversa. Esto es particularmente peligroso si restablece accidentalmente la variable que se está utilizando para la condición del terminal, causando un bucle infinito. 
impresión de valores de variables con cada ciclo de su ciclo utilizando <code>console.log()</code> puede descubrir un comportamiento defectuoso relacionado con el restablecimiento, o no restablecer una variable. 
</section>

## Instructions
<section id='instructions'> 
Se supone que la siguiente función crea una matriz bidimensional con <code>m</code> filas <code>n</code> columnas de ceros. Desafortunadamente, no está produciendo el resultado esperado porque la variable de <code>row</code> no se está reinicializando (configurada de nuevo en una matriz vacía) en el bucle externo. Corrija el código para que devuelva una matriz correcta de 3x2 de ceros, que se parece a <code>[[0, 0], [0, 0], [0, 0]]</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe establecer la variable de <code>matrix</code> en una matriz que contenga 3 filas de 2 columnas de ceros cada una.
    testString: 'assert(JSON.stringify(matrix) == "[[0,0],[0,0],[0,0]]", "Your code should set the <code>matrix</code> variable to an array holding 3 rows of 2 columns of zeroes each.");'
  - text: La variable <code>matrix</code> debe tener 3 filas.
    testString: 'assert(matrix.length == 3, "The <code>matrix</code> variable should have 3 rows.");'
  - text: La variable <code>matrix</code> debe tener 2 columnas en cada fila.
    testString: 'assert(matrix[0].length == 2 && matrix[1].length === 2 && matrix[2].length === 2, "The <code>matrix</code> variable should have 2 columns in each row.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
