---
id: 5900f3841000cf542c50fe97
title: 'Problema 24: Permutações lexicográficas'
challengeType: 1
forumTopicId: 301885
dashedName: problem-24-lexicographic-permutations
---

# --description--

Uma permutação consiste de elementos que podem formar agrupamentos que se diferenciam apenas pela ordem. Por exemplo, 3124 é uma possível permutação dos algarismos 1, 2, 3 e 4. Se todas as permutações estiverem listadas numericamente ou em ordem alfabética, chamamos isso de ordem lexicográfica. As permutações lexicográficas de 0, 1 e 2 são:

<div style='text-align: center;'>012   021   102   120   201   210</div>

Qual é a `n`-ésima permutação lexicográfica dos algarismos 0, 1, 2, 3, 4, 5, 6, 7, 8 e 9?

# --hints--

`lexicographicPermutations(699999)` deve retornar um número.

```js
assert(typeof lexicographicPermutations(699999) === 'number');
```

`lexicographicPermutations(699999)` deve retornar 1938246570.

```js
assert(lexicographicPermutations(699999) == 1938246570);
```

`lexicographicPermutations(899999)` deve retornar 2536987410.

```js
assert(lexicographicPermutations(899999) == 2536987410);
```

`lexicographicPermutations(900000)` deve retornar 2537014689.

```js
assert(lexicographicPermutations(900000) == 2537014689);
```

`lexicographicPermutations(999999)` deve retornar 2783915460.

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
