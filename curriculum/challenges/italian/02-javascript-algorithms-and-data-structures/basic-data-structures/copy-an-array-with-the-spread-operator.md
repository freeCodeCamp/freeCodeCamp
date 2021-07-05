---
id: 587d7b7b367417b2b2512b13
title: Copiare un array con l'operatore di propagazione
challengeType: 1
forumTopicId: 301157
dashedName: copy-an-array-with-the-spread-operator
---

# --description--

Mentre `slice()` ci permette di essere selettivi su quali elementi di un array copiare, tra diverse altre attività utili, il nuovo <dfn>operatore di propagazione</dfn> di ES6 ci permette di copiare facilmente *tutti* gli elementi di un array, in ordine, con una sintassi semplice e molto leggibile. La sintassi di propagazione è semplicemente questa: `...`

In pratica, possiamo usare l'operatore di propagazione per copiare un array in questo modo:

```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
```

`thatArray` è uguale a `[true, true, undefined, false, null]`. `thisArray` rimane invariato e `thatArray` contiene gli stessi elementi di `thisArray`.

# --instructions--

Abbiamo definito una funzione, `copyMachine` che prende `arr` (un array) e `num` (un numero) come argomenti. La funzione dovrebbe restituire un nuovo array composto da `num` copie di `arr`. Abbiamo fatto la maggior parte del lavoro per te, ma non funziona ancora abbastanza bene. Modifica la funzione utilizzando la sintassi di propagazione in modo che funzioni correttamente (suggerimento: un altro metodo che abbiamo già trattato potrebbe essere utile qui!).

# --hints--

`copyMachine([true, false, true], 2)` dovrebbe restituire `[[true, false, true], [true, false, true]]`

```js
assert.deepEqual(copyMachine([true, false, true], 2), [
  [true, false, true],
  [true, false, true]
]);
```

`copyMachine([1, 2, 3], 5)` dovrebbe restituire `[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]`

```js
assert.deepEqual(copyMachine([1, 2, 3], 5), [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
]);
```

`copyMachine([true, true, null], 1)` dovrebbe restituire `[[true, true, null]]`

```js
assert.deepEqual(copyMachine([true, true, null], 1), [[true, true, null]]);
```

`copyMachine(["it works"], 3)` dovrebbe restituire `[["it works"], ["it works"], ["it works"]]`

```js
assert.deepEqual(copyMachine(['it works'], 3), [
  ['it works'],
  ['it works'],
  ['it works']
]);
```

La funzione `copyMachine` dovrebbe utilizzare lo `spread operator` (operatore di propagazione) con l'array `arr`

```js
assert(code.match(/\.\.\.arr/));
```

# --seed--

## --seed-contents--

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line

    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
```

# --solutions--

```js
function copyMachine(arr,num){
    let newArr=[];
    while(num >=1){
    newArr.push([...arr]);
    num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));
```
