---
id: 5900f3ce1000cf542c50fee0
title: 'Problem 97: Large non-Mersenne prime'
challengeType: 5
forumTopicId: 302214
dashedName: problem-97-large-non-mersenne-prime
---

# --description--

The first known prime found to exceed one million digits was discovered in 1999, and is a Mersenne prime of the form 2<sup>6972593</sup>−1; it contains exactly 2,098,960 digits. Subsequently other Mersenne primes, of the form 2<sup><var>p</var></sup>−1, have been found which contain more digits.

However, in 2004 there was found a massive non-Mersenne prime which contains 2,357,207 digits: 28433×2<sup>7830457</sup>+1.

Find the last ten digits of this prime number.

# --hints--

`lrgNonMersennePrime()` should return a number.

```js
assert(typeof lrgNonMersennePrime() === 'number');
```

`lrgNonMersennePrime()` should return 8739992577.

```js
assert.strictEqual(lrgNonMersennePrime(), 8739992577);
```

# --seed--

## --seed-contents--

```js
function lrgNonMersennePrime() {

  return true;
}

lrgNonMersennePrime();
```

# --solutions--

```js
// solution required
```
