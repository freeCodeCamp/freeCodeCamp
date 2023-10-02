---
id: 587d7b86367417b2b2512b3c
title: Usare cautela quando reinizializzi delle variabili all'interno di un ciclo
challengeType: 1
forumTopicId: 301194
dashedName: use-caution-when-reinitializing-variables-inside-a-loop
---

# --description--

A volte è necessario salvare le informazioni, i contatori degli incrementi o reimpostare le variabili all'interno di un ciclo. Un potenziale problema è quando le variabili o devono essere reinizializzate e non lo sono, o viceversa. Questo è particolarmente pericoloso se si ripristina accidentalmente la variabile utilizzata per la condizione di uscita, causando un ciclo infinito.

Stampare i valori delle variabili ad ogni passo del tuo ciclo utilizzando `console.log()` può scovare un'azione buggata relativa al ripristino, o al mancato ripristino di una variabile.

# --instructions--

La seguente funzione dovrebbe creare un array bidimensionale con `m` righe e `n` colonne di zeri. Purtroppo, non produce l'output previsto perché la variabile `row` non viene reinizializzata (impostata nuovamente a un array vuoto) nel loop esterno. Aggiusta il codice in modo che restituisca l'array 3x2 di zeri corretto, che appare come `[[0, 0], [0, 0], [0, 0]]`.

# --hints--

Il tuo codice dovrebbe impostare la variabile `matrix` su un array contenente 3 righe di 2 colonne di zeri ciascuna.

```js
assert(JSON.stringify(matrix) == '[[0,0],[0,0],[0,0]]');
```

La variabile `matrix` dovrebbe avere 3 righe.

```js
assert(matrix.length == 3);
```

La variabile `matrix` dovrebbe avere 2 colonne in ogni riga.

```js
assert(
  matrix[0].length == 2 && matrix[1].length === 2 && matrix[2].length === 2
);
```

`zeroArray(4,3)` dovrebbe restituire un array contenente 4 righe di 3 colonne di zeri ciascuna.

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
