---
id: 56533eb9ac21ba0edf2244d0
title: Confrontare con l'operatore di uguaglianza
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKyVMAL'
forumTopicId: 16784
dashedName: comparison-with-the-equality-operator
---

# --description--

Ci sono molti <dfn>operatori di confronto</dfn> in JavaScript. Tutti questi operatori restituiscono un valore booleano `true` o  `false`.

L'operatore di base è l'operatore di uguaglianza `==`. L'operatore di uguaglianza confronta due valori e restituisce `true` se sono equivalenti o `false` se non lo sono. Nota che l’uguaglianza è diversa dall’assegnazione (`=`), che assegna il valore che si trova alla destra dell'operatore a una variabile sulla sinistra.

```js
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
```

Se `myVal` è uguale a `10`, l'operatore di uguaglianza restituisce `true`, quindi il codice tra le parentesi graffe sarà eseguito, e la funzione restituirà `Equal`. In caso contrario, la funzione restituirà `Not Equal`. Affinché JavaScript possa confrontare due differenti <dfn>tipi di dato</dfn> (per esempio `numbers` e `strings`), deve convertire un tipo in un altro. Questa operazione è nota come conversione implicita. Dopo che è stata fatta, è possibile confrontare i termini come segue:

```js
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
```

# --instructions--

Aggiungi l'operatore di uguaglianza alla riga indicata in modo che la funzione restituisca la stringa `Equal` quando `val` è equivalente a `12`.

# --hints--

`testEqual(10)` dovrebbe restituire la stringa `Not Equal`

```js
assert(testEqual(10) === 'Not Equal');
```

`testEqual(12)` dovrebbe restituire la stringa `Equal`

```js
assert(testEqual(12) === 'Equal');
```

`testEqual("12")` dovrebbe restituire la stringa `Equal`

```js
assert(testEqual('12') === 'Equal');
```

Dovresti usare l'operatore `==`

```js
assert(code.match(/==/g) && !code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
```

# --solutions--

```js
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
```
