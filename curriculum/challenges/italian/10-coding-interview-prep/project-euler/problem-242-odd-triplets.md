---
id: 5900f45f1000cf542c50ff71
title: 'Problema 242: Triplette Dispari'
challengeType: 1
forumTopicId: 301889
dashedName: problem-242-odd-triplets
---

# --description--

Dato il set {1,2,..., $n$}, definiamo $f(n, k)$ come il numero dei suoi sottoinsiemi di elementi $k$ con una somma dispari di elementi. Per esempio, $f(5,3) = 4$, dal momento che il set {1,2,3,4,5} ha quattro sottoinsiemi di 3 elementi con una somma dispari di elementi, cioè: {1,2,4}, {1,3,5}, {2,3,4} e {2,4,5}.

Quando tutti e tre i valori $n$, $k$ e $f(n, k)$ sono dispari, diciamo che essi formano una tripletta dispari $[n, k, f(n, k)]$.

Ci sono esattamente cinque triplette dispari con $n ≤ 10$, cioè: $[1, 1, f(1, 1) = 1]$, $[5, 1, f(5, 1) = 3]$, $ [5, 5, f(5, 5) = 1]$, $[9, 1, f(9, 1) = 5]$ e $[9, 9, f(9, 9) = 1]$.

Quante triplette dispari ci sono con $n ≤ {10}^{12}$?

# --hints--

`oddTriplets()` dovrebbe restituire `997104142249036700`.

```js
assert.strictEqual(oddTriplets(), 997104142249036700);
```

# --seed--

## --seed-contents--

```js
function oddTriplets() {

  return true;
}

oddTriplets();
```

# --solutions--

```js
// solution required
```
