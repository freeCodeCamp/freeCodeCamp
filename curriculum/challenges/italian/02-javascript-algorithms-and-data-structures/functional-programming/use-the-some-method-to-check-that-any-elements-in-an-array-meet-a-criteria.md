---
id: 587d7dab367417b2b2512b6f
title: Usare il metodo some per verificare che almeno un elemento di un array soddisfi un criterio
challengeType: 1
forumTopicId: 301314
dashedName: use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria
---

# --description--

Il metodo `some` funziona con gli array per verificare se *un qualunque* elemento supera un test particolare. Restituisce un valore booleano: `true` se uno qualsiasi dei valori soddisfa i criteri, `false` altrimenti.

Ad esempio, il seguente codice controllerà se almeno un elemento nell'array `numbers` è inferiore a 10:

```js
const numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
  return currentValue < 10;
});
```

Il metodo `some` restituirà `true`.

# --instructions--

Usa il metodo `some` all'interno della funzione `checkPositive` per verificare se almeno un elemento in `arr` è positivo. La funzione dovrebbe restituire un valore booleano.

# --hints--

Il tuo codice dovrebbe usare il metodo `some`.

```js
assert(code.match(/\.some/g));
```

`checkPositive([1, 2, 3, -4, 5])` dovrebbe restituire `true`.

```js
assert(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])` dovrebbe restituire `true`.

```js
assert(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([-1, -2, -3, -4, -5])` dovrebbe restituire `false`.

```js
assert(!checkPositive([-1, -2, -3, -4, -5]));
```

# --seed--

## --seed-contents--

```js
function checkPositive(arr) {
  // Only change code below this line


  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
```

# --solutions--

```js
function checkPositive(arr) {
  return arr.some(elem => elem > 0);
}
```
