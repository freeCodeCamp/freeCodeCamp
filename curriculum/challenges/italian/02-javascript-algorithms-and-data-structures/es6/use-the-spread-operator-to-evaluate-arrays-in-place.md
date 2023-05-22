---
id: 587d7b89367417b2b2512b48
title: Usare l'operatore spread per analizzare gli array in loco
challengeType: 1
forumTopicId: 301222
dashedName: use-the-spread-operator-to-evaluate-arrays-in-place
---

# --description--

ES6 introduce l'<dfn>operatore spread</dfn>, che ci permette di espandere array e altre espressioni in posizioni dove sono attesi più parametri o elementi.

Il codice ES5 qui sotto utilizza `apply()` per calcolare il valore massimo in un array:

```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
```

`maximus` avrà un valore di `89`.

Abbiamo dovuto utilizzare `Math.max.apply(null, arr)` perché `Math.max(arr)` restituisce `NaN`. `Math.max()` si aspetta argomenti separati da virgole, ma non un array. L'operatore spread rende questa sintassi migliore da leggere e manutenere.

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```

`maximus` avrà un valore di `89`.

`...arr` restituisce un array spacchettato. In other words, it spreads the array. Tuttavia, l'operatore spread funziona solo in loco, come argomento di una funzione o in un array letterale (definito usando le parentesi quadre). For example:

```js
const spreaded = [...arr];
```

However, the following code will not work:

```js
const spreaded = ...arr;
```

# --instructions--

Copy all contents of `arr1` into another array `arr2` using the spread operator.

# --hints--

`arr2` should be correct copy of `arr1`.

```js
assert(arr2.every((v, i) => v === arr1[i]) && arr2.length);
```

`...` spread operator should be used to duplicate `arr1`.

```js
assert(code.match(/Array\(\s*\.\.\.arr1\s*\)|\[\s*\.\.\.arr1\s*\]/));
```

`arr2` should remain unchanged when `arr1` is changed.

```js
assert((arr1, arr2) => {
  arr1.push('JUN');
  return arr2.length < arr1.length;
});
```

# --seed--

## --seed-contents--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);
```

# --solutions--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
```
