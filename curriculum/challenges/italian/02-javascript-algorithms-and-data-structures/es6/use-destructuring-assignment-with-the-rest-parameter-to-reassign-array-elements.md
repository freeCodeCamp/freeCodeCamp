---
id: 587d7b8a367417b2b2512b4c
title: >-
  Destrutturazione tramite elementi rest
challengeType: 1
forumTopicId: 301218
dashedName: >-
  use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements
---

# --description--

In alcune situazioni che comportano la destrutturazione di array, potremmo voler raccogliere il resto degli elementi in un array separato.

Il risultato è simile a `Array.prototype.slice()`, come mostrato sotto:

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
```

La console mostrerà i valori `1, 2` e `[3, 4, 5, 7]`.

Le variabili `a` e `b` prendono il primo e il secondo valore dall'array. Dopodiché, a causa della presenza della sintassi rest, `arr` ottiene il resto dei valori sotto forma di un array. L'elemento di resto funziona correttamente solo come ultima variabile dell'elenco. Non è quindi possibile utilizzare la sintassi rest per raccogliere un sottoarray che lascia fuori l'ultimo elemento dell'array originale.

# --instructions--

Usa un'assegnazione destrutturante con la sintassi rest per emulare il comportamento di `Array.prototype.slice()`. `removeFirstTwo()` dovrebbe restituire un sotto-array dell'array originario `list` con i primi due elementi omessi.

# --hints--

`removeFirstTwo([1, 2, 3, 4, 5])` dovrebbe essere `[3, 4, 5]`

```js
const testArr_ = [1, 2, 3, 4, 5];
const testArrWORemoved_ = removeFirstTwo(testArr_);
assert(testArrWORemoved_.every((e, i) => e === i + 3) && testArrWORemoved_.length === 3);
```

`removeFirstTwo()` non dovrebbe modificare `list`

```js
const testArr_ = [1, 2, 3, 4, 5];
const testArrWORemoved_ = removeFirstTwo(testArr_);
assert(testArr_.every((e, i) => e === i + 1) && testArr_.length === 5);
```

`Array.slice()` non dovrebbe essere utilizzato.

```js
(getUserInput) => assert(!getUserInput('index').match(/slice/g));
```

Si dovrebbe utilizzare la destrutturazione su `list`.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\[(([_$a-z]\w*)?,){1,}\.\.\.shorterList\]=list/i)
);
```

# --seed--

## --seed-contents--

```js
function removeFirstTwo(list) {
  // Only change code below this line
  const shorterList = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```

# --solutions--

```js
function removeFirstTwo(list) {
  const [, , ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```
