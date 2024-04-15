---
id: 5900f45f1000cf542c50ff71
title: 'Problema 242: Impares Triples'
challengeType: 1
forumTopicId: 301889
dashedName: problem-242-odd-triplets
---

# --description--

Given the set {1,2,..., $n$}, we define $f(n, k)$ as the number of its $k$-element subsets with an odd sum of elements. For example, $f(5,3) = 4$, since the set {1,2,3,4,5} has four 3-element subsets having an odd sum of elements, i.e.: {1,2,4}, {1,3,5}, {2,3,4} and {2,4,5}.

Cuando los tres valores $n$, $k$ y $f(n, k)$ son impares, decimos que hacen un triple impar $[n, k, f(n, k)]$.

Hay exactamente cinco impares triples con $n ≤ 10$, concretamente: $[1, 1, f(1, 1) = 1]$, $[5, 1, f(5, 1) = 3]$, $[5, 5, f(5, 5) = 1]$, $[9, 1, f(9, 1) = 5]$ and $[9, 9, f(9, 9) = 1]$.

Cuantos impares triples hay con $n ≤ {10}^{12}$?

# --hints--

`oddTriplets()` debería devolver `997104142249036700`.

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
