---
id: 5900f3841000cf542c50fe97
title: 'Problem 24: Lexikographische Permutationen'
challengeType: 1
forumTopicId: 301885
dashedName: problem-24-lexicographic-permutations
---

# --description--

Eine Permutation ist eine geordnete Anordnung von Objekten. Zum Beispiel ist 3124 eine mögliche Permutation der Ziffern 1, 2, 3 und 4. Wenn alle Permutationen numerisch oder alphabetisch aufgelistet sind, nennen wir sie lexikographisch. Die lexikographischen Permutationen von 0, 1 und 2 sind:

<div style='text-align: center;'>012 021 102 120 201 210</div>

Was ist die `n`-te lexikographische Permutation der Ziffern 0, 1, 2, 3, 4, 5, 6, 7, 8 und 9?

# --hints--

`lexicographicPermutations(699999)` sollte eine Zahl zurückgeben.

```js
assert(typeof lexicographicPermutations(699999) === 'number');
```

`lexicographicPermutations(699999)` sollte 1938246570 zurückgeben.

```js
assert(lexicographicPermutations(699999) == 1938246570);
```

`lexicographicPermutations(899999)` sollte 2536987410 zurückgeben.

```js
assert(lexicographicPermutations(899999) == 2536987410);
```

`lexicographicPermutations(900000)` sollte 2537014689 zurückgeben.

```js
assert(lexicographicPermutations(900000) == 2537014689);
```

`lexicographicPermutations(999999)` sollte 2783915460 zurückgeben.

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
