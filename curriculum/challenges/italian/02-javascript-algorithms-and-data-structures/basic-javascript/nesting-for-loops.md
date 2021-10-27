---
id: 56533eb9ac21ba0edf2244e1
title: Annidare i cicli For
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6GHM'
forumTopicId: 18248
dashedName: nesting-for-loops
---

# --description--

Se disponi di un array multidimensionale, è possibile utilizzare la stessa logica del punto precedente per iterare sia attraverso l'array che attraverso i suoi sottoarray. Ecco un esempio:

```js
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```

Questo invia alla console ogni elemento presente in `arr`, uno alla volta. Nota che nel ciclo interno leggiamo la `.length` di `arr[i]`, dal momento che `arr[i]` è esso stesso un array.

# --instructions--

Modifica la funzione `multiplyAll` in modo che restituisca il prodotto di tutti i numeri nei sotto-array di `arr`.

# --hints--

`multiplyAll([[1], [2], [3]])` dovrebbe restituire `6`

```js
assert(multiplyAll([[1], [2], [3]]) === 6);
```

`multiplyAll([[1, 2], [3, 4], [5, 6, 7]])` dovrebbe restituire `5040`

```js
assert(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
  ]) === 5040
);
```

`multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]])` dovrebbe restituire `54`

```js
assert(
  multiplyAll([
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9]
  ]) === 54
);
```

# --seed--

## --seed-contents--

```js
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line

  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
```

# --solutions--

```js
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
```
