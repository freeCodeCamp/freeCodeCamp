---
id: 587d7b8a367417b2b2512b4c
title: >-
  Usare l'assegnazione destrutturante con il parametro di resto per riassegnare gli elementi dell'array
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

Le variabili `a` e `b` prendono il primo e il secondo valore dall'array. Dopodiché, a causa della presenza del parametro di resto, `arr` ottiene il resto dei valori sotto forma di un array. L'elemento di resto funziona correttamente solo come ultima variabile dell'elenco. Non è quindi possibile utilizzare il parametro di resto per catturare un sottoarray che lascia fuori l'ultimo elemento dell'array originale.

# --instructions--

Usa l'assegnazione destrutturante con il parametro di resto per eseguire un efficace `Array.prototype.slice()` in modo che `arr` sia il sottoarray dell'array originale `source` con i primi due elementi omessi.

# --hints--

`arr` dovrebbe essere `[3,4,5,6,7,8,9,10]`

```js
assert(arr.every((v, i) => v === i + 3) && arr.length === 8);
```

`source` dovrebbe essere `[1,2,3,4,5,6,7,8,9,10]`

```js
assert(source.every((v, i) => v === i + 1) && source.length === 10);
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
    .match(/\[(([_$a-z]\w*)?,){1,}\.\.\.arr\]=list/i)
);
```

# --seed--

## --seed-contents--

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const arr = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
```

# --solutions--

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
```
