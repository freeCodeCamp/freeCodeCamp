---
id: 5900f3841000cf542c50fe97
title: 'Problema 24: Permutaciones lexicográficas'
challengeType: 1
forumTopicId: 301885
dashedName: problem-24-lexicographic-permutations
---

# --description--

Una permutación es una disposición ordenada de objetos. Por ejemplo, 3124 es una posible permutación de los dígitos 1, 2, 3 y 4. Llamamos orden lexicográfico a todas las permutaciones listadas numérica o alfabéticamante. Las permutaciones lexicográficas de 0, 1 y 2 son:

<div style='text-align: center;'>012   021   102   120   201   210</div>

¿Cuál es la permutación que ocupa el lugar `n` en el orden lexicográfico de los dígitos 0, 1, 2, 3, 4, 5, 6, 7, 8 y 9?

# --hints--

`lexicographicPermutations(699999)` debe devolver un número.

```js
assert(typeof lexicographicPermutations(699999) === 'number');
```

`lexicographicPermutations(699999)` debe devolver 1938246570.

```js
assert(lexicographicPermutations(699999) == 1938246570);
```

`lexicographicPermutations(899999)` debe devolver 2536987410.

```js
assert(lexicographicPermutations(899999) == 2536987410);
```

`lexicographicPermutations(900000)` debe devolver 2537014689.

```js
assert(lexicographicPermutations(900000) == 2537014689);
```

`lexicographicPermutations(999999)` debe devolver 2783915460.

```js
assert(lexicographicPermutations(999999) == 2783915460);
```

# --seed--

## --seed-contents--

```js
function lexicographicPermutations(n) {

  return n;
}

lexicographicPermutations(999999);
```

# --solutions--

```js
// solution required
```
