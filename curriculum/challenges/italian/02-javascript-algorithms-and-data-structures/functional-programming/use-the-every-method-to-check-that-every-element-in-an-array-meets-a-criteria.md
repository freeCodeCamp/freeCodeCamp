---
id: 587d7dab367417b2b2512b6e
title: Usare il metodo every per controllare che ogni elemento in un array corrisponda a un criterio
challengeType: 1
forumTopicId: 301312
dashedName: use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria
---

# --description--

Il metodo `every` funziona con gli array per controllare se *ogni* elemento supera un test particolare. Restituisce un valore booleano: `true` se tutti i valori soddisfano i criteri, `false` in caso contrario.

Ad esempio, il seguente codice controllerà se ogni elemento nell'array `numbers` è inferiore a 10:

```js
const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});
```

In questo caso il metodo `every` restituirà `false`.

# --instructions--

Usa il metodo `every` all'interno della funzione `checkPositive` per verificare se ogni elemento in `arr` è positivo. La funzione dovrebbe restituire un valore booleano.

# --hints--

Il tuo codice dovrebbe utilizzare il metodo `every`.

```js
assert(code.match(/\.every/g));
```

`checkPositive([1, 2, 3, -4, 5])` dovrebbe restituire `false`.

```js
assert.isFalse(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])` dovrebbe restituire `true`.

```js
assert.isTrue(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([1, -2, 3, -4, 5])` dovrebbe restituire `false`.

```js
assert.isFalse(checkPositive([1, -2, 3, -4, 5]));
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
  return arr.every(num => num > 0);
}
```
