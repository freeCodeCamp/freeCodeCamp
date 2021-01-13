---
id: 5900f3b21000cf542c50fec5
title: 'Problem 70: Totient permutation'
challengeType: 5
forumTopicId: 302183
dashedName: problem-70-totient-permutation
---

# --description--

Euler's Totient function, φ(`n`) \[sometimes called the phi function], is used to determine the number of positive numbers less than or equal to `n` which are relatively prime to `n`. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime to nine, φ(9)=6. The number 1 is considered to be relatively prime to every positive number, so φ(1)=1.

Interestingly, φ(87109)=79180, and it can be seen that 87109 is a permutation of 79180.

Find the value of `n`, 1 &lt; `n` &lt; 10<sup>7</sup>, for which φ(`n`) is a permutation of `n` and the ratio `n`/φ(`n`) produces a minimum.

# --hints--

`totientPermutation()` should return a number.

```js
assert(typeof totientPermutation() === 'number');
```

`totientPermutation()` should return 8319823.

```js
assert.strictEqual(totientPermutation(), 8319823);
```

# --seed--

## --seed-contents--

```js
function totientPermutation() {

  return true;
}

totientPermutation();
```

# --solutions--

```js
// solution required
```
