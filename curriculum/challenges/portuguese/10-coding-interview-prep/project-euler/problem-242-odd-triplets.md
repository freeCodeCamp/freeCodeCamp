---
id: 5900f45f1000cf542c50ff71
title: 'Problema 242: Trios de números ímpares'
challengeType: 1
forumTopicId: 301889
dashedName: problem-242-odd-triplets
---

# --description--

Dado o conjunto {1,2,..., $n$}, definimos $f(n, k)$ como o número de seus subconjuntos de $k$ elementos com uma soma ímpar de elementos. Por exemplo, $f(5,3) = 4$, já que o conjunto {1,2,3,4,5} tem quatro subconjuntos de 3 elementos com uma soma ímpar de elementos, sejam eles: {1,2,4}, {1,3,5}, {2,3,4} e {2,4,5}.

Quando todos os três valores de $n$, $k$ e $f(n, k)$ são ímpares, dizemos que eles fazem um trio de ímpares $[n, k, f(n, k)]$.

Há exatamente cinco trios de ímpares com $n ≤ 10$. São eles: $[1, 1, f(1, 1) = 1]$, $[5, 1, f(5, 1) = 3]$, $[5, 5, f(5, 5) = 1]$, $[9, 1, f(9, 1) = 5]$ e $[9, 9, f(9, 9) = 1]$.

Quantos trios de ímpares existem com $n ≤ {10}^{12}$?

# --hints--

`oddTriplets()` deve retornar `997104142249036700`.

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
