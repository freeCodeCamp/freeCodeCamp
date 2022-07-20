---
id: 594d8d0ab97724821379b1e6
title: Medie/Moda
challengeType: 1
forumTopicId: 302226
dashedName: averagesmode
---

# --description--

Scrivi una funzione `mode` per trovare il valore che appare più spesso in un array.

Il caso in cui una collezione è vuota può essere ignorato. Devi fare attenzione per gestire il caso dove la moda non è unica.

Se non è appropriato o possibile supportare una collezione generale, usa un vettore (array), se possibile. Se non è appropriato o possibile supportare un tipo di valore non specificato, usa numeri interi.

# --hints--

`mode` dovrebbe essere una funzione.

```js
assert(typeof mode === 'function');
```

`mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])` dovrebbe essere uguale a `[6]`

```js
assert.deepEqual(mode(arr1), [6]);
```

`mode([1, 2, 4, 4, 1])` dovrebbe essere uguale a `[1, 4]`.

```js
assert.deepEqual(mode(arr2).sort(), [1, 4]);
```

# --seed--

## --after-user-code--

```js
const arr1 = [1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17];
const arr2 = [1, 2, 4, 4, 1];
```

## --seed-contents--

```js
function mode(arr) {

  return true;
}
```

# --solutions--

```js
function mode(arr) {
  const counter = {};
  let result = [];
  let max = 0;
  // for (const i in arr) {
  arr.forEach(el => {
    if (!(el in counter)) {
      counter[el] = 0;
    }
    counter[el]++;

    if (counter[el] === max) {
      result.push(el);
    }
    else if (counter[el] > max) {
      max = counter[el];
      result = [el];
    }
  });
  return result;
}
```
