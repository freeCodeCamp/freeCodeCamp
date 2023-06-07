---
id: a3f503de51cfab748ff001aa
title: A coppie
challengeType: 1
forumTopicId: 301617
dashedName: pairwise
---

# --description--

Dato un array `arr`, trova coppie di elementi la cui somma è uguale al secondo argomento `arg` e restituisci la somma dei loro indici.

È possibile utilizzare più coppie che hanno gli stessi elementi numerici ma indici diversi. Ogni coppia dovrebbe utilizzare i più bassi indici disponibili. Una volta che un elemento è stato usato, non può essere riutilizzato per accoppiarsi con un altro elemento. Per esempio, `pairwise([1, 1, 2], 3)` crea una coppia `[2, 1]` usando l’1 all’indice 0 piuttosto che l’1 all’indice 1, perché 0+2 &lt; 1+2.

Per esempio `pairwise([7, 9, 11, 13, 15], 20)` restituisce `6`. Le coppie la cui somma è 20 sono `[7, 13]` e `[9, 11]`. Possiamo poi scrivere l'array con i loro indici e valori.

<div style='margin-left: 2em;'>

| Index | 0 | 1 | 2  | 3  | 4  |
| ----- | - | - | -- | -- | -- |
| Value | 7 | 9 | 11 | 13 | 15 |

</div>

Qui sotto prenderemo i loro indici corrispondenti e ne faremo la somma.

<div style='margin-left: 2em;'>

7 + 13 = 20 → Indices 0 + 3 = 3  
9 + 11 = 20 → Indices 1 + 2 = 3  
3 + 3 = 6 → Return `6`

</div>

# --hints--

`pairwise([1, 4, 2, 3, 0, 5], 7)` dovrebbe restituire 11.

```js
assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11);
```

`pairwise([1, 3, 2, 4], 4)` dovrebbe restituire 1.

```js
assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1);
```

`pairwise([1, 1, 1], 2)` dovrebbe restituire 1.

```js
assert.deepEqual(pairwise([1, 1, 1], 2), 1);
```

`pairwise([0, 0, 0, 0, 1, 1], 1)` dovrebbe restituire 10.

```js
assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10);
```

`pairwise([], 100)` dovrebbe restituire 0.

```js
assert.deepEqual(pairwise([], 100), 0);
```

# --seed--

## --seed-contents--

```js
function pairwise(arr, arg) {
  return arg;
}

pairwise([1,4,2,3,0,5], 7);
```

# --solutions--

```js
function pairwise(arr, arg) {
  var sum = 0;
  arr.forEach(function(e, i, a) {
    if (e != null) {
      var diff = arg-e;
      a[i] = null;
      var dix = a.indexOf(diff);
      if (dix !== -1) {
        sum += dix;
        sum += i;
        a[dix] = null;
      }
    }
  });
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
```
