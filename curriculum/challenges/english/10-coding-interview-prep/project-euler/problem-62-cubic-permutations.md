---
id: 5900f3aa1000cf542c50febd
title: 'Problem 62: Cubic permutations'
challengeType: 5
forumTopicId: 302174
dashedName: problem-62-cubic-permutations
---

# --description--

The cube, 41063625 (345<sup>3</sup>), can be permuted to produce two other cubes: 56623104 (384<sup>3</sup>) and 66430125 (405<sup>3</sup>). In fact, 41063625 is the smallest cube which has exactly three permutations of its digits which are also cube.

Find the smallest cube for which exactly `n` permutations of its digits are cube.

# --hints--

`cubicPermutations(2)` should return a number.

```js
assert(typeof cubicPermutations(2) === 'number');
```

`cubicPermutations(2)` should return `125`.

```js
assert.strictEqual(cubicPermutations(2), 125);
```

`cubicPermutations(3)` should return `41063625`.

```js
assert.strictEqual(cubicPermutations(3), 41063625);
```

`cubicPermutations(4)` should return `1006012008`.

```js
assert.strictEqual(cubicPermutations(4), 1006012008);
```

`cubicPermutations(5)` should return `127035954683`.

```js
assert.strictEqual(cubicPermutations(5), 127035954683);
```

# --seed--

## --seed-contents--

```js
function cubicPermutations(n) {

  return true;
}

cubicPermutations(2);
```

# --solutions--

```js
// solution required
```
