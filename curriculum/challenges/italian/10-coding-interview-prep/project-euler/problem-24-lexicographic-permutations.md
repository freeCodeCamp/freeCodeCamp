---
id: 5900f3841000cf542c50fe97
title: 'Problema 24: permutazioni lessicografiche'
challengeType: 1
forumTopicId: 301885
dashedName: problem-24-lexicographic-permutations
---

# --description--

Una permutazione è un arrangiamento di oggetti ordinato. Per esempio, 3124 è una possibile permutazione delle cifre 1, 2, 3 e 4. Se tutte le permutazioni sono elencate numericamente o alfabeticamente, lo chiamiamo ordine lessicografico. Le permutazioni lessicografiche di 0, 1 e 2 sono:

<div style='text-align: center;'>012   021   102   120   201   210</div>

Qual è l'`n`-sima permutazione lessicografica delle cifre 0, 1, 2, 3, 4, 5, 6, 7, 8 e 9?

# --hints--

`lexicographicPermutations(699999)` dovrebbe restituire un numero.

```js
assert(typeof lexicographicPermutations(699999) === 'number');
```

`lexicographicPermutations(699999)` dovrebbe restituire 1938246570.

```js
assert(lexicographicPermutations(699999) == 1938246570);
```

`lexicographicPermutations(899999)` dovrebbe restituire 2536987410.

```js
assert(lexicographicPermutations(899999) == 2536987410);
```

`lexicographicPermutations(900000)` dovrebbe restituire 2537014689.

```js
assert(lexicographicPermutations(900000) == 2537014689);
```

`lexicographicPermutations(999999)` dovrebbe restituire 2783915460.

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
