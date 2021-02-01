---
id: 5900f3841000cf542c50fe97
title: 'Problem 24: Lexicographic permutations'
challengeType: 5
forumTopicId: 301885
dashedName: problem-24-lexicographic-permutations
---

# --description--

A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

<div style='text-align: center;'>012   021   102   120   201   210</div>

What is the `n`th lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

# --hints--

`lexicographicPermutations(699999)` should return a number.

```js
assert(typeof lexicographicPermutations(699999) === 'number');
```

`lexicographicPermutations(699999)` should return 1938246570.

```js
assert(lexicographicPermutations(699999) == 1938246570);
```

`lexicographicPermutations(899999)` should return 2536987410.

```js
assert(lexicographicPermutations(899999) == 2536987410);
```

`lexicographicPermutations(900000)` should return 2537014689.

```js
assert(lexicographicPermutations(900000) == 2537014689);
```

`lexicographicPermutations(999999)` should return 2783915460.

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
